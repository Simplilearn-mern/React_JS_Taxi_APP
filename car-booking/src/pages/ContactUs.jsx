import { useState } from "react";

function ContactUs(){

const [contact,setContact]=useState({
name:"",
email:"",
message:""
});

const [msg,setMsg]=useState("");

// using Tailwind CSS classes instead of inline style constants
const containerStyle={
  maxWidth:"800px",
  margin:"auto",
  padding:"30px"
};

const inputStyle={
  width:"100%",
  padding:"10px",
  margin:"10px 0"
};

const buttonStyle={
  padding:"10px 20px",
  backgroundColor:"#1e90ff",
  color:"white",
  border:"none",
  cursor:"pointer"
};

const handleInput=(e)=>{
const {name,value}=e.target;
setContact({...contact,[name]:value});
};

const handleSubmit=(e)=>{
e.preventDefault();
setMsg("Your message has been submitted successfully!");
setContact({name:"",email:"",message:""});
};

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Contact Us</h2>
    <p className="text-sm text-gray-600 text-center mb-6">If you have any questions or need help with booking a taxi, please contact us.</p>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-left text-gray-700 text-sm mb-1" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={contact.name}
          onChange={handleInput}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-left text-gray-700 text-sm mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={contact.email}
          onChange={handleInput}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-left text-gray-700 text-sm mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          value={contact.message}
          onChange={handleInput}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>

    {msg && <p className="mt-4 text-green-600 text-center">{msg}</p>}

    <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-700">
      <h3 className="font-semibold text-gray-800">Our Office</h3>
      <p>Email: support@taxiapp.com</p>
      <p>Phone: +91 **********</p>
      <p>Address: Bangalore, India</p>
    </div>
  </div>
</div>

)
}

export default ContactUs;