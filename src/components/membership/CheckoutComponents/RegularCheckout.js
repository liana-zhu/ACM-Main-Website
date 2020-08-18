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

	const [formData, setFormData] = useState({});
	// eslint-disable-next-line
	const [message, setMessage] = useState("");
	// eslint-disable-next-line
	const [validated, setValidated] = useState(false);

	const handleInput = e => {
		const copyFormData = { ...formData };
		copyFormData[e.target.name] = e.target.value;
		setFormData(copyFormData);
	};

  const handleClick = async (event) => {
	  if(formData.fName === undefined || formData.lName === undefined || formData.cin === undefined|| formData.email === undefined||
		formData.phoneNumber === undefined|| formData.gender === undefined|| formData.enrollment === undefined||
		formData.standing === undefined|| formData.major === undefined|| formData.status === undefined|| formData.project === undefined|| formData.hear === undefined||
		formData.gain === undefined){
		  console.log(formData.gender);
		  window.alert("Some of the fields are empty");
		  event.preventDefault();
		//   event.stopPropagation();
	  }
	  else{
		  window.alert("Proceeding to checkout")
		try {
			const response = await fetch(
			  "https://v1.nocodeapi.com/acmcalstatela/google_sheets/VtBjglLwilQYLjMK?tabId=Regular",
			  {
				method: "post",
				body: JSON.stringify([[formData.fName, formData.lName, formData.cin, formData.email,
				formData.phoneNumber, formData.gender, formData.enrollment,
				formData.standing, formData.major, formData.minor, formData.status, formData.project, formData.hear,
				formData.gain]]),
				headers: {
				  "Content-Type": "application/json"
				}
			  }
			);
			const json = await response.json();
			console.log("Success:", JSON.stringify(json));
		  //   setMessage(json.message);
		  } catch (error) {
			console.error("Error:", error);
			setMessage("Error");
		  }
		  window.alert('You Will Be Redirected from this page to complete the payment');
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
			<h2><span className="highlight-text"><b><i>ACM Membership</i></b></span> ❖ REGULAR TIER</h2>
			<h2 className="text-info">Benefits</h2>
			<div className="text-info">
				- Receive weekly newsletters.<br></br>
				- Access to project workshops (Beginner/Advanced).<br></br>
				- Access to professional development workshops.<br></br>
				- Access to Mentorship program.<br></br>
			</div>
			<p><b>*You will have to make a $5 payment*</b></p>
			<p><b>*There will be a separate signup for the Project and Mentorship*</b></p>
			<h2 className="text-info">How to become a member?</h2>
			<h2 className="text-info">Fill Out The Form Below</h2>
			<Form noValidate validated={validated} onSubmit={handleClick}>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>First Name *</Form.Label>
						<Form.Control onChange={handleInput} type="name" name="fName" placeholder="First Name" required />
						<Form.Control.Feedback type="invalid">First Name Required</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Last Name *</Form.Label>
						<Form.Control onChange={handleInput} type="name" name="lName" placeholder="Last Name" />
						<Form.Control.Feedback type="invalid">Last Name Required</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>CIN *</Form.Label>
						<Form.Control onChange={handleInput} type="number" name="cin" placeholder="CIN" />
						<Form.Control.Feedback type="invalid">CIN Is Required</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Email *</Form.Label>
						<Form.Control onChange={handleInput} type="email" name="email" placeholder="Most Used Email" />
						<Form.Control.Feedback type="invalid">Email Is Required</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Phone Number *</Form.Label>
						<Form.Control onChange={handleInput} type="number" name="phoneNumber" placeholder="Phone Number" />
						<Form.Control.Feedback type="invalid">Phone Number Is Required</Form.Control.Feedback>
					</Form.Group>

							<Form.Group as={Col}>
							<Form.Label>Gender *</Form.Label>
							<Form.Control required onChange={handleInput} as="select" name="gender">
								<option name="gender">Choose</option>
								<option name="gender">Female</option>
								<option name="gender">Male</option>
								<option name="gender">Prefer Not To Say</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">Choose A Gender</Form.Control.Feedback>
						</Form.Group>
						</Form.Row>
						<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Enrollment Status *</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="enrollment">
								<option name="enrollment">Choose</option>
								<option name="enrollment">Enrolled Student</option>
								<option name="enrollment">New Student</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">Enrollment Status Is Required</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Class Standing *</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="standing">
								<option name="standing">Choose</option>
								<option name="standing">Freshman</option>
								<option name="standing">Sophomore</option>
								<option name="standing">Junior</option>
								<option name="standing">Senior</option>
								<option name="standing">Other</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">Class Standing Is Required</Form.Control.Feedback>
						</Form.Group>
						</Form.Row>
						<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Major *</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="major">
								<option name="major">Choose</option>
								<option name="major">Pre-Computer Science</option>
								<option name="major">Computer Science</option>
								<option name="major">Mechanical Engineering</option>
								<option name="major">Civil Engineering</option>
								<option name="major">Electrical Engineering</option>
								<option name="major">Technology</option>
								<option name="major">Other</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">Major is required</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Minor</Form.Label>
							<Form.Control onChange={handleInput} type="text" name="minor" placeholder="Minor (Optional)" />
						</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Membership Status? *</Form.Label>
								<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="status">
									<option name="status">Choose</option>
									<option name="status">New Member</option>
									<option name="status">Returning Member</option>
								</Form.Control>
								<Form.Control.Feedback type="invalid">Membership Status Is Required</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col}>
							<Form.Label>Which Program are you interested in? *</Form.Label>
							<Form.Control onChange={handleInput} as="select" name="project">
								<option name="project">Choose</option>
								<option name="project">Minecraft Mod (Beginner)</option>
								<option name="project">Discord Bot (Advanced)</option>
								<option name="project">Mentorship</option>
								<option name="project">Minecraft Mod + Mentorship</option>
								<option name="project">Discord Bot + Mentorship</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">Project Choice Is Required</Form.Control.Feedback>
						</Form.Group>
						</Form.Row>
						<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>How Did You Hear About ACM? *</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="hear">
								<option name="hear">Choose</option>
								<option name="hear">ACM Website</option>
								<option name="hear">Social Media</option>
								<option name="hear">Flyer</option>
								<option name="hear">Recruitment Event</option>
								<option name="hear">ENGR 1540 Recruitment</option>
								<option name="hear">CS 1010 Recruitment</option>
								<option name="hear">CS Presentation</option>
								<option name="hear">ACM Leader/Member</option>
								<option name="hear">Friend</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>What Do you wish to gain from ACM? *</Form.Label>
							<Form.Control onChange={handleInput} as="select" defaultValue="Choose" name="gain">
								<option name="hear">Choose</option>
								<option name="hear">Networking Opportunities with professionals</option>
								<option name="hear">Leadership Development</option>
								<option name="hear">Project experience</option>
								<option name="hear">Internship Opportunities</option>
								<option name="hear">Scholarship Opportunities</option>
								<option name="hear">All of the above</option>
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