import { BAG } from "@/app/constants/icons";

export default function Subscribe() {
  return (
    <section className="primary-bg">
      <div className="container subscribe">
        <div className="col">
          <p>Subscribe to our newsletter</p>
          <p>Get 20% off discount coupon</p>
        </div>

        <form action="" className="radius">
          <input type="text" placeholder="Enter your email" />
          <button className="secondary-btn">
            <img src={BAG} alt="" className="icon" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
