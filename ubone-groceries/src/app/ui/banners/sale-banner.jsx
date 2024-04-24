import { BAG } from "@/app/constants/icons";

export default function SaleBanner() {
  return (
    <section>
      <div className="container">
        <div className="salebanner">
          <p>Sale of the month</p>
          <span className="flex-sm">
            <span>284 Day</span>
            <span>284 Day</span>
            <span>284 Day</span>
            <span>284 Day</span>
          </span>
          <button className="secondary-btn fit radius">
            Order now <img src={BAG} alt="Shop Icon" className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
