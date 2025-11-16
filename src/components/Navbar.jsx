import React from 'react';

// 1. Terima prop 'onNavigasi' dari App.jsx
const Navbar = ({ onNavigasi }) => {
  return (
    <nav className="bg-gray-100 p-5 mb-5 rounded-lg text-center shadow">
      {/* 2. Ganti <span> dengan class Tailwind */}
      <span 
        className="mx-4 text-lg font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        onClick={() => onNavigasi('beranda')}
      >
        Beranda
      </span>
      <span 
        className="mx-4 text-lg font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        onClick={() => onNavigasi('kalkulator')}
      >
        Kalkulator
      </span>
      <span 
        className="mx-4 text-lg font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        onClick={() => onNavigasi('nutrisi')}
      >
        Nutrisi
      </span>
      <span 
        className="mx-4 text-lg font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        onClick={() => onNavigasi('profil')}
      >
        Profil
      </span>
    </nav>
  );
};

export default Navbar;