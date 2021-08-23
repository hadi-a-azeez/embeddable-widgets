import { useRouter } from "next/router";
import { getStripe } from "../utilities/stripe-client";
import { useUser } from "../utilities/useUser";

const Pricing = () => {
  const { session, userDetails, subscription } = useUser();
  const router = useRouter();

  const handleCheckout = async (productId) => {
    if (!session) {
      return router.push("/signin");
    }
    if (subscription) {
      return router.push("/account");
    }
    console.log(subscription);
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        token: session.access_token,
      }),
      credentials: "same-origin",
      body: JSON.stringify({ price: productId }),
    });
    const { sessionId } = await res.json();
    const stripeClient = await getStripe();
    stripeClient.redirectToCheckout({ sessionId });
  };

  return (
    <div style={{ display: "flex", padding: "100px" }}>
      <div
        style={{
          padding: "20px",
          backgroundColor: "lightgreen",
          height: "400px",
          minWidth: "250px",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          fontSize: "40px",
        }}
      >
        <p>Basic Plan</p>
        <b>$12</b>

        <button
          onClick={() => handleCheckout("price_1JQovjSIXunewIbCSWxDAuY3")}
          style={{
            marginTop: "40px",
            backgroundColor: "orange",
            height: "40px",
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Pricing;
