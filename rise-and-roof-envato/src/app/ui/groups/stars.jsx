import StarSvgComponent from "@/app/icons/star";
import "./stars.scss";
export default function StarsGroup() {
  return (
    <div className="stars">
      <StarSvgComponent />
      <StarSvgComponent />
      <StarSvgComponent />
      <StarSvgComponent />
      <StarSvgComponent />
    </div>
  );
}
