import { RIGHT } from "@/app/constants/icons";

export default function FlexBanner() {
  return (
    <section>
      <div className="container flex-banner">
        <div className="img-container">
          <img
            src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-banner1.jpg?v=1709961989&width=832"
            alt=""
          />
          <div className="abs-content-2 ">
            <p>Get 29% off</p>
            <p>Seafood calamari</p>
            <button className="secondary-btn">
              Shop Now <img src={RIGHT} alt="" className="icon" />
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-banner2.jpg?v=1709961989&width=832"
            alt=""
          />
          <div className="abs-content-2 ">
            <p>Get 29% off</p>
            <p>Freshly baked bread toast</p>
            <button className="secondary-btn">
              Shop Now <img src={RIGHT} alt="" className="icon" />
            </button>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-banner3.jpg?v=1709961988&width=832"
            alt=""
          />
          <div className="abs-content-2 ">
            <p>Get 49% off</p>
            <p>Fruits and vegetables</p>
            <button className="secondary-btn">
              Shop Now <img src={RIGHT} alt="" className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
