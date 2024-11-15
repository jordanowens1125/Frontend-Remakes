import Services1Group from "../groups/services1";
import Header2 from "../headers/header2";

export default function RoofingServices() {
  return (
    <section id="roofing-services">
      <div className="container">
        <Header2
          header="Explore our best roofing"
          emphasis={"services"}
          ctalink={"/services"}
          ctatext={"All Services"}
        />
      </div>
    </section>
  );
}
