import "./banner4.scss";
import { imgcontainer1IMG_A } from "@/app/constants/images";

export default function Banner4() {
  return (
    <section className="banner4">
      <div className="container">
        <div className="overlay">
          <div className="info">
            <h2 className="banner-h-1">Save big with our cheap car rental!</h2>
            <p className="banner-h-2">We are ready to help you</p>
          </div>
          <img src={imgcontainer1IMG_A} alt="" className="bg-img" />
          <div className="img-overlay"></div>
        </div>
      </div>
    </section>
  );
}
