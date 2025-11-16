import React, { useState } from 'react';

const KalkulatorPage = () => {
  // State untuk berat (kg) dan tinggi (cm)
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  
  // State untuk menyimpan hasil BMI dan kategorinya
  const [bmi, setBmi] = useState(null);
  const [kategoriBmi, setKategoriBmi] = useState('');

  // Fungsi untuk mendapatkan kategori BMI
  const getKategoriBmi = (bmiValue) => {
    if (bmiValue < 18.5) {
      return { nama: 'Kurus', kelas: 'text-yellow-500' };
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return { nama: 'Ideal', kelas: 'text-green-500' };
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return { nama: 'Gemuk', kelas: 'text-orange-500' };
    } else {
      return { nama: 'Obesitas', kelas: 'text-red-500' };
    }
  };

  // Fungsi untuk menghitung BMI
  const handleHitung = () => {
    // Konversi ke angka, pastikan valid
    const beratNum = Number(berat);
    const tinggiNum = Number(tinggi);

    if (beratNum > 0 && tinggiNum > 0) {
      // Ubah tinggi dari cm ke meter (tinggi / 100)
      const tinggiMeter = tinggiNum / 100;
      // Rumus BMI: berat / (tinggi * tinggi)
      const bmiValue = beratNum / (tinggiMeter * tinggiMeter);
      
      setBmi(bmiValue.toFixed(2)); // Ambil 2 angka di belakang koma
      
      // Set kategori berdasarkan nilai BMI
      const kategori = getKategoriBmi(bmiValue);
      setKategoriBmi(kategori);

    } else {
      // Reset jika input tidak valid
      setBmi(null);
      setKategoriBmi('');
    }
  };

  return (
    // Menggunakan class Tailwind untuk styling
    <div className="max-w-md mx-auto p-5 font-sans">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Kalkulator BMI (Body Mass Index)
      </h1>
      
      <div className="mb-4">
        <label htmlFor="berat" className="block text-gray-700 mb-2">
          Berat Badan (kg):
        </label>
        <input 
          type="number" 
          id="berat"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
          placeholder="Contoh: 60"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="tinggi" className="block text-gray-700 mb-2">
          Tinggi Badan (cm):
        </label>
        <input 
          type="number" 
          id="tinggi"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          placeholder="Contoh: 170"
        />
      </div>
      
      <button 
        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        onClick={handleHitung}
      >
        Hitung BMI
      </button>

      {/* Tampilkan hasil HANYA jika BMI sudah dihitung */}
      {bmi && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-2">BMI Anda adalah:</p>
          <div className="text-4xl font-extrabold text-blue-600 mb-3">
            {bmi}
          </div>
          <p className="text-xl font-semibold">
            Kategori: <span className={kategoriBmi.kelas}>{kategoriBmi.nama}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default KalkulatorPage;