import {
  imgcontainer2IMG_A,
  imgcontainer2IMG_B,
  imgcontainer2IMG_C,
} from "@/app/constants/sources";
import "./img-container2.scss";

export default function ImgContainer2() {
  return (
    <div className="img-container2 group">
      <img src={imgcontainer2IMG_A} alt="" className="img-1" />
      <img src={imgcontainer2IMG_B} alt="" className="img-2" />
      <img src={imgcontainer2IMG_C} alt="" className="img-3" />
    </div>
  );
}
