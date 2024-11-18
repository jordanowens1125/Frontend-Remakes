import "./features1.scss";
import PointOnMapSvgComponent from "@/app/svgs/pointonmap";

export default function Features1({
  features = [
    {
      header: "We work all over America",
      text: "Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper mattis,",
      icon: <PointOnMapSvgComponent />,
    },
    {
      header: "All types of work",
      text: "Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper mattis,",
      icon: <PointOnMapSvgComponent />,
    },
    {
      header: "Soon near you",
      text: "Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper mattis,",
      icon: <PointOnMapSvgComponent />,
    },
  ],
  itemHeaderClass = "item-h-1",
}) {
  return (
    <ul className="features1group group">
      {features.map((item) => (
        <li key={item.header} className="item">
          <div className="icon-2 svg-holder">{item.icon}</div>
          <div className="info">
            <span className={itemHeaderClass}>{item.header}</span>
            <p className="text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
