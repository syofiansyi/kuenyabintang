import ProductCard from "./ProductCard";
import type { Product } from "../types/types";
import cupcakeImg from '@/assets/images/cupcake.avif'
import lontongImg from '@/assets/images/lontong.jpeg'
import cookiesImg from '@/assets/images/cookies.jpg'
import browniesImg from '@/assets/images/brownies.jpeg'

const products: Product[] = [
  {
    id: 1,
    name: "Cupcake Bintang",
    description: "Cupcake lembut dengan topping krim keju dan hiasan bintang warna-warni. Rasa vanilla yang nikmat!",
    price: 25000,
    image: cupcakeImg,
    badge: "Terlaris!"
  },
  {
    id: 2,
    name: "Lontong Besek",
    description: "Lontong besek khas rumahan, lembut dan padat isi—cocok untuk sarapan atau bekal yang mengenyangkan",
    price: 45000,
    image: lontongImg
  },
  {
    id: 3,
    name: "Cookies Bintang",
    description: "Cookies butter renyah dengan bentuk bintang yang menggemaskan. Paket isi 12 cookies berbagai rasa.",
    price: 35000,
    image: cookiesImg,
    badge: "Baru!"
  },
  {
    id: 4,
    name: "Brownies Bintang",
    description: "Brownies cokelat premium dengan tekstur lembut di dalam dan renyah di luar, berbentuk bintang imut.",
    price: 30000,
    image: browniesImg
  }
]


const Products = () => {
  return (
    <section className="products" id="produk">
      <div className="section-title">
        <h2>Koleksi Kue Imut Kami</h2>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;