import HammerSVGComponent from "../../svgs/hammer";
import SVGHammer from "../../svgs/hammer";
import "./services1.scss";

export default function Services1Group({
  items = [
    {
      header: "Initial Consultation",
      text: "lorem",
      icon: <HammerSVGComponent />,
    },
    {
      header: "Roof Inspection",
      text: "lorem",
      icon: <HammerSVGComponent />,
    },
    {
      header: "Preparation",
      text: "lorem",
      icon: <HammerSVGComponent />,
    },
    {
      header: "Installation",
      text: "lorem",
      icon: <HammerSVGComponent />,
    },
  ],
  iconClass = "icon-3",
  itemHeaderClass = "item-h-2",
}) {
  return (
    <ul className="services1group group">
      {items.map((item, count) => (
        <li key={item.header} className="item">
          {/* <div className={iconClass}>{item.icon}</div> */}
          <p className="count item-h-6">{count+1}</p>
          <span className={itemHeaderClass}>{item.header}</span>
          <p className="text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
