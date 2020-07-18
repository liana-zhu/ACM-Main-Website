import React, { useReducer, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Membership from '../Membership.js';
import "../membership.css"
import Form from 'react-bootstrap/Form';
import { Tabs, Row, Col, Tab, Nav, Button, Card, Jumbotron, Container, Image, Accordion } from 'react-bootstrap'
import Success from './Success.js';

const stripePromise = loadStripe("pk_test_51GwzM0FqLu53Ah4hLXaRHf8ZcAYJfCGm6gFE6gqmgjR1YSraH4xlsE49u5q0uWKwXsXxMClx8kFUudzzTXuUWHgN00zJVwNfwE");

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

const Gold = () => {
  const [state, dispatch] = useReducer(reducer, {
    priceId: "price_1GwzOaFqLu53Ah4hBHmzdhIi",
    basePrice: "12",
    currency: "USD",
    quantity: 1,
    price: formatPrice({
      amount: "12",
      currency: "USD",
      quantity: 1,
    }),
    loading: false,
    error: null,
  });

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
	const [message, setMessage] = useState("");

		const handleInput = e => {
			const copyFormData = { ...formData };
			copyFormData[e.target.name] = e.target.value;
			setFormData(copyFormData);
		};

  const handleClick = async (event) => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/srivats/google_sheets/hcLqPllkKrgwoDAi?tabId=Gold",
        {
          method: "post",
          body: JSON.stringify([[formData.fName, formData.lName, formData.cin, formData.email,
        formData.phoneNumber, formData.gender, formData.birthday, formData.enrollment,
        formData.standing, formData.major, formData.minor, formData.status, formData.hear,
        formData.gain, formData.project, formData.size]]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    //   setMessage(json.message);
      console.log(formData.fName, formData.lName, formData.cin, formData.email,
      formData.phoneNumber, formData.gender, formData.birthday, formData.enrollment,
      formData.standing, formData.major, formData.minor, formData.status, formData.hear,
      formData.gain, formData.project, formData.size);
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

  return (
    <div className="text-info">
                <h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ GOLD TIER</h2>
				<h2 className="text-info">Benefits</h2>
				<div className="text-info">
				- ACM's "It's not a bug; It's a feature" T-Shirt included.<br></br>
				- All benefits from student/faculty membership included.<br></br>
				</div>
				<a href="https://i.imgur.com/RerJpNV.png"><img className="shirt-image" src="https://i.imgur.com/RerJpNV.png"></img></a>
				<h2 className="text-info">How to become a member?</h2>
				<h2 className="text-info">Fill Out The Form Below</h2>
        <Form onSubmit={handleClick}>
            <Form.Group as={Col}>
							<Form.Label>First Name</Form.Label>
							<Form.Control onChange={handleInput} type="name" name="fName" placeholder="First Name" />
						</Form.Group>

							<Form.Group as={Col}>
							<Form.Label>Last Name</Form.Label>
							<Form.Control required onChange={handleInput} type="name" name="lName" placeholder="Last Name"/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>CIN</Form.Label>
							<Form.Control required onChange={handleInput} type="number" name="cin" placeholder="CIN" />
							</Form.Group>

							<Form.Group as={Col}>
							<Form.Label>Email</Form.Label>
							<Form.Control required onChange={handleInput} type="email" name="email" placeholder="Most Used Email"/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Phone Number</Form.Label>
							<Form.Control required onChange={handleInput} type="number" name="phoneNumber" placeholder="Phone Number" />
							</Form.Group>

							<Form.Group as={Col}>
							<Form.Label>Gender</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="gender">
								<option name="gender">Choose</option>
								<option name="gender">Female</option>
								<option name="gender">Male</option>
								<option name="gender">Prefer Not To Say</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Birthday</Form.Label>
							<Form.Control required onChange={handleInput} type="text" name="birthday" placeholder="Birthday" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Enrollment Status</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="enrollment">
								<option name="enrollment">Choose</option>
								<option name="enrollment">Enrolled Student</option>
								<option name="enrollment">Alumni</option>
								<option name="enrollment">Faculty</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Class Standing</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="standing">
								<option name="standing">Choose</option>
								<option name="standing">Freshman</option>
								<option name="standing">Sophomore</option>
								<option name="standing">Junior</option>
								<option name="standing">Senior</option>
								<option name="standing">Other</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Major</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="major">
								<option name="major">Choose</option>
								<option name="major">Pre - Computer Science</option>
								<option name="major">Computer Science</option>
								<option name="major">Mechanical Engineering</option>
								<option name="major">Civil Engineering</option>
								<option name="major">Electrical Engineering</option>
								<option name="major">Techology</option>
								<option name="major">Other</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Minor</Form.Label>
							<Form.Control required onChange={handleInput} type="text" name="minor" placeholder="Minor (Optional)" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Membership Status</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="status">
								<option name="status">Choose</option>
								<option name="status">New Member</option>
								<option name="status">Returning Member</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>How Did You Hear About ACM?</Form.Label>
							<Form.Control required onChange={handleInput} type="text" name="hear" placeholder="How Did you hear about ACM" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>What Do you wish to gain from ACM?</Form.Label>
							<Form.Control required onChange={handleInput} type="text" name="gain" placeholder="What Do you wish to gain from ACM" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Project</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="project">
								<option name="project">Choose</option>
								<option name="project">Minecraft Mod (Beginners)</option>
								<option name="project">Discord Bot (Advanced)</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>T-shirt Size</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="size">
								<option name="size">Choose</option>
								<option name="size">Small</option>
								<option name="size">Medium</option>
								<option name="size">Large</option>
								<option name="size">Extra Large</option>
							</Form.Control>
						</Form.Group>
            </Form>
            <center>
            <h1>No Refunds</h1>
            <button className="btn btn-info btn-membership" role="link" onClick={handleClick} disabled={state.loading}>
              {state.loading || !state.price
                ? `Loading...`
                : `Buy for $12`}
            </button>
            </center>
    </div>
  );
};

export default Gold;