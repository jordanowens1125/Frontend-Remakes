import TeamGroup from "../groups/team";
import Header2 from "../headers/header2";

export default function OurTeam() {
  return (
    <section id="our-team">
      <div className="container">
        <Header2
          header="Meet Our Expert"
          emphasis={"Team"}
          span={"Our Team"}
          text={
            "Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. Mollis sollicitudin erat dui luctus aenean ex vehicula. Risus habitant leo turpis sit vehicu"
          }
        />
        <TeamGroup/>
      </div>
    </section>
  );
}
