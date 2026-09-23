import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";
import MyBookings from "../pages/MyBookings";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const ProtectedRoute = ({ children }) => {
    const user = sessionStorage.getItem("user");
    return user ? children : <Navigate to="/login" replace />;
};

function AppRoutes() {

    return (



        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/my-bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/contact" element={<ContactUs />} />

        </Routes>



    )

}

export default AppRoutes;