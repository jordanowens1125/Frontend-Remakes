"use client";

import { useState } from "react";
import CaledendarSvgComponent from "../icons/calendar";
import CarSvgComponent from "../icons/car";
import LocationSvgComponent from "../icons/location";
import BookCarModal from "./book-car-modal";
import "./book-car.scss";
import CancelSvgComponent from "../icons/cancel";
export default function BookCarForm() {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const cars = [
    {
      name: "Audi A1 S-Line",
      img: "ct1.jpg",
    },
    {
      name: "VW Golf 6",
      img: "ct2.jpg",
    },
    {
      name: "Toyota Camry",
      img: "ct3.jpg",
    },
    {
      name: "BMW 320 ModernLine",
      img: "ct4.jpg",
    },
    {
      name: "Mercede Benz GLK",
      img: "ct5.jpg",
    },
    {
      name: "VW Passat CC",
      img: "ct6.jpg",
    },
  ];
  const [details, setDetails] = useState({
    pickupd: null,
    pickupl: "Santa Monica - 2102 Lincoln Blvd",
    pickupt: null,
    dropoffd: null,
    dropoffl: "Santa Monica - 2102 Lincoln Blvd",
    dropofft: null,
    car: cars[0],
  });

  const updateDetails = (e) => {
    if (e.target.id === "car") {
      setDetails({ ...details, car: cars[e.target.value] });
    } else {
      const copy = { ...details };
      copy[e.target.id] = e.target.value;
      setDetails({ ...copy });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstForm = document.getElementById("book-car-form");
    const inputs = firstForm.querySelectorAll("select,input");
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        valid = false;
      }
    }
    if (valid) {
      setActive(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  const close = () => {
    setActive(false);
    setError(false);
  };

  const finalSuccess = () => {
    close();
    setSuccess(true);
  };

  return (
    <section id="bookcarform">
      <div className="container">
        <form onSubmit={handleSubmit} id="book-car-form">
          <h2>Book a car</h2>
          {error && (
            <div className="error">
              <p>All fields required!</p>
              <div className="cancel" onClick={() => setError(null)}>
                <CancelSvgComponent />
              </div>
            </div>
          )}

          {success && (
            <div className="success">
              <p>Check your email to confirm an order.</p>
              <div className="cancel" onClick={() => setSuccess(null)}>
                <CancelSvgComponent />
              </div>
            </div>
          )}

          <span className="type">
            <label htmlFor="type">
              <CarSvgComponent />
              Select Your Car Type
            </label>
            <select id="car" onChange={updateDetails}>
              <option value="" disabled defaultValue>
                Select your car type
              </option>
              <option value="0">Audi A1 S-Line</option>
              <option value="1">VW Golf 6</option>
              <option value="2">Toyota Camry</option>
              <option value="3">BMW 320 ModernLine</option>
              <option value="4">Mercede Benz GLK</option>
              <option value="5">VW Passat CC</option>
            </select>
          </span>
          <span>
            <label htmlFor="pick-up">
              <LocationSvgComponent />
              Pick-up
            </label>
            <select required id="pickupl" onChange={updateDetails}>
              <option value="" disabled defaultValue>
                Select pick up location
              </option>
              <option value="Santa Monica - 2102 Lincoln Blvd">
                Santa Monica - 2102 Lincoln Blvd
              </option>
              <option value="Los Angeles - 5711 W Century Blvd">
                Los Angeles - 5711 W Century Blvd
              </option>
              <option value="Las Vegas - 6401 Centennial Blvd">
                Las Vegas - 6401 Centennial Blvd
              </option>
            </select>
          </span>
          <span>
            <label htmlFor="drop-off">
              <LocationSvgComponent />
              Drop Off
            </label>
            <select required id="dropoffl" onChange={updateDetails}>
              <option value="" disabled defaultValue>
                Select drop off location
              </option>
              <option value="Santa Monica - 2102 Lincoln Blvd">
                Santa Monica - 2102 Lincoln Blvd
              </option>
              <option value="Los Angeles - 5711 W Century Blvd">
                Los Angeles - 5711 W Century Blvd
              </option>
              <option value="Las Vegas - 6401 Centennial Blvd">
                Las Vegas - 6401 Centennial Blvd
              </option>
            </select>
          </span>
          <span>
            <label htmlFor="pick-up-date">
              {" "}
              <CaledendarSvgComponent />
              Pick-up
            </label>
            <input type="date" id="pickupd" onChange={updateDetails} />
          </span>
          <span>
            <input type="time" id="pickupt" onChange={updateDetails} />
          </span>
          <span>
            <label htmlFor="drop-off-date">
              <CaledendarSvgComponent />
              Drop Off
            </label>
            <input type="date" id="dropoffd" onChange={updateDetails} />
          </span>
          <span>
            <input type="time" id="dropofft" onChange={updateDetails} />
          </span>
          <span className="submit">
            <button type="submit">Search</button>
          </span>
        </form>
      </div>
      {active && (
        <BookCarModal details={details} close={close} success={finalSuccess} />
      )}
    </section>
  );
}
