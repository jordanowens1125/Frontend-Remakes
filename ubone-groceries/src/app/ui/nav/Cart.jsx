import { CANCEL, TRASH } from "@/app/constants/icons";
import SideBarProductDisplay from "../products/sidebar-cart-product";

export default function Cart({ active, closeCart }) {
  const CART = [
    {
      name: "Apple",
      category: "Fruit",
      updatedPrice: 0.3,
      oldPrice: 0.35,
      rating: 4,
      images: [
        "apple1.jpg",
        "apple2.jpg",
        "apple3.jpg",
        "apple4.jpg",
        "apple5.jpg",
      ],
    },
  ];
  return (
    <>
      <div className={active ? "modal" : ""} onClick={closeCart}></div>
      <div className={active ? "cart show-cart" : "cart"}>
        <span className="flexsb">
          <p>My shopping cart</p>
          <img
            src={CANCEL}
            alt="Close Cart"
            className="icon"
            onClick={closeCart}
          />
        </span>
        <div className="col-m cart-items cart-section">
          {CART.map((product) => (
            <SideBarProductDisplay key={product.name} product={product} />
          ))}
        </div>
        <div className="col-m cart-section">
          <span className="flexsb">
            <p>Subtotal</p>
            <p>$30.00 USD</p>
          </span>
          <span className="flex-sm">
            <input type="checkbox" name="terms" />
            <p>I have read and agree with the terms & conditions.</p>
          </span>
          <button className="primary-btn">View Cart</button>
          <button className="disabled-btn">Check Out</button>
        </div>
      </div>
    </>
  );
}
