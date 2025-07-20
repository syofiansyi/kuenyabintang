import type { Product } from "../types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      {product.badge && <div className="product-badge">{product.badge}</div>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="price">Rp {product.price.toLocaleString()}</span>
     <button
  className="add-to-cart"
  onClick={() => {
    const phoneNumber = "6282240303946"; // Ganti dengan nomor WhatsApp kamu
    const message = `Halo, saya ingin memesan produk ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
>
  + Buy Now
</button>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;