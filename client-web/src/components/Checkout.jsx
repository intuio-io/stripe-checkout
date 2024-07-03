import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_grhUANIXjxS21bSpMXhxnu8p004kCtDRgO");

const Checkout = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");

    if (userId) {
      createCheckoutSession(userId);
    }
  }, [location]);

  const createCheckoutSession = async (userId) => {
    const response = await fetch(
      "https://e053-180-233-148-202.ngrok-free.app/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          itemName: "Your Item Name",
          currency: "usd",
          amount: 2000,
          quantity: 1,
        }), // example of dynamic data
      }
    );
    const session = await response.json();

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error("Stripe checkout error:", error);
    }
  };

  return <div>Redirecting to payment...</div>;
};

export default Checkout;
