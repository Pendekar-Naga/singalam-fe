'use client'

import React from 'react';

const Features = () => {
  const featuresData = [
    {
      id: 'f1',
      title: 'Kirim Laporan',
      description: 'Kirim Laporanmu dengan mudah. Cukup tekan tombol Laporin Rek dan isi form laporan dengan cepat.',
      img: '/public/images/kirimLaporan.png',
    },
    {
      id: 'f2',
      title: 'Pantau Laporan',
      description: 'Pantau status laporanmu. Disini kamu dapat melihat transparansi dari progress laporanmu dengan mudah.',
      img: '/public/images/pantauLaporan.png',
    },
    {
      id: 'f3',
      title: 'Lihat Jawaban',
      description: 'Tunggu dan lihat jawaban atas pertanyaan kamu. Belum puas? nanya lagi sepuasnya!',
      img: '/public/images/lihatJawaban.png',
    },
    {
      id: 'f4',
      title: 'Berikan Feedback',
      description: 'Jangan lupa berikan feedback atas jawaban yang kamu dapatkan dari keluhan yang kamu laporkan ya!',
      img: '/public/images/berikanFeedback.png',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 py-2 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
      <p className="text-left">Laporkan masalah Anda dengan mudah, pantau progresnya, lihat solusi yang diberikan, dan berikan feedback Anda. Bersama kita wujudkan perubahan!</p>
      {featuresData.map((feature, index) => (
        <div
          key={feature.id}
          className="mx-auto bg-white border-biruTuek border-2 rounded-xl shadow-3xl shadow-biruTuek max-w-64 h-96 p-4 hover:bg-bannerBiru"
          data-aos="zoom-in"
          data-aos-delay={`${100 * (index + 1)}`}
        >
          {/* Gambar fitur */}
          <div className="mb-4" style={{ backgroundColor: '#e0e0e0', height: '150px' }}>
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Konten teks fitur */}
          <div className="text-left">
            <h3 className="my-4 text-lg font-semibold cursor-pointer hover:text-biruTuek transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-500 font-normal mb-4">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
