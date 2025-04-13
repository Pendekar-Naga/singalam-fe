"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with email:", error);
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
      backgroundImage: "url('/images/SignIn.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md lg:ml-[36rem] mt-24 sm:mt-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
            Login
          </h2>

          <form onSubmit={handleEmailSignIn} className="text-left">
            <div className="mb-4">
              <label
                htmlFor="emailOrPhone"
                className="block text-gray-700 font-medium mb-2"
              >
                Email atau Nomor HP
              </label>
              <input
                type="text"
                id="emailOrPhone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-biruNgalam"
                placeholder="Email atau Nomor HP"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Kata Kunci
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-biruNgalam"
                placeholder="Kata Kunci"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-biruNgalam text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
            >
              Masuk
            </button>

            <div className="my-4 flex items-center justify-center">
              <div className="w-1/4 border-t border-gray-200"></div>
              <span className="mx-2 text-gray-400 text-center text-sm">
                Log in lebih cepat dengan
              </span>
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
            <p className="text-gray-500">
              Belum punya akun?{" "}
              <a href="/daftar" className="text-blue-500 hover:underline font-semibold">
                Daftar Yuk!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
