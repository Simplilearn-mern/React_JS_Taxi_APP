// import axios from "axios";
// import { useEffect, useState } from "react";
// import { getBookings } from "../services/bookingService";

// function Dashboard(){

// const [cabs,setCabs]=useState([]);
// const [bookings,setBookings]=useState([]);

// const CAB_URL="http://localhost:3000/cabs";



// useEffect(()=>{

// loadCabs();
// loadBookings();

// },[]);


// const loadCabs=async()=>{

// try{
// let res=await axios.get(CAB_URL);
// setCabs(res.data);
// }catch(error){
// console.log(error.message);
// }

// }

// const loadBookings=async()=>{
// try{
// let res = await getBookings();
// setBookings(res.data);
// }catch(error){
// console.log(error.message);
// }

// }


// const completedBookings=bookings.filter(b=>b.status==="Completed").length;

// const cancelledBookings=bookings.filter(b=>b.status==="Cancelled").length;


// return(

// <div style={{padding:"30px"}}>

// <h2>Taxi Booking Dashboard</h2>

// <div style={{
// display:"flex",
// gap:"20px",
// flexWrap:"wrap"
// }}>

// <div style={{
// border:"1px solid gray",
// padding:"20px",
// width:"200px",
// background:"#f5f5f5"
// }}>
// <h3>Total Cabs</h3>
// <p>{cabs.length}</p>
// </div>


// <div style={{
// border:"1px solid gray",
// padding:"20px",
// width:"200px",
// background:"#f5f5f5"
// }}>
// <h3>Total Bookings</h3>
// <p>{bookings.length}</p>
// </div>


// <div style={{
// border:"1px solid gray",
// padding:"20px",
// width:"200px",
// background:"#f5f5f5"
// }}>
// <h3>Completed</h3>
// <p>{completedBookings}</p>
// </div>


// <div style={{
// border:"1px solid gray",
// padding:"20px",
// width:"200px",
// background:"#f5f5f5"
// }}>
// <h3>Cancelled</h3>
// <p>{cancelledBookings}</p>
// </div>

// </div>


// <h3 style={{marginTop:"30px"}}>Recent Bookings</h3>

// <table border="1" width="100%">

// <thead>

// <tr>
// <th>ID</th>
// <th>Customer</th>
// <th>Pickup</th>
// <th>Drop</th>
// <th>Cab</th>
// <th>Status</th>
// </tr>

// </thead>

// <tbody>

// {bookings.map(b=>

// <tr key={b.id}>

// <td>{b.id}</td>
// <td>{b.customerName}</td>
// <td>{b.pickupLocation}</td>
// <td>{b.dropLocation}</td>
// <td>{b.cabType}</td>
// <td>{b.status}</td>

// </tr>

// )}

// </tbody>

// </table>

// </div>

// )

// }

// export default Dashboard;


function Home(){

    return(

        <div style={{padding:"30px"}}>
            <h2>Welcome to Taxi App</h2>
            <p>Book your cab easily and quickly with our user-friendly interface.</p>
            <p>Login to access your dashboard and manage your bookings.</p>
        </div>
    )

}
export default Home;