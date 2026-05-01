"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <span>Glow</span>
          <span>&Bloom</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Beranda</a></li>
          <li><a href="#about" onClick={closeMenu}>Tentang</a></li>
          <li><a href="#services" onClick={closeMenu}>Layanan</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Karya</a></li>
          <li><a href="#contact" onClick={closeMenu}>Kontak</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-left">
          <h1>Makeup Artist & Buket Bunga untuk Momen Spesialmu</h1>
          <p>
            Tampil memukau dengan riasan profesional dan buket bunga estetik dari Amelia.
            Glow & Bloom siap mempercantik hari-harimu ✨
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary">
              <i className="fab fa-whatsapp"></i> Pesan Sekarang
            </a>
            <a href="#services" className="btn btn-outline">
              Lihat Jasa
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            className="three-d-img"
            src="/images/3d-model.png"
            alt="3D Makeup & Flower Model"
          />
        </div>
      </section>

      {/* About Section - Ganti foto di sini */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            {/* GANTI src DENGAN FOTO ASLI TEMAN ANDA */}
            <img 
              src="/images/Amel.jpeg" 
              alt="Foto Amelia" 
            />
            {/* Cara simpan foto: taruh file foto-Amelia.jpg di folder public/images/ */}
          </div>
          <div className="about-text">
            <h2>Tentang <span className="highlight">Amelia</span></h2>
            <p>
              Halo! Saya Amelia, seorang <strong>Makeup Artist</strong> dan <strong>Florist</strong> yang 
              berdedikasi untuk membuat setiap momen Anda menjadi spesial. Dengan pengalaman lebih dari 
              2 tahun di industri kecantikan dan rangkaian bunga, saya percaya bahwa setiap orang berhak 
              tampil percaya diri di hari istimewanya.
            </p>
            <p>
              Saya menggunakan produk berkualitas dan bunga segar pilihan untuk memberikan hasil terbaik 
              bagi pelanggan. Baik itu riasan untuk wisuda, prewedding, pesta, atau buket bunga untuk 
              orang tersayang, saya siap membantu mewujudkannya dengan sentuhan artistik dan penuh cinta. 🌸
            </p>
            <p>
              <strong>#GlowWithAmelia #BloomWithLove</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="services" className="services">
        <div className="section-title">
          <span>✨ Layanan Unggulan ✨</span>
        </div>
        <div className="card-container">
          <div className="card">
            <i className="fas fa-palette"></i>
            <h3>Makeup Profesional</h3>
            <p>Daily, prewedding, wisuda, pesta. Kartinian.</p>
            <div className="price">Mulai Rp35k-50k</div>
          </div>
          <div className="card">
            <i className="fas fa-brush"></i>
            <h3>Bridal Makeup</h3>
            <p>Makeup pengantin modern & klasik, plus trial session.</p>
            <div className="price">Mulai Rp350k</div>
          </div>
          <div className="card">
            <i className="fas fa-seedling"></i>
            <h3>Buket Bunga</h3>
            <p>Buket segar, dried flower, custom warna & tema.</p>
            <div className="price">Mulai Rp50k</div>
          </div>
          <div className="card">
            <i className="fas fa-gem"></i>
            <h3>Paket Makeup + Buket</h3>
            <p>Hemat dan praktis untuk acara spesial.</p>
            <div className="price">Hubungi CS</div>
          </div>
        </div>
      </section>

      {/* Galeri - Ganti semua gambar di sini */}
      <section id="gallery" className="gallery">
        <div className="section-title">
          <span>🌸 Galeri Inspirasi 🌸</span>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            {/* GANTI src DENGAN FOTO MAKEUP ASLI */}
            <img 
              src="/images/gallery/makeup-1.jpg" 
              alt="Hasil Makeup" 
              className="gallery-img" 
            />
            <div className="gallery-caption">✨ Make Up Kartinian </div>
          </div>
          <div className="gallery-item">
            {/* GANTI src DENGAN FOTO BUKET ASLI */}
            <img 
              src="/images/gallery/buket-1.jpg" 
              alt="Buket Bunga" 
              className="gallery-img" 
            />
            <div className="gallery-caption">🌸 Buket Baby Breath & Mawar</div>
          </div>
          <div className="gallery-item">
            {/* GANTI src DENGAN FOTO BRIDAL ASLI */}
            <img 
              src="/images/gallery/bridal-1.jpg" 
              alt="Bridal Makeup" 
              className="gallery-img" 
            />
            <div className="gallery-caption">💍 Make Up Akad </div>
          </div>
          <div className="gallery-item">
            {/* GANTI src DENGAN FOTO BUKET KERING ASLI */}
            <img 
              src="/images/gallery/buket-kering-1.jpg" 
              alt="Buket Kering" 
              className="gallery-img" 
            />
            <div className="gallery-caption">🌾 Buket Bunga Kering</div>
          </div>
        </div>
      </section>

      {/* Kontak + Barcode */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>📞 Hubungi Amelia</h2>
            <p>Siap membantu makeup cantik & buket bunga idamanmu. Fast response!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/6281234567890?text=Halo%20Amelia,%20saya%20tertarik%20dengan%20jasa%20Makeup%20%26%20Buket" target="_blank">
                  +62 8222-8782-822 (WhatsApp)
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:glowandbloom@example.com">Amelfasya@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+628987654321">+62 8222-8782-822</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-instagram"></i>
                <a href="https://instagram.com/glowandbloom.id" target="_blank">
                  @aboutfsyaaa
                </a>
              </div>
            </div>
            <div className="social-icons">
              <a href="https://instagram.com/glowandbloom.id" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/6281234567890" target="_blank"><i className="fab fa-whatsapp"></i></a>
              <a href="https://tiktok.com/@glowbloom" target="_blank"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          
          {/* Bagian Barcode */}
          <div className="contact-barcode">
            <h3>📱 Scan Barcode</h3>
            <div className="barcode-wrapper">
              <div className="barcode-item">
                {/* GANTI src DENGAN FILE BARCODE WHATSAPP ANDA */}
                <img 
                  src="/images/barcode-wa.png" 
                  alt="QR Code WhatsApp" 
                />
                <p>Link Portfolio</p>
              </div>
            </div>
            <p className="barcode-note">Scan untuk langsung chat atau follow</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 AsyaBuket — Makeup Artist & Buket Bunga | Amelia</p>
      </footer>
    </>
  );
}