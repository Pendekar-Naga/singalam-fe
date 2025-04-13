"use client";

import React from "react";
import Navbar from "./Navbar";

const Terkirim = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto mt-10 p-10 bg-white rounded-2xl shadow-lg w-full max-w-4xl">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 py-20">
          <div className="flex flex-col w-full md:w-1/3 space-y-4 items-center">
            <img className="max-w-40" src="public/images/laporan.png" />
          </div>

          <div className="flex flex-col w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Laporan Anda Sudah Terkirim
            </h2>
            <p className="text-gray-600 mt-4">
              Terima kasih! Laporan Anda sekarang sudah masuk ke dalam antrian.
              Silakan menunggu balasan dan Anda dapat memantau status laporan
              Anda.
            </p>
            <button className="mt-4 px-6 py-2 ml-0 w-max bg-black text-white text-sm font-semibold rounded-md shadow-md hover:bg-gray-800">
              Cek Status Laporan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terkirim;
