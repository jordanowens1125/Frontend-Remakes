import CarSvgComponent from "../icons/car";
import CheckSvgComponent from "../icons/check";
import EngineSvgComponent from "../icons/engine";
import LuggageSvgComponent from "../icons/luggage";
import SeatSvgComponent from "../icons/seat";
import "./cars.scss";
import Stars from "./stars";
export default function Cars() {
  return (
    <section id="cars">
      <div className="container">
        <div className="items">
          <div className="item">
            <img src="car1.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>

          <div className="item">
            <img src="car2.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>

          <div className="item">
            <img src="car3.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>

          <div className="item">
            <img src="car4.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>

          <div className="item">
            <img src="car5.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>

          <div className="item">
            <img src="car6.jpg" alt="" />
            <div className="info">
              <p className="item-h">Audi A3</p>
              <p className="price">
                <span>$</span>75
              </p>
              <span className="stars">
                <Stars />
              </span>
              <p className="per">per day</p>
              <div className="details">
                <p className="detail">
                  <CarSvgComponent /> Sedan
                </p>
                <p className="detail">
                  <LuggageSvgComponent /> 2 Luggage
                </p>
                <p className="detail">
                  <SeatSvgComponent /> 5 seats
                </p>
                <p className="detail">
                  <EngineSvgComponent /> Diesel
                </p>
              </div>

              <a href="/#bookcarform" className="btn-1">
                Book Ride <CheckSvgComponent />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
