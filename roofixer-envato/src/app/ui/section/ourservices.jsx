import "./ourservices.scss";
import Call from "../combinations/call";
import Services2Group from "../groups/services2";
import Header1 from "../headers/header1";
import TriangleElement from "../img-containers/toptriangle";

export default function OurServices() {
  return (
    <section id="ourservices">
      <TriangleElement />
      <div className="container">
        <Header1
          span={"Our Services"}
          header="Explore our best roofing"
          text={
            "Best roofing Service, Reasonable price, Best after support policy."
          }
          emphasis={"services"}
          ctalink={"/services"}
          ctatext={"All Services"}
        />
        <Services2Group />
        <div className="row">
          <a href="/contact" className="btn-2">
            Schedule a booking
          </a>
          <Call />
        </div>
      </div>
    </section>
  );
}
