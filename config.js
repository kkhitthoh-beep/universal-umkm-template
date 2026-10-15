// UNIVERSAL UMKM TEMPLATE V3.2
// Edit bagian ini saja untuk mengganti identitas usaha, menu, harga, dan add-on.
const SITE = {
  businessName: "Nama Usaha Anda",
  tagline: "Rasa terbaik, dibuat untuk harimu.",
  eyebrow: "UMKM lokal · Pesan mudah",
  description: "Temukan produk favoritmu, pilih jumlah dan tambahan, lalu kirim pesanan langsung melalui WhatsApp.",
  whatsapp: "6281234567890", // Ganti dengan nomor WhatsApp aktif, format 62..., tanpa + atau spasi
  whatsappMessage: "Halo, saya ingin memesan:",
  instagram: "https://www.instagram.com/",
  instagramLabel: "Instagram",
  // Isi URL toko yang benar. Biarkan url kosong jika tidak digunakan.
  marketplaces: [
    { id: "shopee", label: "Shopee", url: "" },
    { id: "tiktok-shop", label: "TikTok Shop", url: "" }
  ],
  location: "Kota Anda",
  aboutTitle: "Cerita di balik usaha kami.",
  aboutText: "Ceritakan secara singkat usaha Anda, produk yang ditawarkan, dan alasan pelanggan memilih usaha Anda.",
  tags: ["Lokal", "Ramah", "Pilihan favorit"],
  currency: "IDR",
  menu: [
    { id: "produk-1", icon: "☕", name: "Produk Favorit", description: "Deskripsi singkat produk Anda.", price: 15000 },
    { id: "produk-2", icon: "🥐", name: "Produk Kedua", description: "Tambahkan keunggulan produk Anda.", price: 12000 },
    { id: "produk-3", icon: "🍰", name: "Produk Ketiga", description: "Produk pilihan untuk pelanggan.", price: 18000 }
  ],
  addons: [
    { id: "addon-1", name: "Tambahan topping", price: 3000 },
    { id: "addon-2", name: "Ukuran besar", price: 5000 },
    { id: "addon-3", name: "Kemasan hadiah", price: 4000 }
  ]
};
