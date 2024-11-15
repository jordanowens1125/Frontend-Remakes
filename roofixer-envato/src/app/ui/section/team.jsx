import TeamGroup from "../groups/team";
import Header1 from "../headers/header1";

export default function TeamSection() {
  return (
    <section id="team">
      <div className="container">
        <Header1
          span={"Our Team"}
          header="Our reputation is over the top"
          text={
            "We have been providing roofing services for more than a decade"
          }
        />
        <TeamGroup />
      </div>
    </section>
  );
}
