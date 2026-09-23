import axios from "axios";
import { useEffect, useState } from "react";
import { validateBooking } from '../utils/validation';

function Booking(){

const [cabs,setCabs]=useState([]);

const [booking,setBooking]=useState({
customerName:"",
phone:"",
pickupLocation:"",
dropLocation:"",
cabId:"",
cabType:""
});

const [msg,setMsg]=useState("");

const [errors,setErrors]=useState({});

const [bookingSummary, setBookingSummary] = useState(null);
const [allBookings, setAllBookings] = useState([]);

const CAB_URL="http://localhost:3000/cabs";
const BOOKING_URL="http://localhost:3000/bookings";

const loggedInUser = sessionStorage.getItem("user");
const isLoggedIn = Boolean(loggedInUser);

useEffect(()=>{

axios.get(CAB_URL)
.then(res=>setCabs(res.data))
.catch(err=>console.log(err));

axios.get(BOOKING_URL)
.then(res=>setAllBookings(res.data))
.catch(err=>console.log(err));

const persistedUser = localStorage.getItem("user");
if (persistedUser && !sessionStorage.getItem("user")) {
    sessionStorage.setItem("user", persistedUser);
}

const persistedBookingSummary = localStorage.getItem("bookingSummary");
if (persistedBookingSummary) {
    try {
        setBookingSummary(JSON.parse(persistedBookingSummary));
    } catch (e) {
        console.error("Invalid bookingSummary in localStorage", e);
    }
}

const persistedAllBookings = localStorage.getItem("allBookings");
if (persistedAllBookings) {
    try {
        setAllBookings(JSON.parse(persistedAllBookings));
    } catch (e) {
        console.error("Invalid allBookings in localStorage", e);
    }
}

},[]);


const handleInput=(e)=>{
const {name,value}=e.target;
setBooking({...booking,[name]:value});
setErrors({...errors, [name]: null});
};


const bookCab=(cab)=>{

if (!isLoggedIn) {
    setMsg("Please login to book a cab.");
    return;
}

const validationErrors = validateBooking(booking);
if (Object.values(validationErrors).some(error => error !== null)) {
    setErrors(validationErrors);
    setMsg("");
    return;
}

const newBooking={
...booking,
cabId:cab.id,
cabType:cab.cabName,
driverName:cab.driverName,
driverPhone:cab.driverPhone || "Not available",
status:"Booked"
};

axios.post(BOOKING_URL,newBooking)
.then(res=>{
const createdBooking = res.data;
setBookingSummary(createdBooking);
const updatedBookings = [...allBookings, createdBooking];
setAllBookings(updatedBookings);
localStorage.setItem("bookingSummary", JSON.stringify(createdBooking));
localStorage.setItem("allBookings", JSON.stringify(updatedBookings));
setBooking({
customerName:"",
phone:"",
pickupLocation:"",
dropLocation:"",
cabId:"",
cabType:""
});
setErrors({});
setMsg("Cab booked successfully!");
})
.catch(err=>{
console.log(err);
setMsg("Failed to book cab. Please try again.");
});

};


return(

<div className="min-h-screen bg-gray-50 py-8 px-4">

<div className="max-w-4xl mx-auto">

<h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Book a Cab</h2>
{!isLoggedIn && (
  <p className="text-center text-red-600 mb-6">You must be logged in to book a cab. Please login first.</p>
)}
{msg && isLoggedIn && <p className="text-center text-green-600 mb-6">{msg}</p>}
{msg && !isLoggedIn && <p className="text-center text-red-600 mb-6">{msg}</p>}

<div className="bg-white p-6 rounded-lg shadow-md mb-8">

<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">

<label className="block text-left text-sm font-medium text-gray-700">Customer Name</label>

<input
type="text"
name="customerName"
placeholder="Enter Your Name"
value={booking.customerName}
onChange={handleInput}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
/>
{errors.customerName && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.customerName}</p>}

</div>

<div className="space-y-2">

<label className="block text-left text-sm font-medium text-gray-700">Phone Number</label>

<input
type="tel"
name="phone"
placeholder="Enter Phone Number"
value={booking.phone}
onChange={handleInput}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
/>
{errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.phone}</p>}

</div>

<div className="space-y-2">

<label className="block text-left text-sm font-medium text-gray-700">Pickup Location</label>

<input
type="text"
name="pickupLocation"
placeholder="Pickup Location"
value={booking.pickupLocation}
onChange={handleInput}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
/>
{errors.pickupLocation && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.pickupLocation}</p>}

</div>

<div className="space-y-2">

<label className="block text-left text-sm font-medium text-gray-700">Drop Location</label>

<input
type="text"
name="dropLocation"
placeholder="Drop Location"
value={booking.dropLocation}
onChange={handleInput}
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
/>
{errors.dropLocation && <p className="text-red-500 text-sm mt-1 flex items-center"><span className="mr-1">⚠️</span>{errors.dropLocation}</p>}

</div>

</div>

</form>

</div>

{bookingSummary && (
<div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
<h3 className="text-xl font-semibold mb-4 text-green-800">Booking Summary</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<p className="text-gray-700"><strong>Booking ID:</strong> {bookingSummary.id}</p>
<p className="text-gray-700"><strong>Customer Name:</strong> {bookingSummary.customerName}</p>
<p className="text-gray-700"><strong>Phone:</strong> {bookingSummary.phone}</p>
<p className="text-gray-700"><strong>Pickup Location:</strong> {bookingSummary.pickupLocation}</p>
</div>
<div>
<p className="text-gray-700"><strong>Drop Location:</strong> {bookingSummary.dropLocation}</p>
<p className="text-gray-700"><strong>Cab Type:</strong> {bookingSummary.cabType}</p>
<p className="text-gray-700"><strong>Driver:</strong> {bookingSummary.driverName}</p>
<p className="text-gray-700"><strong>Driver Contact:</strong> {bookingSummary.driverPhone || "Not available"}</p>
<p className="text-gray-700"><strong>Status:</strong> <span className="text-green-600 font-medium">{bookingSummary.status}</span></p>
</div>
</div>
<button onClick={() => setBookingSummary(null)} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">
Close Summary
</button>
</div>
)}

<h3 className="text-2xl font-semibold mb-4 text-gray-800">Available Cabs</h3>

{msg && <p className="text-green-600 text-center mb-4">{msg}</p>}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{cabs.map(cab=>

<div key={cab.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">

<h4 className="text-xl font-semibold mb-2 text-gray-800">{cab.cabName}</h4>

<p className="text-gray-600 mb-1">Driver: {cab.driverName}</p>

<p className="text-gray-600 mb-1">Fare/km: ₹{cab.farePerKm}</p>

<p className="text-gray-600 mb-4">Seats: {cab.seats}</p>

<button
  onClick={()=>bookCab(cab)}
  disabled={!isLoggedIn}
  className={`w-full py-2 px-4 rounded transition-colors font-bold ${isLoggedIn ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
>
  Book Now
</button>

</div>

)}

</div>

</div>

</div>

)

}

export default Booking;