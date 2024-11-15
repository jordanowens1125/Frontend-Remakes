import "./ourstory.scss";
import Call from "../combinations/call";
import Features1 from "../groups/features1";
import Header1 from "../headers/header1";
import ImgContainer1 from "../img-containers/img-container1";

export default function OurStory() {
  return (
    <section id="ourstory">
      <div className="sbs sbs1">
        <div className="container">
          <ImgContainer1 />
        </div>
        <div className="container">
          <Header1
            span={"Our Story"}
            header="We Are Qualified & Professional Worker Stories"
            text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. Mollis sollicitudin erat dui luctus aenean ex vehicula. Risus habitant leo turpis sit vehicula. "
          />
          <Features1 />
          <div className="row margin-top">
            <a href="/about" className="btn-1">
              About Us
            </a>
            <Call />
          </div>
        </div>
      </div>
    </section>
  );
}
