import axios from "axios";
import { useEffect, useState } from "react";
import AppRoutes from "../routes/AppRoutes";

function Dashboard(){

const [cabs,setCabs]=useState([]);
const [bookings,setBookings]=useState([]);

const CAB_URL="http://localhost:3000/cabs";
const BOOKING_URL="http://localhost:3000/bookings";


useEffect(()=>{

loadCabs();
loadBookings();

},[]);


const loadCabs=async()=>{

try{
let res=await axios.get(CAB_URL);
setCabs(res.data);
}catch(error){
console.log(error.message);
}

}


const loadBookings=async()=>{

try{
let res=await axios.get(BOOKING_URL);
setBookings(res.data);
}catch(error){
console.log(error.message);
}

}


const completedBookings=bookings.filter(b=>b.status==="Completed").length;

const cancelledBookings=bookings.filter(b=>b.status==="Cancelled").length;


return(

<div style={{padding:"30px", backgroundColor:"#f9fafb", minHeight:"100vh", fontFamily:"Inter, sans-serif"}}>
{/* <AppRoutes />  */}

<div style={{
  display:"flex",
  gap:"20px",
  flexWrap:"wrap",
  justifyContent:"space-between",
  marginBottom:"24px"
}}>

<div style={{
  border:"1px solid #e2e8f0",
  padding:"22px",
  width:"220px",
  background:"#ffffff",
  borderRadius:"12px",
  boxShadow:"0 8px 16px rgba(0,0,0,0.08)",
  textAlign:"center"
}}>
<h3 style={{margin:0,fontSize:"1rem",color:"#4a5568"}}>Total Cabs</h3>
<p style={{margin:"10px 0 0",fontSize:"2rem",fontWeight:"800",color:"#2b6cb0"}}>{cabs.length}</p>
</div>


<div style={{
  border:"1px solid #e2e8f0",
  padding:"22px",
  width:"220px",
  background:"#ffffff",
  borderRadius:"12px",
  boxShadow:"0 8px 16px rgba(0,0,0,0.08)",
  textAlign:"center"
}}>
<h3 style={{margin:0,fontSize:"1rem",color:"#4a5568"}}>Total Bookings</h3>
<p style={{margin:"10px 0 0",fontSize:"2rem",fontWeight:"800",color:"#2d3748"}}>{bookings.length}</p>
</div>


<div style={{
  border:"1px solid #e2e8f0",
  padding:"22px",
  width:"220px",
  background:"#ffffff",
  borderRadius:"12px",
  boxShadow:"0 8px 16px rgba(0,0,0,0.08)",
  textAlign:"center"
}}>
<h3 style={{margin:0,fontSize:"1rem",color:"#4a5568"}}>Completed</h3>
<p style={{margin:"10px 0 0",fontSize:"2rem",fontWeight:"800",color:"#2f855a"}}>{completedBookings}</p>
</div>


<div style={{
  border:"1px solid #e2e8f0",
  padding:"22px",
  width:"220px",
  background:"#ffffff",
  borderRadius:"12px",
  boxShadow:"0 8px 16px rgba(0,0,0,0.08)",
  textAlign:"center"
}}>
<h3 style={{margin:0,fontSize:"1rem",color:"#4a5568"}}>Cancelled</h3>
<p style={{margin:"10px 0 0",fontSize:"2rem",fontWeight:"800",color:"#e53e3e"}}>{cancelledBookings}</p>
</div>

</div>


<h3 style={{marginTop:"30px", color:"#2d3748", fontSize:"1.5rem", fontWeight:"700"}}>Recent Bookings</h3>

<div style={{overflowX:'auto', marginTop: '12px'}}>
<table width="100%" style={{borderCollapse:"collapse", backgroundColor:"#ffffff", border:"1px solid #e2e8f0", boxShadow:"0 10px 20px rgba(0,0,0,0.06)"}}>

<thead>

<tr>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>ID</th>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>Customer</th>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>Pickup</th>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>Drop</th>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>Cab</th>
<th style={{padding:"12px", textAlign:"left", fontSize:"0.95rem", color:"#4a5568", borderBottom:"2px solid #e2e8f0"}}>Status</th>
</tr>

</thead>

<tbody>

{bookings.map(b=>

<tr key={b.id} style={{borderBottom:"1px solid #e2e8f0"}}>

<td style={{padding:"12px", textAlign:"left"}}>{b.id}</td>
<td style={{padding:"12px", textAlign:"left"}}>{b.customerName}</td>
<td style={{padding:"12px", textAlign:"left"}}>{b.pickupLocation}</td>
<td style={{padding:"12px", textAlign:"left"}}>{b.dropLocation}</td>
<td style={{padding:"12px", textAlign:"left"}}>{b.cabType}</td>
<td style={{padding:"12px", textAlign:"left"}}>{b.status}</td>

</tr>

)}

</tbody>

</table>

</div>

</div>

)

}

export default Dashboard;