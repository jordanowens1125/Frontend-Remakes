import PointOnMapSvgComponent from "@/app/icons/pointonmap";
import Form2 from "../form/form2";
import Header1 from "../headings/header1";
import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact container">
      <div className="container contact-group">
        <div className="group ">
          <a className="item">
            <PointOnMapSvgComponent />
            <p className="text">Location</p>
            <span className="item-h-4">4140 Parker. USA</span>
          </a>
          <a className="item">
            <PointOnMapSvgComponent />
            <p className="text">Call 24/7</p>
            <span className="item-h-4">4140 Parker. USA</span>
          </a>
          <a className="item">
            <PointOnMapSvgComponent />
            <p className="text">Location</p>
            <span className="item-h-4">4140 Parker. USA</span>
          </a>
        </div>
      </div>
      <div className="container">
        <Header1 span={"Let's Talk"} header={"Let's Get In Touch"} />
        <Form2 />
      </div>
    </section>
  );
}
