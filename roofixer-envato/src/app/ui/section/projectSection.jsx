import Call from "../combinations/call";
import Projects1Group from "../groups/projects1";
import Header1 from "../headers/header1";
import TopTriangleElement from "../img-containers/toptriangle";
import "./projectSection.scss";

export default function ProjectSection() {
  return (
    <section id="projects">
      <TopTriangleElement />
      <div className="container">
        <Header1
          span={"Projects"}
          header="Featured Works"
          text="We have been cleaning areas for over ten years, successful in various projects."
        />
      </div>
      <Projects1Group />
      <div className="row">
        <a href="/about" className="btn-2">
          More About Us
        </a>
        <Call />
      </div>
    </section>
  );
}
