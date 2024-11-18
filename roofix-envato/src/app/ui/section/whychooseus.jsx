import "./whychooseus.scss";
import Call from "../combinations/call";
import CheckGroup from "../groups/checkgroup";
import Header1 from "../headers/header1";
import ImgContainer2 from "../img-containers/img-container2";

export default function Whychooseus() {
  return (
    <section id="whychooseus">
      <div className="sbs">
        <div className="container">
          <ImgContainer2 />
        </div>
        <div className="container">
          <Header1
            span={"Why Choose Us"}
            header="Experience construction done right"
            text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. Mollis sollicitudin erat dui luctus aenean ex vehicula. Risus habitant leo turpis sit vehicula. "
          />
          <CheckGroup />
          <div className="row">
            <a href="/about" className="btn-1">
              More About Us
            </a>
            <Call />
          </div>
        </div>
      </div>
    </section>
  );
}
