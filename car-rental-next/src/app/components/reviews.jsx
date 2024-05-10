import QuotationSvgComponent from "../icons/quotation";
import "./reviews.scss";
import SectionHeader1 from "./sectionheader1";
export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader1
          header={"Client Testimonials"}
          subheader={"Reviews"}
          text={
            "Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed."
          }
        />
        <div className="items">
          <div className="item">
            <p className="text">
              The rem value is the same as the em value displayed above. Both
              units are scaleable.
            </p>
            <img
              src="https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt=""
            />
            <p className="name">Kimberly Garcia</p>
            <p className="area">Boston Area</p>
            <QuotationSvgComponent />
          </div>

          <div className="item">
            <p className="text">
              The rem value is the same as the em value displayed above. Both
              units are scaleable.
            </p>
            <img
              src="https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt=""
            />
            <p className="name">Kimberly Garcia</p>
            <p className="area">Boston Area</p>
            <QuotationSvgComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
