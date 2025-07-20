import ProductCard from "./ProductCard";
import type { Product } from "../types/types";

const products: Product[] = [
  {
    id: 1,
    name: "Cupcake Bintang",
    description: "Cupcake lembut dengan topping krim keju dan hiasan bintang warna-warni. Rasa vanilla yang nikmat!",
    price: 25000,
    image: "/images/cupcake.jpg",
    badge: "Terlaris!"
  },
  {
    id: 2,
    name: "Tart Bintang Mini",
    description: "Tart mini dengan lapisan buah segar dan krim spesial. Tersedia rasa stroberi, blueberry, dan mangga.",
    price: 45000,
    image: "/images/tart.jpg"
  },
  {
    id: 3,
    name: "Cookies Bintang",
    description: "Cookies butter renyah dengan bentuk bintang yang menggemaskan. Paket isi 12 cookies berbagai rasa.",
    price: 35000,
    image: "/images/cookies.jpg",
    badge: "Baru!"
  },
  {
    id: 4,
    name: "Brownies Bintang",
    description: "Brownies cokelat premium dengan tekstur lembut di dalam dan renyah di luar, berbentuk bintang imut.",
    price: 30000,
    image: "/images/brownies.jpg"
  }
];

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