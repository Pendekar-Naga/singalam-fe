'use client';

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // Ganti dengan path relatif ke firebase.jsx
import Navbar from './Navbar';

const Riwayat = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          const res = await fetch(`http://localhost:6834/api/getReportByUserID/${uid}`); // atau sesuaikan host kamu
          if (!res.ok) throw new Error('Failed to fetch data');

          const resData = await res.json();
          console.log('Fetched response:', resData); // Tambahkan ini dulu untuk lihat bentuk datanya

          // Pastikan kita ambil hanya bagian `data` dari response
          const reports = Array.isArray(resData.data) ? resData.data : [];
          setTableData(reports);
        } catch (err) {
          console.error('Error fetching report:', err);
        } finally {
          setLoading(false);
        }
      } else {
        console.log('User not logged in');
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const columns = [
    { title: 'Deskripsi', data: 'description' },
    { title: 'Status', data: 'status' },
    { title: 'Tanggal Dibuat', data: 'created_at' },
    { title: 'Nama Dinas', data: 'nama_dinas' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      <div className="card bg-white shadow-lg rounded-2xl m-4 w-full max-w-6xl mt-10">
        <div className="card-body p-6">
          <h1 className="text-2xl font-bold text-left text-gray-800 mb-6">Riwayat Pelaporan</h1>

          {loading ? (
            <p className="text-gray-600">Loading data...</p>
          ) : tableData.length === 0 ? (
            <p className="text-sm text-gray-500">Tidak ada data pelaporan ditemukan.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {columns.map((column) => (
                      <th key={column.title} className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        {column.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-left">
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                      {columns.map((column, colIndex) => (
                        <td key={colIndex} className="px-4 py-3 text-sm text-gray-700">
                          {column.data === 'created_at' ? formatDate(row[column.data]) : row[column.data]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
