import HouseSvgComponent from "@/app/svgs/house";
import "./stats.scss";
import RoofSvgComponent from "@/app/svgs/roof";
import TapeSvgComponent from "@/app/svgs/tape";
import WorkerSvgComponent from "@/app/svgs/worker";

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
