import api from "./api";

export const bookTaxi = (data)=>{
return api.post("/booking",data);
}

export const getBookings = ()=>{
return api.get("/bookings");
}

