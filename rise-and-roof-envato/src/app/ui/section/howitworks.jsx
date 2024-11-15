import Services1Group from "../groups/services1";
import Header2 from "../headers/header2";

export default function HowItWorks() {
  return (
    <section id="howitworks">
      <div className="container">
        <Header2
          span={"How It Works"}
          header="Step-by-step guide for providing roofing"
          text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. Mollis sollicitudin erat dui luctus aenean ex vehicula. 
          Risus habitant leo turpis sit vehicula."
          bottom={<Services1Group />}
        />
      </div>
    </section>
  );
}
