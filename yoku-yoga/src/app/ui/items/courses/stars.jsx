import { STAR } from "@/app/constants/icons";
import "./stars.scss";

export default function Stars() {
  return (
    <div className="stars">
      <img src={STAR} alt="Star" />
      <img src={STAR} alt="Star" />
      <img src={STAR} alt="Star" />
      <img src={STAR} alt="Star" />
      <img src={STAR} alt="Star" />
    </div>
  );
}
