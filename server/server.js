const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_kbSjzmW1p4KFgy4Dl3TJusMB00iWeSI7oz"); // Replace with your Stripe secret key

const app = express();
app.use(cors()); // Allow requests from any origin
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  const { userId, itemName, currency, amount, quantity } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: itemName,
            },
            unit_amount: amount,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `https://stripe-checkout-2d304.web.app/success?session_id={CHECKOUT_SESSION_ID}&user_id=${userId}`,
      cancel_url: "https://stripe-checkout-2d304.web.app/cancel", // Replace with your web app's cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send(`Error creating checkout session: ${error.message}`);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
