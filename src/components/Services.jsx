'use client'

import React from 'react';

export default function Services() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div className="px-20">
                <p className="mx-auto text-gray-500">
                    LAYANAN TERBAIK
                </p>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
                Permudah Hidupmu dengan SINGALAM
            </h1>
            <p className="text-xl">
                Temukan kemudahan penyelesaian masalah dalam satu genggaman. Dengan SINGALAM, melaporkan keluhan dan mendapatkan bantuan jadi lebih cepat dan efisien.            </p>
            <div className="mx-auto max-w-7xl px-6 sm:py-0 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                <div className="mt-8 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                    <img 
                    src="public/images/services.png">
                    </img>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                    <div className="bg-orange-200 rounded-xl text-left p-6 sm:my-8 mt-8">
                        <h6 className="text-2xl font-semibold">
                            Transparansi Laporan
                        </h6>
                        <p className="text-xl">
                            Lapor dengan mudah dan status laporan disajikan dengan transparan.
                        </p>
                    </div>
                    <div className="bg-yellow-100 rounded-xl text-left p-6 sm:my-8 mt-8">
                        <h6 className="text-2xl font-semibold">
                            Chatbot Responsif
                        </h6>
                        <p className="text-xl">
                            Tanyakan dan sampaikan keluhanmu!
                            MalangBot siap menjawab dengan cepat.
                        </p>
                    </div>
                    <div className="bg-yellow-200 rounded-xl text-left p-6 sm:my-8 mt-8 mb-20">
                        <h6 className="text-2xl font-semibold">
                            Lihat Riwayat Laporan
                        </h6>
                        <p className="text-xl">
                            Kamu dapat melihat riwayat laporanmu dengan mudah no repot repot!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
