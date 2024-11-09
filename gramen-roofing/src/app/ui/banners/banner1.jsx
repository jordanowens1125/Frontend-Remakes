import Header1White from "../headings/header1-white";
import "./banner1.scss";

export default function Banner1() {
  return (
    <section className="banner1">
      <div className="img-container">
        
      </div>
      <div className="container">
        <Header1White header={"Need Any Roofing Help?"} />
        <div className="group">
          <input type="text" placeholder="Name:" />
          <input type="text" placeholder="Email:" />
          <button className="btn-1">Submit Request</button>
        </div>
      </div>
    </section>
  );
}
