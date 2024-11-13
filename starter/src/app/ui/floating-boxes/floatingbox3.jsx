import "./floatingbox3.scss";
import HammerSVGComponent from "@/app/icons/hammer";

export default function FloatingBox3({
  icon = <HammerSVGComponent />,
  headertext = "45",
  text = "Experience of Work",
  headerClass = "item-h-1",
}) {
  return (
    <>
      <div className="floatingbox3">
        {icon}
        <p className={headerClass}>{headertext}</p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
