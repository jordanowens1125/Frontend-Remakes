import HammerSVGComponent from "@/app/icons/hammer";
import Header1 from "../headers/header1";
import "./process.scss";
import TopTriangleElement from "../img-containers/toptriangle";

export default function ProcessSection({
  items = [
    {
      svg: <HammerSVGComponent />,
      header: "Inspection & Proposal",
      text: "Cras mattis consectetur purus males etiam sit amet ipsum dolor amet consectet adipiscing elit.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Enjoy Your New Roof!",
      text: "Cras mattis consectetur purus males etiam sit amet ipsum dolor amet consectet adipiscing elit.",
    },
    {
      svg: <HammerSVGComponent />,
      header: "Installing & Auditing",
      text: "Cras mattis consectetur purus males etiam sit amet ipsum dolor amet consectet adipiscing elit.",
    },
  ],
}) {
  return (
    <section id="process">
      <TopTriangleElement bgColor="pink"/>
      <div className="container">
        <Header1
          span={"Our Process"}
          header="Simple 3 Step Process"
          text={"We take care of your roof as if it were our own."}
        />
        <div className="group">
          {items.map((item, count) => (
            <div className="item " key={item.header}>
              <div className="count">
                <span className="item-h-7">{count + 1}</span>
              </div>
              <div className={"icon-2"}>{item.svg}</div>
              <span className="item-h-4">{item.header}</span>
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
