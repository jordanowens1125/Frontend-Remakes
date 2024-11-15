import "./checkgroup.scss";
import CheckSvgComponent from "@/app/svgs/check";

export default function CheckGroup({
  items = [
    {
      text: "Time savings through effective project management",
    },
    {
      text: "High quality workmanship and materials",
    },
    {
      text: "Professional and efficient project delivery",
    },
  ],
  svgClass='icon-7',
  itemHeaderClass='item-h-9'
}) {
  return (
    <ul className="checkgroup group">
      {items.map((item) => (
        <div className="item" key={item.text}>
          <span className={svgClass}>{<CheckSvgComponent />}</span>
          <p className={itemHeaderClass}>{item.text}</p>
        </div>
      ))}
    </ul>
  );
}
