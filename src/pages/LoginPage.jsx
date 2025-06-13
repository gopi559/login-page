import React, { useState } from "react";
import loginImage from "../assets/login-illustration.png";
import { useNavigate } from "react-router-dom";

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
    <div className="flex w-screen h-screen bg-white">
      {/* Left Section */}
      <div className="w-1/2 h-full bg-[#A0C3FF] flex items-center justify-center">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full relative bg-white">
        {/* Back Button - top-left */}
       <button
  onClick={() => navigate(-1)}
  className="absolute top-6 left-6 text-sm text-gray-500 hover:text-gray-700 transition bg-transparent border-none outline-none shadow-none"
>
  ← Back
</button>


        {/* Centered Content */}
        <div className="flex h-full items-center justify-center">
<div className="max-w-sm w-full px-4 ml-12">            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
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
    </div>
  );
};

export default LoginPage;
