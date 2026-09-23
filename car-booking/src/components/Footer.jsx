
import { Link } from "react-router-dom";

function Footer() {

const footerStyle={
backgroundColor:"#222",
color:"white",
padding:"20px",
marginTop:"40px"
}

const containerStyle={
display:"flex",
justifyContent:"space-around",
flexWrap:"wrap"
}

const sectionStyle={
margin:"10px"
}

return(

<footer style={footerStyle}>

<div style={containerStyle}>

{/* Company Section */}
<div style={sectionStyle}>
<h3>TaxiApp</h3>
<p>Fast and reliable taxi booking service.</p>
<p>Available 24/7 across the city.</p>
</div>

{/* Quick Links */}
<div style={sectionStyle}>
<h3>Quick Links</h3>

<p><Link to="/" style={{color:"white"}}>Home</Link></p>
<p><Link to="/booking" style={{color:"white"}}>Book Cab</Link></p>
<p><Link to="/about" style={{color:"white"}}>About Us</Link></p>
<p><Link to="/contact" style={{color:"white"}}>Contact Us</Link></p>

</div>

{/* Contact Section */}
<div style={sectionStyle}>
<h3>Contact</h3>
<p>Email : support@taxiapp.com</p>
<p>Phone : +91 **********</p>
<p>Location : Bangalore</p>
</div>

{/* Social Media */}
<div style={sectionStyle}>
<h3>Follow Us</h3>
<p>Facebook</p>
<p>Instagram</p>
<p>Twitter</p>
</div>

</div>

<hr/>

<p style={{textAlign:"center"}}>
© 2026 TaxiApp. All Rights Reserved.
</p>

</footer>

)

}

export default Footer;