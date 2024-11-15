import "./whychooseus.scss";
import Call from "../combinations/call";
import Header1 from "../headers/header1";
import { imgcontainer1IMG_A } from "@/app/constants/sources";
import Features1 from "../groups/features1";

export default function Whychooseus() {
  return (
    <section id="whychooseus">
      <div className="sbs">
        <div className="container">
          <Header1
            span={"Why Choose Us"}
            header="We bring professionalism to the roofing industry."
            text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. Mollis sollicitudin erat dui luctus aenean ex vehicula. Risus habitant leo turpis sit vehicula. "
          />
          <img src={imgcontainer1IMG_A} alt="" />
        </div>

        <div className="container">
          <div className="blue">
            <Features1 iconClass="icon-4" />
            <div className="row">
              <a href="/about" className="btn-2">
                More About Us
              </a>
              <Call />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
