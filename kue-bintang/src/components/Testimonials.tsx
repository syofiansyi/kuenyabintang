import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "../types/types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Kue dari Kue Bintang selalu bikin acara ulang tahun anak saya spesial! Rasanya enak dan tampilannya lucu banget.",
    author: "Mama Alika",
    role: "Pelanggan Setia",
    avatar: "/images/avatar1.jpg"
  },
  {
    id: 2,
    text: "Saya selalu pesan Cupcake Bintang untuk meeting kantor. Selain lucu, rasanya juga premium dan harganya terjangkau.",
    author: "Pak Andi",
    role: "Manager Perusahaan",
    avatar: "/images/avatar2.jpg"
  },
  {
    id: 3,
    text: "Brownies Bintang favorit saya! Teksturnya pas, tidak terlalu manis, dan bentuknya bikin senang hati.",
    author: "Kak Rina",
    role: "Mahasiswi",
    avatar: "/images/avatar3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimoni">
      <div className="section-title">
        <h2>Apa Kata Pelanggan Kami?</h2>
      </div>
      
      <div className="testimonial-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;