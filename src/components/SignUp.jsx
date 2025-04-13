"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up with email:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen" style={{
      backgroundImage: "url('/images/SignUp.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md lg:ml-[36rem] mt-24 sm:mt-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">Daftar</h2>
          <form className="text-left" onSubmit={handleEmailSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-biruNgalam"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Kata Kunci</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-biruNgalam"
                placeholder="Kata Kunci"
                required
              />
            </div>
            <button type="submit" className="w-full bg-biruNgalam text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-200">Daftar</button>
            <div className="my-4 flex items-center justify-center">
              <div className="w-1/4 border-t border-gray-200"></div>
              <span className="mx-2 text-gray-400 text-center text-sm">Atau daftar dengan</span>
              <div className="w-1/4 border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center mb-6">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-50 flex items-center justify-center"
              >
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-gray-700 font-semibold">Google</span>
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-gray-500">Sudah punya akun? <a href="/login" className="text-blue-500 hover:underline font-semibold">Login di sini!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
