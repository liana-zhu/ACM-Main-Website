import React, { useReducer } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import "../membership.css"

const stripePromise = loadStripe(
  "pk_live_51H0yOZEr4ylg7vlAnEDF4YfjfRe1VAEKjRMuW2Lh7zlMG9Lh68k4LZmuTm0RtR5MeNLJzkxUT0p53pdnQKgeIY1800N4Sipf5y");

const formatPrice = ({ amount, currency, quantity }) => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "USD",
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (quantity * amount).toFixed(2);
  return numberFormat.format(total);
};

function reducer(state, action) {
  switch (action.type) {
    case 'setLoading':
      return { ...state, loading: action.payload.loading };
    case 'setError':
      return { ...state, error: action.payload.error };
    default:
      throw new Error();
  }
}

const Regular = () => {
  const [state, dispatch] = useReducer(reducer, {
    priceId: "price_1H5yVcEr4ylg7vlAD4RcgNtW",
    basePrice: "5.50",
    currency: "USD",
    quantity: 1,
    price: formatPrice({
      amount: "5.50",
      currency: "USD",
      quantity: 1,
    }),
    loading: false,
    error: null,
  });

  const handleClick = async (event) => {
      // Call your backend to create the Checkout session.
      dispatch({ type: 'setLoading', payload: { loading: true } });
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: state.priceId, quantity: state.quantity }],
        successUrl: `https://forms.gle/sPxSYHHEipVxppx47`,
        cancelUrl: `${window.location.origin}/Membership`,
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      if (error) {
        dispatch({ type: 'setError', payload: { error } });
        dispatch({ type: 'setLoading', payload: { loading: false } });
      }
  };

  return (
    <div className="text-info">
      <h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ FACULTY ALUMNI TIER</h2>
      <h2 className="text-info">Benefits</h2>
      <div className="text-info">
        - Receive weekly newsletters<br></br>
      </div>
      <h2 className="text-info">How to become a member?</h2>
			<h2 className="text-info">Step 1 - Click the buy for $5 Button</h2>
			<h2 className="text-info">Step 2 - After the payment is successful, you will be redirected to a
			Google Form.</h2>
			<h2 className="text-info">Note: If the form is not complete, we cannot verify your membership</h2>
            <center>
            <h1>No Refunds</h1>
            <h6>*ADDITIONAL 50 CENTS PROCESSING FEE*</h6>
            <button className="btn btn-info btn-membership" role="link" onClick={handleClick} disabled={state.loading}>
              {state.loading || !state.price
                ? `Loading...`
                : `Buy for $5`}
            </button>
            </center>
    </div>
  );
};

export default Regular;