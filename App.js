const express = require('express');
const path = require('path');
const app = express();

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Data produk kosmetik
const products = [
  {
    id: 1,
    name: 'Velvet Matte Lipstick',
    category: 'Bibir',
    price: 125000,
    originalPrice: 159000,
    badge: 'Bestseller',
    color: '#c9848a',
    emoji: '💄',
    desc: 'Warna intens tahan lama 12 jam, formula ringan & nyaman.'
  },
  {
    id: 2,
    name: 'Glow Serum Foundation',
    category: 'Wajah',
    price: 215000,
    originalPrice: null,
    badge: 'New',
    color: '#e8c5a0',
    emoji: '✨',
    desc: 'Coverage natural dengan efek glow dari dalam, SPF 30.'
  },
  {
    id: 3,
    name: 'Dewy Setting Spray',
    category: 'Wajah',
    price: 89000,
    originalPrice: 110000,
    badge: 'Sale',
    color: '#a8c5da',
    emoji: '💧',
    desc: 'Kunci makeup seharian penuh dengan efek segar & lembab.'
  },
  {
    id: 4,
    name: 'Brow Definer Pencil',
    category: 'Mata',
    price: 72000,
    originalPrice: null,
    badge: null,
    color: '#8a6a50',
    emoji: '🪄',
    desc: 'Micro-tip presisi untuk alis natural, waterproof formula.'
  },
  {
    id: 5,
    name: 'Rose Blush Palette',
    category: 'Pipi',
    price: 178000,
    originalPrice: 220000,
    badge: 'Sale',
    color: '#e8a0a8',
    emoji: '🌸',
    desc: '5 warna blush & highlighter dalam satu palette kompak.'
  },
  {
    id: 6,
    name: 'Lash Volume Mascara',
    category: 'Mata',
    price: 95000,
    originalPrice: null,
    badge: 'Bestseller',
    color: '#2c2020',
    emoji: '👁️',
    desc: 'Bulu mata panjang, tebal & melengkung. Tahan air 24 jam.'
  }
];

// Routes
const router = require('./routes/index')(products);
app.use('/', router);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;