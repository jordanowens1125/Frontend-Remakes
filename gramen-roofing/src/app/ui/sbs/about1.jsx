import PhoneSvgComponent from "@/app/icons/phone";
import Features from "../groups/features1";
import Header1 from "../headings/header1";
import "./about1.scss";

export default function About1() {
  return (
    <section className="about-1">
      <div className="sbs container">
        <div className="container img-container">
          <img
            src="https://images.unsplash.com/photo-1726610930930-0e1af5f2d038?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
            className="img-1"
          />
          <img
            src="https://gramentheme.com/html/gramen/assets/imgs/about/about-4.jpg"
            alt=""
            className="img-2"
          />
          <div className="banner">
            
          </div>
        </div>
        <div className="container ">
          <Header1
            span={"About Us"}
            header={"Devoted to Delivering Top Notch Roofing Solutions"}
            text={
              "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters."
            }
          />
          <Features />
          <div className="group phone-group">
            <a href="/about" className="btn-1">
              About Us
            </a>
            <a href="" className="phone">
              <PhoneSvgComponent />
              <p>Call Us Now</p>
              <span>+208-555-0112</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
