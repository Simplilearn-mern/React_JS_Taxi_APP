import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar(){
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] = useState(sessionStorage.getItem("user"));

    useEffect(()=>{
        const onAuthChange = () => setUser(sessionStorage.getItem("user"));
        window.addEventListener("authChange", onAuthChange);
        return () => window.removeEventListener("authChange", onAuthChange);
    },[]);

    const logout = () => {
        sessionStorage.removeItem("user");
        window.dispatchEvent(new Event("authChange"));
        navigate("/login");
    };

    return(
        <nav className="bg-white shadow-sm px-4 py-2 flex gap-4 justify-center items-center">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            {user && <Link to="/booking" className="text-blue-600 hover:underline">Book Taxi</Link>}
            <Link to="/about" className="text-blue-600 hover:underline">About</Link>
            <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            {!user ? (
                <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            ) : (
                <button onClick={logout} className="text-red-500 hover:text-red-700">Logout</button>
            )}
        </nav>
    )
}

export default Navbar;