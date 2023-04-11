const fetch = require('node-fetch');

const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY/* 'sk_test_51MamPiLPNdUzkCF3xdRvn0nkLpOrsJFo1um4Z7e07FlQXH6T7HCHhRxYkVjkK2iPW61EMZKoDM0ml6YSdWmAPcEn00E3jb1Gcr' */, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/checkout-one-time-payments",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments"
  }
});

export const handler = async (req, res) => {
  console.log(req.body)
  const {cart} = req.body
  console.log(cart)
  console.log(res, 'res')
  const session = await stripe.checkout.sessions.create({
    line_items: cart,
    mode: 'payment',
    success_url: `https://humainegrandeur.netlify.app/Shop?success=true`,
    cancel_url: `https://humainegrandeur.netlify.app/Shop?canceled=true`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  }
}


