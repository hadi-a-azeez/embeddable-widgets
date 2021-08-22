import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51JQnyxSIXunewIbClct8OwXl5aMCrdNqY5N1pT2GwJg3EfzTssoIsf5WsCOywqAgdEvTsAtm9naufl2QmscJyuDv00ngxRIwXp"
    );
  }

  return stripePromise;
};
