import CaledendarSvgComponent from "../icons/calendar";
import CarSvgComponent from "../icons/car";
import LocationSvgComponent from "../icons/location";
import "./book-car.scss";
export default function BookCarForm() {
  return (
    <section id="bookcarform">
      <div className="container">
        <form>
          <h2>Book a car</h2>
          <div className="error">
            <p>All fields required!</p>
          </div>
          <span className="type">
            <label htmlFor="type">
              <CarSvgComponent />
              Select Your Car Type
            </label>
            <select>
              <option value="" disabled defaultValue>
                Select your car type
              </option>
              <option value="2">Mercedes</option>
              <option value="3">Mercedes 35</option>
              <option value="4">VW PassatCC</option>
              <option value="5">BMW 320</option>
              <option value="6">Audi A1 S</option>
              <option value="7">Lexus CT</option>
              <option value="8">Toyota Camry</option>
            </select>
          </span>
          <span>
            <label htmlFor="pick-up">
              <LocationSvgComponent />
              Pick-up
            </label>
            <select>
              <option value="" disabled defaultValue>
                Select pick up location
              </option>
              <option value="1">Santa Monica - 2102 Lincoln Blvd</option>
              <option value="2">Los Angeles - 5711 W Century Blvd</option>
              <option value="3">Las Vegas - 6401 Centennial Blvd</option>
            </select>
          </span>
          <span>
            <label htmlFor="drop-off">
              <LocationSvgComponent />
              Drop Off
            </label>
            <select>
              <option value="" disabled defaultValue>
                Select drop off location
              </option>
              <option value="1">Santa Monica - 2102 Lincoln Blvd</option>
              <option value="2">Los Angeles - 5711 W Century Blvd</option>
              <option value="3">Las Vegas - 6401 Centennial Blvd</option>
            </select>
          </span>
          <span>
            <label htmlFor="pick-up-date">
              {" "}
              <CaledendarSvgComponent />
              Pick-up
            </label>
            <input type="date" />
          </span>
          <span>
            <select>
              <option value="" disabled defaultValue>
                Select your car type
              </option>
              <option value="2">Mercedes</option>
              <option value="3">Mercedes 35</option>
              <option value="4">VW PassatCC</option>
              <option value="5">BMW 320</option>
              <option value="6">Audi A1 S</option>
              <option value="7">Lexus CT</option>
              <option value="8">Toyota Camry</option>
            </select>
          </span>
          <span>
            <label htmlFor="drop-off-date">
              <CaledendarSvgComponent />
              Drop Off
            </label>
            <input type="date" />
          </span>
          <span>
            <select>
              <option value="" disabled defaultValue>
                Select your car type
              </option>
              <option value="2">Mercedes</option>
              <option value="3">Mercedes 35</option>
              <option value="4">VW PassatCC</option>
              <option value="5">BMW 320</option>
              <option value="6">Audi A1 S</option>
              <option value="7">Lexus CT</option>
              <option value="8">Toyota Camry</option>
            </select>
          </span>
          <span className="submit">
            <button type="submit">Search</button>
          </span>
        </form>
      </div>
    </section>
  );
}
