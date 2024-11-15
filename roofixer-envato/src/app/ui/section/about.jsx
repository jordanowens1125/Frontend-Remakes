import Features1 from "../groups/features1";
import Header1 from "../headers/header1";
import ImgContainer1 from "../img-containers/img-container1";
import TriangleElement from "../img-containers/toptriangle";

import "./about.scss";

export default function AboutUs() {
  return (
    <section id="about" className="sbs">
      <div className="container">
        <Header1
          header="Quality & Reliability with 100% Satisfaction"
          span={"About Us"}
          text={
            "Nullam quis risus eget urna mollis ornare lacinia bibendum nulla sed consectetur. Fusce dapibus tellus tortor mauris condimentum nibh. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare lacinia bibendum nulla sed consectetur."
          }
        />
        <Features1 />
        <a className="btn-1" href="/about">
          More About Us
        </a>
      </div>
      <div className="container">
        <ImgContainer1 />
      </div>
    </section>
  );
}
