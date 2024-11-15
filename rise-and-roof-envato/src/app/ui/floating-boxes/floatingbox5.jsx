import "./floatingbox5.scss";
import HammerSVGComponent from "@/app/icons/hammer";

export default function FloatingBox5({
  icon = <HammerSVGComponent />,
  headertext = "45",
  text = "Experience of Work",
  headerClass = "item-h-1",
}) {
  return (
    <>
      <div className="floatingbox5">
        {icon}
        <p className={headerClass}>{headertext}</p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
