import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuth = () => setIsAuthenticated(!!sessionStorage.getItem("user"));
    window.addEventListener("authChange", syncAuth);
    return () => window.removeEventListener("authChange", syncAuth);
  }, []);

  const headerStyle = {
    backgroundColor: "#1e90ff",
    color: "white",
    padding: "15px",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const menuStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    alert("You have been logged out. Click OK to continue to Login.");
    navigate("/login");
  };

  return (
    <header style={headerStyle}>
      <div style={navStyle}>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
          🚕 Book Taxi
        </div>
        <nav style={menuStyle}>
          <Link style={linkStyle} to="/">
            Home
          </Link>
          {isAuthenticated && (
            <Link style={linkStyle} to="/dashboard">
              Dashboard
            </Link>
          )}
          {isAuthenticated && (
            <Link style={linkStyle} to="/booking">
              Book Cab
            </Link>
          )}
          {isAuthenticated && (
            <Link style={linkStyle} to="/my-bookings">
              My Bookings
            </Link>
          )}
          <Link style={linkStyle} to="/about">
            About Us
          </Link>
          <Link style={linkStyle} to="/contact">
            Contact Us
          </Link>
          {!isAuthenticated ? (
            <Link style={linkStyle} to="/login">
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;