import Header2 from "../ui/headers/header2";
import Header1 from "../ui/headers/header1";

export default function AllHeaders() {
  return (
    <>
      <div className="group">
        <Header1
          span={"Our Faqs"}
          header="Popular Questions"
          emphasis="FAQS"
          text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. 
          Mollis sollicitudin erat dui luctus aenean ex vehicula. 
          Risus habitant leo turpis sit vehicula. "
        />

        <Header2
          span={"Our Faqs"}
          header="Popular Questions"
          emphasis="FAQS"
          text="Sociosqu massa semper vivamus fusce luctus porta purus nunc consectetuer. 
          Mollis sollicitudin erat dui luctus aenean ex vehicula. 
          Risus habitant leo turpis sit vehicula. "
        />
      </div>
    </>
  );
}
