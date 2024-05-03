import { STAR } from "@/app/constants/icons";
import "./stars.scss";
import StarSvgComponent from "@/app/icons/star";

export default function Stars() {
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
