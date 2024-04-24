import { TRASH } from "@/app/constants/icons";

export default function SideBarProductDisplay({ product }) {
  return (
    <div className="cart-item">
      <div className="img-container light-border radius">
        <img
          src="https://cdn.shopify.com/s/files/1/0728/4994/8973/files/marbo-grocery-product-04.jpg?v=1709882307&width=375"
          alt=""
        />
      </div>

      <div className="product-info">
        <p>{product.name}</p>
        <div className="prices">
          <p className="updatedprice">${product.updatedPrice}</p>
          <p className="oldprice">${product.oldPrice}</p>
        </div>
        <span>
          <b>Size:</b> 1kg
        </span>
        <div className="flexsb full-w">
          <div className="amount radius full-w">
            {" "}
            <span>-</span>
            <span className="flex-c">0</span>
            <span>+</span>
          </div>
          <img src={TRASH} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
}
