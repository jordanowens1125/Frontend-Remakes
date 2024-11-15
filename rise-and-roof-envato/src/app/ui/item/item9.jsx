import "./item9.scss";
import CheckSvgComponent from "@/app/icons/check";

export default function Item9({
  svg = <CheckSvgComponent />,
  text = "CheckList",
  svgClass = "icon-3",
  itemHeaderClass = "item-h-3",
}) {
  return (
    <div className="item9 item">
      <span className={svgClass}>{svg}</span>
      <p className={itemHeaderClass}>{text}</p>
    </div>
  );
}
