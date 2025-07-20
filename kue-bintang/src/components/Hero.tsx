import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Kue Imut Penuh Cinta dari Kuenya Bintang!</h2>
        <p>Temukan kelezatan yang bikin hari-harimu lebih cerah dengan kue-kue imut kami. Dibuat dengan bahan premium dan sentuhan kasih sayang untuk moment spesialmu.</p>
        <a href="#produk" className="cta-button">
          Lihat Kue Kami <FaArrowRight />
        </a>

      </div>
    
    </section>
  );
};

export default Hero;