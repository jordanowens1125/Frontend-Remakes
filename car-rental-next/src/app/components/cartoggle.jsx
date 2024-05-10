import "./cartoggle.scss";
import SectionHeader1 from "./sectionheader1";
export default function CarToggle() {
  return (
    <section id="cartoggle">
      <SectionHeader1
        header={"Our rental fleet"}
        subheader={"Vehicle Models"}
        text={
          "Choose from a variety of our amazing vehicles to rent for your next adventure or business trip."
        }
      />
      <div className="container">
        <input type="radio" name="vehicle" id="radio1" defaultChecked />
        <input type="radio" name="vehicle" id="radio2" />
        <input type="radio" name="vehicle" id="radio3" />
        <input type="radio" name="vehicle" id="radio4" />
        <input type="radio" name="vehicle" id="radio5" />
        <input type="radio" name="vehicle" id="radio6" />
        <div className="tabs">
          <label htmlFor="radio1">Audi A1 S-Line</label>
          <label htmlFor="radio2">VW Golf 6</label>
          <label htmlFor="radio3">Toyota Camry</label>
          <label htmlFor="radio4">BMW 320 ModernLine</label>
          <label htmlFor="radio5">Mercedes-Benx GLK</label>
          <label htmlFor="radio6">VW Passat CC</label>
        </div>
        <div className="img-container">
          <img src="ct1.jpg" alt="" />
          <img src="ct2.jpg" alt="" />
          <img src="ct3.jpg" alt="" />
          <img src="ct4.jpg" alt="" />
          <img src="ct5.jpg" alt="" />
          <img src="ct6.jpg" alt="" />
        </div>

        <div className="items">
          <div className="item">
            <span>
              {" "}
              <b>$45</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>Audi</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>A1</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2012</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Transmission</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Gasoline</p>
            </div>
          </div>

          <div className="item">
            <span>
              {" "}
              <b>$30</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>Camry</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>Toyota</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2006</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Automatic</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Hybrid</p>
            </div>
          </div>

          <div className="item">
            <span>
              {" "}
              <b>$35</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>BMW</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>A1</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2012</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Transmission</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Diesel</p>
            </div>
          </div>

          <div className="item">
            <span>
              {" "}
              <b>$25</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>Audi</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>A1</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2012</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Transmission</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Gasoline</p>
            </div>
          </div>

          <div className="item">
            <span>
              {" "}
              <b>$50</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>Benz GLK</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>Mercedes</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2012</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Transmission</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Diesel</p>
            </div>
          </div>

          <div className="item">
            <span>
              {" "}
              <b>$25</b> / rent per day{" "}
            </span>
            <div className="row">
              <p>Model</p>
              <p>Pasat CC</p>
            </div>
            <div className="row">
              <p>Mark</p>
              <p>Volksawagen</p>
            </div>
            <div className="row">
              <p>Year</p>
              <p>2012</p>
            </div>
            <div className="row">
              <p>Doors</p>
              <p>4/5</p>
            </div>
            <div className="row">
              <p>AC</p>
              <p>Yes</p>
            </div>
            <div className="row">
              <p>Transmission</p>
              <p>Manual</p>
            </div>
            <div className="row">
              <p>Fuel</p>
              <p>Gasoline</p>
            </div>
          </div>

          <button>Reserve Now</button>
        </div>
      </div>
    </section>
  );
}
