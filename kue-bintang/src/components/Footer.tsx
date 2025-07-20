import { 
  FaInstagram, 
  FaFacebook, 
  FaTiktok, 
  FaYoutube,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="kontak">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Tentang Kue Bintang</h3>
          <p>Kue Bintang hadir untuk menyebarkan kebahagiaan melalui kue-kue imut dan lezat sejak 2025. Setiap kue dibuat dengan cinta dan bahan terbaik.</p>
          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Link Cepat</h3>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#produk">Produk</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
            <li><a href="#kontak">Kontak</a></li>
            <li><a href="#">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Kontak Kami</h3>
          <ul>
            <li><FaMapMarkerAlt />Curug Pelangi, Desa
 Kertawangi, Kec. Cisarua, Kabupaten Bandung Barat, Jawa Barat 40551</li>
            <li><FaWhatsapp /> 082240303946</li>
            <li><FaEnvelope /> halo@kuebintang.com</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Kue Bintang. Semua Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;