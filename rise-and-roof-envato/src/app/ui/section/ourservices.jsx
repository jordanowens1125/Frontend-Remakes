import Services2Group from "../groups/services2";
import Header2 from "../headers/header2";

export default function OurServices() {
  return (
    <div id="ourservices">
      <div className="container">
        <Header2
          header="Explore our best roofing"
          emphasis={"services"}
          ctalink={"/services"}
          ctatext={"All Services"}
        />
        <Services2Group />
      </div>
    </div>
  );
}
