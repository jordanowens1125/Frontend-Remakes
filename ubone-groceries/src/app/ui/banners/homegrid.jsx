import { BAG } from "@/app/constants/icons";

export default function Homegrid() {
  return (
    <section className="container home-grid">
      <div className="img-container lg-img">
        <img
          src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-slider3.jpg?v=1709961990"
          alt=""
        />
        <div className="abs-content columnboxcenter">
          <p>All That savory flavor</p>
          <p>Indian Spices</p>
          <button className="tertiary-btn">
            Shop Now <img src={BAG} alt="" className="icon" />
          </button>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-banner4.jpg?v=1709879449&width=550"
          alt=""
        />
        <div className="abs-content columnboxcenter">
          <p>Bakery products</p>
          <button className="tertiary-btn">
            Shop Now <img src={BAG} alt="" className="icon" />
          </button>
        </div>
      </div>

      <div className="img-container">
        <img
          src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-banner4.jpg?v=1709879449&width=550"
          alt=""
        />
        <div className="abs-content columnboxcenter">
          <p>Bakery products</p>
          <button className="tertiary-btn">
            Shop Now <img src={BAG} alt="" className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
