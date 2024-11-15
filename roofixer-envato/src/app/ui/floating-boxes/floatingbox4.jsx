import "./floatingbox4.scss";
import HammerSVGComponent from "@/app/svgs/hammer";

export default function FloatingBox4({
  icon = <HammerSVGComponent />,
  headertext = "45",
  text = "Experience of Work",
  headerClass = "item-h-1",
}) {
  return (
    <>
      <div className="floatingbox4">
        {icon}
        <p className={headerClass}>{headertext}</p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
