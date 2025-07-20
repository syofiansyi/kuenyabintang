import { FaWhatsapp } from "react-icons/fa";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <h2>Siap Memesan Kue Imut Hari Ini?</h2>
      <p>Pesan sekarang dan dapatkan pengalaman menikmati kue yang bikin hari-harimu bersinar seperti bintang!</p>
      <a href="https://wa.me/6282240303946" className="cta-button white">
        <FaWhatsapp /> Pesan via WhatsApp
      </a>
    </section>
  );
};

export default CtaSection;