import HammerSVGComponent from "@/app/icons/hammer";
import Header1 from "../headings/header1";
import Header1Aligned from "../headings/header1-aligned";
import "./process.scss";

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        {/* <h3 className="sub-h">Trust the Process</h3>
        <h2 className="heading">Our Workflow</h2> */}
        <Header1Aligned
          span={"Working Process"}
          header={"Standard Work Process"}
        />
        <div className="group">
          <div className="item">
            <div className="img-container">
              <HammerSVGComponent/>
              <div className="count">1</div>
            </div>
            <p className="item-h-1">Roof Planning</p>
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents dolor sit amet, consectetur
            </p>
          </div>

          <div className="item">
            <div className="img-container">
              <HammerSVGComponent/>
              <div className="count">2</div>
            </div>
            <p className="item-h-1">Roof Installation</p>
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents dolor sit amet, consectetur
            </p>
          </div>

          <div className="item">
            <div className="img-container">
              <HammerSVGComponent/>
              <div className="count">3</div>
            </div>
            <p className="item-h-1">Finished Roof</p>
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
