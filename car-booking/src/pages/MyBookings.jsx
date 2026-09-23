import axios from "axios";
import { useEffect, useState } from "react";

function MyBookings(){

const [bookings,setBookings]=useState([]);
const [msg,setMsg]=useState("");

const BOOKING_URL="http://localhost:3000/bookings";


const loadBookings=async()=>{

try{

let res=await axios.get(BOOKING_URL);

setBookings(res.data);
        localStorage.setItem("allBookings", JSON.stringify(res.data));

}catch(error){

console.log(error.message);

}

};


const cancelBooking=async(id)=>{

try{

await axios.delete(`${BOOKING_URL}/${id}`);

setMsg("Booking cancelled successfully");

loadBookings();
localStorage.setItem("allBookings", JSON.stringify(bookings.filter(b => b.id !== id)));

}catch(error){

console.log(error.message);

}

};


useEffect(()=>{

const persistedAllBookings = localStorage.getItem("allBookings");
if (persistedAllBookings) {
    try {
        setBookings(JSON.parse(persistedAllBookings));
    } catch (error) {
        console.error("Invalid allBookings in localStorage", error);
        loadBookings();
    }
} else {
    loadBookings();
}

},[]);


return(

<div style={{padding:"30px", backgroundColor: "#f9fafb", minHeight: "100vh"}}>

<h2 style={{fontSize: "2rem", fontWeight: "800", color: "#1a202c", marginBottom: "16px"}}>My Booking History</h2>

<p style={{color:"#2f855a", fontWeight: "600", marginBottom: "16px"}}>{msg}</p>

<table border="1" width="100%" style={{ textAlign: "left", borderCollapse: "collapse", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 6px 16px rgba(160,174,192,0.2)" }}>

<thead>

<tr>

<th style={{ textAlign: "left", padding: "8px" }}>ID</th>

<th style={{ textAlign: "left", padding: "8px" }}>Customer</th>

<th style={{ textAlign: "left", padding: "8px" }}>Pickup</th>

<th style={{ textAlign: "left", padding: "8px" }}>Drop</th>

<th style={{ textAlign: "left", padding: "8px" }}>Cab</th>

<th style={{ textAlign: "left", padding: "8px" }}>Driver</th>

<th style={{ textAlign: "left", padding: "8px" }}>Driver Contact</th>

<th style={{ textAlign: "left", padding: "8px" }}>Status</th>

<th style={{ textAlign: "left", padding: "8px" }}>Cancel</th>

</tr>

</thead>

<tbody>

{bookings.map(b=>

<tr key={b.id} style={{ borderBottom: "1px solid #e2e8f0", transition: "background-color 0.2s" }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f1f5f9"} onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748", fontWeight: "600" }}>{b.id}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.customerName}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.pickupLocation}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.dropLocation}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.cabType}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.driverName}</td>

<td style={{ textAlign: "left", padding: "12px 10px", color: "#2d3748" }}>{b.driverPhone || "Not available"}</td>

<td style={{ textAlign: "left", padding: "12px 10px", fontWeight: "bold", color: b.status === 'Booked' ? '#2b6cb0' : b.status === 'Completed' ? '#2f855a' : '#4a5568' }}>{b.status}</td>

<td>

<button
  onClick={()=>cancelBooking(b.id)}
  style={{
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease',
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
  onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
>
Cancel
</button>

</td>

</tr>

)}

</tbody>

</table>

</div>

)

}

export default MyBookings;