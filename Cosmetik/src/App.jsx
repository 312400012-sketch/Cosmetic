import React from 'react';

// --- 1a. Component Header ---
const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600 tracking-tighter">ZAHRA COSMETIC</h1>
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-pink-500">Beranda</a>
        <a href="#contact" className="hover:text-pink-500">Kontak</a>
      </nav>
      <button className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold">Shop Now</button>
    </div>
  </header>
);

// --- 1b. Component Footer ---
const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 mt-20">
    <div className="container mx-auto px-6 text-center">
      <p className="font-bold text-pink-500 mb-2">ZAHRA COSMETIC</p>
      <p className="text-xs text-gray-500 uppercase tracking-widest">
        &copy; 2026 Zahra Cosmetic Store. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- 1c. Content Website & 2. Form Contact ---
const Content = () => (
  <main>
    {/* Hero Section */}
    <section id="home" className="bg-pink-50 py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif text-gray-800 mb-6">Pancarkan Pesonamu</h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto">Koleksi kosmetik pilihan untuk kecantikan yang sehat dan alami setiap hari.</p>
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600" 
          alt="Produk Zahra" 
          className="mx-auto rounded-3xl shadow-2xl border-8 border-white max-w-md w-full"
        />
      </div>
    </section>

    {/* Section Form Contact (Tugas 2a - 2e) */}
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 font-serif">Hubungi Kami</h3>
          
          <form className="space-y-5">
            {/* 2a. Nama Lengkap */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama lengkap" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-500 transition-all" />
            </div>

            {/* 2b. Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="contoh@email.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-500 transition-all" />
            </div>

            {/* 2c. Judul Pesan */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Judul Pesan</label>
              <input type="text" placeholder="Apa subjek pesan Anda?" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-500 transition-all" />
            </div>

            {/* 2d. Pesan */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Pesan</label>
              <textarea rows="4" placeholder="Tuliskan pesan Anda di sini..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-pink-500 transition-all resize-none"></textarea>
            </div>

            {/* 2e. Tombol Kirim Pesan */}
            <button type="button" className="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition shadow-lg shadow-pink-200 uppercase tracking-widest">
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
);

// --- Fungsi Utama App ---
export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}