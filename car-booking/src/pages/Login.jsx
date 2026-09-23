import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const validate = () => {
        if (email.trim() === "" || password.trim() === "") {
            setError("Email and Password are required");
            return false;
        }
        setError("");
        return true;
    };

    let signInHandler = async (e) => {
        console.log("Login form submitted with email:", email);
        e.preventDefault();

        if (!validate()) {
            return;
        }

        // Users data
        let users = [
            { emailId: "admin@gmail.com", password: "admin@123" },
        ];

        let found = users.find((user) => user.emailId === email && user.password === password);

        if (found) {
            sessionStorage.setItem("user", email);
            localStorage.setItem("user", email);
            window.dispatchEvent(new Event("authChange"));
            alert("Successfully logged in");
            navigate("/dashboard");
            return;
        }

        setError("Invalid email or password");
        alert("Invalid email or password");
    };

    return (
        <>
            <div className="min-h-screen flex items-top justify-center bg-gray-100">
                <div>
                    <form onSubmit={signInHandler} className="shadow bg-white p-6 mt-5 rounded w-80">
                        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
                        <label className="flex flext-start my-3">Email:</label>
                        <input type="email" placeholder='Username' className="border w-full p-2 mb-2 rounded"
                            value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <label className="flex flext-start my-3">Password:</label>
                        <input type="password" placeholder='Password' className="border w-full p-2 mb-2 rounded"
                            value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                        <button type="submit" className="bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700">Login</button><br />

                    </form>
                </div>

            </div>

        </>
    )
}

export default Login