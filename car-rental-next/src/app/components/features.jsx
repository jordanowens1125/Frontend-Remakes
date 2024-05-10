import "./features.scss";
import SectionHeader1 from "./sectionheader1";
export default function Features({ items = [] }) {
  return (
    <section id="features">
      <div className="container">
        <SectionHeader1
          header={"Quick & easy car rental"}
          subheader={"Plan your big trip now"}
        />
        <div className="items">
          <div className="item">
            <img src="feature1.png" alt="" />
            <p className="item-h">Select Car</p>
            <p className="text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div className="item">
            <img src="feature2.png" alt="" />
            <p className="item-h">Select Car</p>
            <p className="text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
          <div className="item">
            <img src="feature3.png" alt="" />
            <p className="item-h">Select Car</p>
            <p className="text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
