import React from 'react'
import Image0 from './leaders/alexis.jpg'

import Image1 from './leaders/andrew.jpg'
import Image2 from './leaders/brian.jpg'
import Image3 from './leaders/david.jpg'
import Image4 from './leaders/deric.jpg'
import Image5 from './leaders/diego.jpg'
import Image6 from './leaders/emily.jpg'
import Image7 from './leaders/gio.jpg'
import Image8 from './leaders/Giovanni.jpg'
import Image9 from './leaders/ingelbert.jpg'
import Image10 from './leaders/kalvin.jpg'
import "./aboutus.css"
import Header from '../header/Header.js';


const aboutus = () => {
	return (

		<div className="test">
			<Header/>
			<div class="container">
			  <div class="row">
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image0}></img>
			    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
			    </div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image2}></img>
			    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers"src={Image1}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			  </div>
			  <div class="row">
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image4}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image5}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers"src={Image6}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			  </div>
			  <div class="row">
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image7}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers" src={Image8}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			    <div class="col-sm">
			      <img className="image-cropper profile-pic officers"src={Image9}></img>
			    				    	<span className="highlight-text-style2"><b><i>  FirstName LastName</i></b></span> | ACM Leader Title<br></br>
</div>
			  </div>
			</div>
		</div>
	)
}

export default aboutus