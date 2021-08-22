import { stripe } from "../../utilities/stripe";
import {
  createOrRetrieveCustomer,
  getUser,
} from "../../utilities/supabaseFunctions";

const createCheckoutSession = async (req, res) => {
  if (req.method === "POST") {
    const token = req.headers.token;
    const { price, quantity = 1, metadata = {} } = req.body;
    try {
      const user = await getUser(token);
      const customer = await createOrRetrieveCustomer({
        uuid: user.id,
        email: user.email,
      });

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        customer,
        allow_promotion_codes: true,

        line_items: [
          {
            price: price,
            quantity: 1,
          },
        ],
        // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
        // the actual Session ID is returned in the query parameter when your customer
        // is redirected to the success page.
        success_url:
          "http://localhost:3000/billingsuccess?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "https://example.com/canceled.html",
      });
      return res.status(200).json({ sessionId: session.id });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default createCheckoutSession;
