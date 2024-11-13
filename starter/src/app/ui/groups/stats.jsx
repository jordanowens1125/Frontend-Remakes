import HouseSvgComponent from "@/app/icons/house";
import "./stats.scss";
import RoofSvgComponent from "@/app/icons/roof";
import TapeSvgComponent from "@/app/icons/tape";
import WorkerSvgComponent from "@/app/icons/worker";

export default function StatsGroup({
  items = [
    {
      header: "932",
      span: "+",
      text: "Experience of work",
      icon: <HouseSvgComponent />,
    },
  ],
  iconClass = "icon-1",
  itemHeaderClass = "item-h-7",
}) {
  return (
    <ul className="statsgroup group">
      {items.map((item) => (
        <li key={item.header} className="item">
          <div className={iconClass}>{item.icon}</div>
          <span className={itemHeaderClass}>
            {item.header}
            {item.span && <span className="primary">{item.span}</span>}
          </span>
          <p className="text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
