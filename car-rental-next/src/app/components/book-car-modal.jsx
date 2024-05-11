"use client";

import CaledendarSvgComponent from "../icons/calendar";
import CancelSvgComponent from "../icons/cancel";
import LocationSvgComponent from "../icons/location";
import "./book-car-modal.scss";
export default function BookCarModal({ details, close, success }) {
  const submit = (e) => {
    e.preventDefault();
    success();
  };
  function toStandardTime(militaryTime) {
    militaryTime = militaryTime.split(":");
    return militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2
      ? militaryTime[0] -
          12 +
          ":" +
          militaryTime[1] +
          ":" +
          militaryTime[2] +
          " P.M."
      : militaryTime.join(":") + " A.M.";
  }
  return (
    <div id="modal">
      <div className="container">
        <div className="reservation">
          <div className="top part">
            <p>Complete Reservation</p>
            <div className="close" onClick={close}>
              <CancelSvgComponent />
            </div>
          </div>

          <div className="notification part">
            <p className="header">
              Upon completing this reservation enquiry, you will receive:
            </p>
            <p className="text">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          <div className="sbs part">
            <div className="left">
              <div className="header">Location & Date</div>
              <div className="items">
                <div className="item">
                  <LocationSvgComponent />
                  <p className="item-h">Pick-Up Time</p>
                  <p>
                    {details.pickupd} {toStandardTime(details.pickupt)}
                  </p>
                </div>
                <div className="item">
                  {" "}
                  <LocationSvgComponent />
                  <p className="item-h">Drop-Off Time</p>
                  <p>
                    {details.dropoffd} {toStandardTime(details.dropofft)}
                  </p>
                </div>
                <div className="item">
                  <CaledendarSvgComponent />
                  <p className="item-h">Pick-Up Location</p>
                  <p>{details.pickupl}</p>
                </div>
                <div className="item">
                  <CaledendarSvgComponent />
                  <p className="item-h">Drop-Off Location</p>
                  <p>{details.dropdownl}</p>
                </div>
              </div>
            </div>
            <div className="right">
              {" "}
              <p className="header"> Vehicle - {details.car.name}</p>
              <img src={details.car.img} alt="" />
            </div>
          </div>

          <form className="part" onSubmit={submit}>
            <p className="header">Personal Information</p>
            <span>
              <label htmlFor="first">First Name:</label>
              <input type="text" placeholder="Enter your first name" required />
            </span>
            <span>
              <label htmlFor="last">Last Name:</label>
              <input type="text" placeholder="Enter your last name" required />
            </span>
            <span>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                required
              />
            </span>
            <span>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                placeholder="Enter your age"
                min={18}
                required
              />
            </span>
            <span className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Enter your email adress"
                required
              />
            </span>
            <span className="address">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder="Enter your street address"
                required
              />
            </span>
            <span>
              <label htmlFor="city">City:</label>
              <input type="text" placeholder="Enter your city" required />
            </span>
            <span>
              <label htmlFor="zip">Zip Code:</label>
              <input type="text" placeholder="Enter your zip code" required />
            </span>

            <button className="btn-1" type="submit">
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
