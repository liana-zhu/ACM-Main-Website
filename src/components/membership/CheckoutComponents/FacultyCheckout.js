import React, { useReducer, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import "../membership.css"
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap'

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
    priceId: "price_1H2joqEr4ylg7vlA3dXyHFqh",
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

  const [formData, setFormData] = useState({});
		const [message, setMessage] = useState("");

		const handleInput = e => {
			const copyFormData = { ...formData };
			copyFormData[e.target.name] = e.target.value;
			setFormData(copyFormData);
		};

  const handleClick = async (event) => {
    if(formData.fName === undefined || formData.lName === undefined || formData.cin === undefined || formData.email === undefined ||
      formData.phoneNumber === undefined || formData.gender === undefined || formData.enrollment === undefined || formData.status === undefined){
        window.alert("Form is not completed");
    }
    else{
      window.alert("Proceding to checkout");
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/acmcalstatela/google_sheets/VtBjglLwilQYLjMK?tabId=Faculty/Alumni",
          {
            method: "post",
            body: JSON.stringify([[formData.fName, formData.lName, formData.cin, formData.email,
            formData.phoneNumber, formData.gender, formData.birthday, formData.enrollment, formData.status]]),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const json = await response.json();
        console.log("Success:", JSON.stringify(json));
      } catch (error) {
        console.error("Error:", error);
        setMessage("Error");
      }
      // Call your backend to create the Checkout session.
      dispatch({ type: 'setLoading', payload: { loading: true } });
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [{ price: state.priceId, quantity: state.quantity }],
        successUrl: `${window.location.origin}/Success`,
        cancelUrl: `${window.location.origin}/Membership`,
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      if (error) {
        dispatch({ type: 'setError', payload: { error } });
        dispatch({ type: 'setLoading', payload: { loading: false } });
      }
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
				<h2 className="text-info">Fill Out The Form Below</h2>
        <Form onSubmit={handleClick}>
						<Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleInput} type="name" name="fName" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleInput} type="name" name="lName" placeholder="Last Name"/>
              </Form.Group>
            </Form.Row>
						<Form.Row>
              <Form.Group as={Col}>
                <Form.Label>CIN</Form.Label>
                <Form.Control onChange={handleInput} type="number" name="cin" placeholder="CIN" />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleInput} type="email" name="email" placeholder="Most Used Email"/>
              </Form.Group>
            </Form.Row>
						<Form.Row>
            <Form.Group as={Col}>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control onChange={handleInput} type="number" name="phoneNumber" placeholder="Phone Number" />
							</Form.Group>

							<Form.Group as={Col}>
							<Form.Label>Gender</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose..." name="gender">
								<option name="gender">Choose</option>
								<option name="gender">Female</option>
								<option name="gender">Male</option>
								<option name="gender">Prefer Not To Say</option>
							</Form.Control>
						</Form.Group>
            </Form.Row>
						<Form.Row>
            <Form.Group as={Col}>
							<Form.Label>Enrollment Status</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="enrollment">
								<option name="enrollment">Choose</option>
								<option name="enrollment">Enrolled Student</option>
								<option name="enrollment">Alumni</option>
								<option name="enrollment">Faculty</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Membership Status</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="status">
								<option name="status">Choose</option>
								<option name="status">New Member</option>
								<option name="status">Returning Member</option>
							</Form.Control>
						</Form.Group>
            </Form.Row>
            </Form>
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