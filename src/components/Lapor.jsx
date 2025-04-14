/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';
import { auth } from '../firebase';
import LaporToast from './LaporToast';
import Terkirim from './Terkirim';

const Lapor = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');

  const topikOptions = [
    { id: 3, label: 'Fasilitas dan Infrastruktur Publik' },
    { id: 7, label: 'Administrasi dan Layanan Publik' },
    { id: 5, label: 'Keuangan dan Bantuan Sosial' },
    { id: 2, label: 'Pendidikan' },
    { id: 1, label: 'Kesehatan' },
    { id: 6, label: 'Lingkungan' },
    { id: 4, label: 'Keamanan dan Ketertiban' },
    { id: 5, label: 'Sosial dan Kependudukan' },
    { id: null, label: 'Hukum dan HAM' },
    { id: null, label: 'Aksesibilitas dan Disabilitas' },
    { id: null, label: 'Digital dan Teknologi' },
    { id: null, label: 'Saran dan Apresiasi' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const namaPelapor = e.target.namaPelapor.value;
    const topikLaporan = selectedTopic.id;
    const deskripsiLaporan = e.target.deskripsiLaporan.value;

    if (namaPelapor && topikLaporan && deskripsiLaporan) {
      try {
        const response = await fetch('http://localhost:6834/api/createReport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: deskripsiLaporan,
            kedinasan_id: topikLaporan,
            user_id: auth.currentUser?.uid, // atau user ID sebenarnya
          }),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('Report created:', result.data);
          setShowToaster(true);
          setTimeout(() => {
            setShowToaster(false);
          }, 2000);
          setIsSubmitted(true);
        } else {
          alert(result.status.message || 'Gagal membuat laporan.');
        }
      } catch (error) {
        console.error('Error submitting report:', error);
        alert('Terjadi kesalahan saat mengirim laporan.');
      }
    } else {
      alert('Harap isi semua kolom.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16 px-4">
      {isSubmitted ? (
        <Terkirim />
      ) : (
        <div className="container mt-10 p-10 bg-white rounded-2xl shadow-lg w-full max-w-xl md:max-w-2xl lg:max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-8 text-left">
                <div className="flex flex-col w-full md:w-1/2 space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="namaPelapor" className="text-lg font-semibold">
                      Nama Pelapor
                    </label>
                    <input type="text" id="namaPelapor" name="namaPelapor" placeholder="Masukkan Nama Pelapor" className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-lg font-semibold">Topik Laporan</label>
                    <Menu as="div" className="relative inline-block text-left w-full">
                      <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-lg bg-white p-3 text-m font-medium border border-gray-300 hover:bg-gray-50">
                        <span className={selectedTopic ? 'text-gray-900' : 'text-gray-400'}>{selectedTopic.label || 'Pilih Topik Laporan'}</span>
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>

                      <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {topikOptions.map((topic, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <button type="button" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block w-full px-4 py-2 text-left text-sm`} onClick={() => setSelectedTopic(topic)}>
                                  {topic.label || topic} {/* fallback kalau itemnya string biasa */}
                                </button>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 mt-4 sm:mt-0">
                  <label htmlFor="deskripsiLaporan" className="text-lg font-semibold">
                    Deskripsi Laporan
                  </label>
                  <textarea id="deskripsiLaporan" name="deskripsiLaporan" placeholder="Masukkan Deskripsi Laporan" rows="12" className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200" />
                </div>
              </div>

              <div className="flex justify-start">
                <button type="submit" className="py-3 px-10 md:-mt-12 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {showToaster && <LaporToast message="Laporan Berhasil dibuat." onClose={() => setShowToaster(false)} />}
    </div>
  );
};

export default Lapor;
