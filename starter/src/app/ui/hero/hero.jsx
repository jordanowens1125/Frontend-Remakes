import { HEROIMG } from "@/app/constants/images";
import HeroHeader from "../headers/hero-header";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="img-container">
        <img src={HEROIMG}
          alt=""
        />
      </div>
      <div className="overlay"></div>
      <div className="container">
        <HeroHeader
          span={"Providing the best Services"}
          header={"The Best Roofing Services & Consulting"}
          text={
            "We denounce the righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."
          }
          button={"View Services"}
          link={"/services"}
          buttonType="btn-1"
        />
      </div>
    </section>
  );
}
