import { imgcontainer1IMG_A, imgcontainer1IMG_B } from "@/app/constants/images";
import FloatingBox1 from "../floating-boxes/floatingbox1";
import "./img-container1.scss";

export default function ImgContainer1() {
  return (
      <div className="img-container1">
        <img src={imgcontainer1IMG_A} alt="" className="img-1" />
        <img src={imgcontainer1IMG_B} alt="" className="img-2" />
        <FloatingBox1 />
    </div>
  );
}
