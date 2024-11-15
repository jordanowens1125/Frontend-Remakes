import Call from "../combinations/call";
import SendEmail from "../combinations/email";
import TopTriangleElement from "../img-containers/toptriangle";
import "./banner1.scss";

export default function Banner1() {
  return (
    <section className="banner1">
      <TopTriangleElement/>
      <div className="img-container"></div>
      <div className="container">
        <div className="left">
          <p className="banner-h-1">
            We can save you money on your next roofing project.
          </p>
          <p className="text">
            Let us help you! We are experts at roofing services, and we offer a
            full range of repair and upkeep services.
          </p>
        </div>
        <div className="right">
          <button className="btn-3">Submit Request</button>
          <div className="row">
            <Call />
            <SendEmail />
          </div>
        </div>
      </div>
    </section>
  );
}
