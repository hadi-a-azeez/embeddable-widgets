import { stripe } from "./stripe";
import supabase from "../supabase";

const toDateTime = (secs) => {
  var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const createOrRetrieveCustomer = async ({ email, uuid }) => {
  const { data, error } = await supabase
    .from("customers")
    .select("stripe_customer_id")
    .eq("id", uuid)
    .single();
  if (error) {
    // No customer record found, let's create one.
    const customerData = {
      metadata: {
        supabaseUUID: uuid,
      },
    };
    if (email) customerData.email = email;
    const customer = await stripe.customers.create(customerData);
    // Now insert the customer ID into our Supabase mapping table.
    const { error: supabaseError } = await supabase
      .from("customers")
      .insert([{ id: uuid, stripe_customer_id: customer.id }]);
    if (supabaseError) throw supabaseError;
    console.log(`New customer created and inserted for ${uuid}.`);
    return customer.id;
  }
  if (data) return data.stripe_customer_id;
};

export const manageSubscriptionStatusChange = async (
  subscriptionId,
  customerId,
  createAction = false
) => {
  // Get customer's UUID from mapping table.
  const {
    data: { id: uuid },
    error: noCustomerError,
  } = await supabase
    .from("customers")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();
  if (noCustomerError) throw noCustomerError;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ["default_payment_method"],
  });
  // Upsert the latest status of the subscription object.
  const subscriptionData = {
    id: subscription.id,
    user_id: uuid,
    metadata: subscription.metadata,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    quantity: subscription.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    cancel_at: subscription.cancel_at
      ? toDateTime(subscription.cancel_at)
      : null,
    canceled_at: subscription.canceled_at
      ? toDateTime(subscription.canceled_at)
      : null,
    current_period_start: toDateTime(subscription.current_period_start),
    current_period_end: toDateTime(subscription.current_period_end),
    created: toDateTime(subscription.created),
    ended_at: subscription.ended_at ? toDateTime(subscription.ended_at) : null,
    trial_start: subscription.trial_start
      ? toDateTime(subscription.trial_start)
      : null,
    trial_end: subscription.trial_end
      ? toDateTime(subscription.trial_end)
      : null,
  };

  const { error } = await supabaseAdmin
    .from("subscriptions")
    .insert([subscriptionData], { upsert: true });
  if (error) throw error;
  console.log(
    `Inserted/updated subscription [${subscription.id}] for user [${uuid}]`
  );

  // For a new subscription copy the billing details to the customer object.
  // NOTE: This is a costly operation and should happen at the very end.
  if (createAction && subscription.default_payment_method)
    await copyBillingDetailsToCustomer(
      uuid,
      subscription.default_payment_method
    );
};

export const getUser = async (token) => {
  const { data, error } = await supabase.auth.api.getUser(token);

  if (error) {
    throw error;
  }

  return data;
};
