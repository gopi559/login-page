import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-illustration.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGetOtp = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`OTP sent to ${email}`);
  };

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden">
      {/* Left Section (fixed image, visible only on md+) */}
      <div className="hidden md:block w-1/2 h-full sticky top-0">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section (scrollable if content overflows) */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto relative px-6 py-8 flex flex-col items-center">
        {/* Back Button */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-gray-700 transition bg-transparent border-none outline-none shadow-none"
          >
            ← Back
          </button>
        </div>

        {/* Login Form */}
        <div className="max-w-sm w-full mt-16 md:mt-0 flex-grow flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Account Login
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            If you are already a member you can login with your email address and OTP.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>

          <button
            onClick={handleGetOtp}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
