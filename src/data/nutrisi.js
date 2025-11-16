import React from 'react';
// 1. Import data (pastikan nama file sudah benar 'nutrisi.js')
import { dataMakanan } from '../data/nutrisi.js'; 

const NutrisiPage = () => {
  return (
    <div className="p-5 font-sans max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-3">
        Informasi Nutrisi
      </h1>
      <p className="text-gray-700 mb-6">
        Cari tahu kalori dan nutrisi makanan Anda.
      </p>
      
      <div>
        {/* 2. Gunakan data yang di-import */}
        {dataMakanan.map((makanan) => (
          <div key={makanan.id} className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {makanan.nama}
            </h3>
            <p className="text-gray-600">Kalori: {makanan.kalori} kkal</p>
            <p className="text-gray-600">Protein: {makanan.protein} g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutrisiPage;