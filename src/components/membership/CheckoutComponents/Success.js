import React from 'react'
import '../membership.css'

class Success extends React.Component{
    render(){
        return(
            <div class="quote-style-2 membership-footer-text success_message">
						<span
							className="highlight-text"><i>Thank you for your support!</i></span>
						<br></br>
						<div className="membership-text">
							You're done! Expect to hear from us!
								</div><br></br>
			</div>
        )
    }
}

export default Success;