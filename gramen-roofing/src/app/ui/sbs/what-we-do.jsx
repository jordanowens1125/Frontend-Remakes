import Header1Light from "../headings/header1-light";
import "./what-we-do.scss";

export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="container">
        <Header1Light
          span={"What We Do"}
          header={"Delivering High Quality Roof Services"}
          button={"All Services"}
          buttonType="btn-3"
        />
      </div>
    </section>
  );
}
