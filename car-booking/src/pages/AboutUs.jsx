function AboutUs(){

const containerStyle={
padding:"30px",
maxWidth:"900px",
margin:"auto",
lineHeight:"1.6"
}

const headingStyle={
color:"#1e90ff",
marginBottom:"15px"
}

return(

<div style={containerStyle}>

<h2 style={headingStyle}>About TaxiApp</h2>

<p>
TaxiApp is a modern cab booking platform designed to provide fast,
safe, and reliable transportation services. Our goal is to make city
travel easy and convenient for everyone.
</p>

<h3 style={headingStyle}>Our Mission</h3>

<p>
Our mission is to connect passengers with professional drivers and
provide a seamless ride booking experience using technology.
</p>

<h3 style={headingStyle}>Our Services</h3>

<ul>

<li>24/7 Taxi Booking</li>

<li>Multiple Cab Options (Mini, Sedan, SUV, Luxury)</li>

<li>Experienced and Verified Drivers</li>

<li>Affordable Pricing</li>

<li>Real-time Booking and Tracking</li>

</ul>

<h3 style={headingStyle}>Why Choose Us?</h3>

<ul>

<li>Safe and secure rides</li>

<li>Quick booking process</li>

<li>Professional drivers</li>

<li>Reliable customer support</li>

</ul>

</div>

)

}

export default AboutUs;