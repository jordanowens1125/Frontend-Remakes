import { BAG } from "@/app/constants/icons";

export default function ProductDisplay2({ product }) {
  return (
    <div className="product-display-2">
      <img
        src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-12-e.jpg?v=1709882389&width=360"
        alt="Item name"
      />
      <div className="product-info">
        <p>{product.name}</p>
        <span className="prices">
          <p className="updatedprice">${product.updatedPrice}</p>
          <p className="oldprice">${product.oldPrice}</p>
        </span>
        <span className="stars">stars</span>
        <button className="tertiary-btn radius">
          Add to cart <img href={BAG} alt="" className="icon" />
        </button>
      </div>
    </div>
  );
}
