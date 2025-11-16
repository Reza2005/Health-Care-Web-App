import React, { useState } from 'react'; 

// 2. Import Navbar dan SEMUA halaman
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import KalkulatorPage from './pages/KalkulatorPage';
import NutrisiPage from './pages/NutrisiPage';
import ProfilePage from './pages/ProfilPage'; // Pastikan ini sudah Profil (bukan Profile)

// Styling (opsional)
// const appStyle = { ... } <-- HAPUS BLOK INI

function App() {
  // 3. Buat STATE untuk melacak halaman mana yang aktif.
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  // 4. Buat fungsi untuk menampilkan halaman yang benar
  const tampilkanHalaman = () => {
    switch (halamanAktif) {
      case 'beranda':
        return <HomePage />;
      case 'kalkulator':
        return <KalkulatorPage />;
      case 'nutrisi':
        return <NutrisiPage />;
      case 'profil':
        return <ProfilePage />;
      default:
        // Jika terjadi error, kembali ke beranda
        return <HomePage />;
    }
  };

  return (
    // GANTI baris 'div' di bawah ini
    <div className="max-w-6xl mx-auto px-5"> 
      {/* 5. Tampilkan Navbar. */}
      <Navbar onNavigasi={setHalamanAktif} />

      {/* 6. Panggil fungsi untuk me-render halaman yang sesuai. */}
      <main>
        {tampilkanHalaman()}
      </main>
    </div>
  );
}

export default App;