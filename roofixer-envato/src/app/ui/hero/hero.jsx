import { HEROIMG } from "@/app/constants/sources";
import "./hero.scss";
import Header1 from "../headers/header1";
import Call from "../combinations/call";
import BottomTriangleElement from "../img-containers/bottomtriangle";

export default function Hero() {
  return (
    <section className="hero">
      <div className="img-container">
        <img src={HEROIMG} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="container">
        <div>
          <Header1
            span={"Professional Roofing Service"}
            header={"Roofing is our heritage, quality is our tradition."}
            text={
              "We will work with your budget and schedule to create a beautiful, durable roof that will protect you, your family, and your investment for years to come."
            }
            headerClass="hero-header"
          />
          <div className="row">
            <a href="/services" className="btn-4">
              Our Services
            </a>
            <Call />
          </div>
        </div>
      </div>
      <BottomTriangleElement/>
    </section>
  );
}
