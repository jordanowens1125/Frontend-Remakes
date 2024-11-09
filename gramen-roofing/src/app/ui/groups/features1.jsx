import CheckSvgComponent from "@/app/icons/check";
import "./features1.scss";

export default function Features1({
  features = [
    {
      text: "Accurate Testing Processes",
    },
    {
      text: "100% Satisfaction Guarantee",
    },
    {
      text: "Award Winning Company",
    },
    {
      text: "300+ Successful Projects done",
    },
    {
      text: "Professional Engineers Provide",
    },
    {
      text: "Damage Roofing Repair",
    },
  ],
}) {
  return (
    <ul className="features1 group">
      {features.map((item) => (
        <li key={item.text} className="feature">
          <CheckSvgComponent/>
          <span className="">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
