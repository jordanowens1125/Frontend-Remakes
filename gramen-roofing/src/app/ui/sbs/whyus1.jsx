import HammerSVGComponent from "@/app/icons/hammer";
import Header1Light from "../headings/header1-light";
import "./whyus1.scss";

export default function Whyus1() {
  return (
    <section className="whychooseus1 dark">
      <div className="container">
        <div>
          <Header1Light
            span={"Why Choose Us"}
            header={"What Makes Us Different"}
          />
          <div className="group">
            <div className="item">
              <HammerSVGComponent />
              <div className="info">
                <span className="item-h-2">Commercial Roofing</span>
                <p>
                  Embarrassing hidden in the middle of all the lorem ipsum
                  generators on the internet repeat
                </p>
              </div>
            </div>

            <div className="item">
              <HammerSVGComponent />
              <div className="info">
                <span className="item-h-2">Commercial Roofing</span>
                <p>
                  Embarrassing hidden in the middle of all the lorem ipsum
                  generators on the internet repeat
                </p>
              </div>
            </div>

            <div className="item">
              <HammerSVGComponent />
              <div className="info">
                <span className="item-h-2">Commercial Roofing</span>
                <p>
                  Embarrassing hidden in the middle of all the lorem ipsum
                  generators on the internet repeat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container"></div>
    </section>
  );
}
