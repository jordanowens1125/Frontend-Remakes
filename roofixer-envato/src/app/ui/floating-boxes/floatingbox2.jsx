import "./floatingbox2.scss";
import HammerSVGComponent from "@/app/icons/hammer";

export default function FloatingBox2({
  icon = <HammerSVGComponent />,
  headertext = "45",
  text = "Experience of Work",
  span = "+",
}) {
  return (
    <>
      <div className="floatingbox2">
        <div className="icon-1">{icon}</div>
        <p className="item-h-7">
          {headertext} {span && <span>{span}</span>}
        </p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
