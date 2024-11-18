import HammerSVGComponent from "@/app/svgs/hammer";
import "./process.scss";

export default function ProcessGroup() {
  return (
    <div className="group">
      <div className="item">
        <div className="img-container">
          <HammerSVGComponent />
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
          <HammerSVGComponent />
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
          <HammerSVGComponent />
          <div className="count">3</div>
        </div>
        <p className="item-h-1">Finished Roof</p>
        <p>
          In a free hour, when our power of choice is untrammelled and when
          nothing prevents dolor sit amet, consectetur
        </p>
      </div>
    </div>
  );
}
