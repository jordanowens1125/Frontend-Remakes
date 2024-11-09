import Features2 from "../groups/features2";
import Services2 from "../groups/services2";
import Services3 from "../groups/services3";
import Header1 from "../headings/header1";
import "./about2.scss";

export default function About2() {
  return (
    <section className="about2">
      <div className="container">
        <div className="img-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <Header1
          span={"About Us"}
          header={"Devoted to Delivering Top Notch Roofing Solutions"}
          text={
            "It is a long established fact that a reader will be distracted by the readable content of a page whwne looking at the layout in which is why one uses lorem ipsum as it has a less normal distribution of letters."
          }
        />

        <Services3 />
      </div>
    </section>
  );
}
