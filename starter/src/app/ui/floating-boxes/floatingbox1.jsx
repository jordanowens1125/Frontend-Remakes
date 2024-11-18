import "./floatingbox1.scss";
import HammerSVGComponent from "@/app/svgs/hammer";

export default function FloatingBox1({
  icon = <HammerSVGComponent />,
  headertext = "45",
  text = "Experience of Work",
  span = "+",
}) {
  return (
    <>
      <div className="floatingbox1">
        <div className="icon-1">{icon}</div>

        <p className="item-h-7">
          {headertext} {span && <span>{span}</span>}
        </p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
