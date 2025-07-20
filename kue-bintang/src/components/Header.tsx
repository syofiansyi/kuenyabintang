import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Kue Bintang Logo" />
          <div className="logo-text">
            <h1>Kuenya Bintang</h1>
            <p>Manisnya Bikin Jatuh Hati!</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Beranda</a>
            </li>
            <li>
              <a href="#produk">Produk</a>
            </li>
            <li>
              <a href="#testimoni">Testimoni</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
   
    </header>
  );
};

export default Header;
