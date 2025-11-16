import React from 'react';

const ProfilePage = () => {
  // Data pengguna (contoh)
  const user = {
    nama: 'Pengguna Demo',
    email: 'user@example.com',
    bergabung: '16 November 2025',
  };

  return (
    <div className="p-5 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Profil Saya
      </h1>
      
      <div className="bg-white max-w-lg mx-auto p-8 rounded-xl shadow-lg">
        <div className="text-lg mb-4">
          <span className="font-bold text-gray-600">Nama: </span>
          <span className="text-gray-800">{user.nama}</span>
        </div>
        
        <div className="text-lg mb-4">
          <span className="font-bold text-gray-600">Email: </span>
          <span className="text-gray-800">{user.email}</span>
        </div>
        
        <div className="text-lg">
          <span className="font-bold text-gray-600">Bergabung Sejak: </span>
          <span className="text-gray-800">{user.bergabung}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;