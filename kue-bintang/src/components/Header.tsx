import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.png" alt="Kue Bintang Logo" />
          <div className="logo-text">
            <h1>Kue Bintang</h1>
            <p>Rasa Bintang di Setiap Gigitan!</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#produk">Produk</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </div>
      <i className="star-decoration star-1"><FaStar /></i>
      <i className="star-decoration star-2"><FaStar /></i>
    </header>
  );
};

export default Header;