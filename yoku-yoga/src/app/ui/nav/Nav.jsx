"use client";

import { ACCOUNT, CANCEL, DARKLOGO } from "@/app/constants/icons";
import "./nav.scss";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const [home, setHome] = useState(false);
  const clearState = {
    active: false,
    primary: false,
    secondary: false,
  };
  const [state, setState] = useState(clearState);
  const clearPrimary = () => {
    setState({ ...state, primary: false, secondary: false });
  };

  const clearSecondary = () => {
    setState({ ...state, secondary: false });
  };

  const setPrimary = (primary) => {
    setState({ ...state, primary: primary, secondary: false });
  };

  const setSecondary = (secondary) => {
    setState({ ...state, secondary: secondary });
  };

  const [
    HOME,
    CLASSES,
    ABOUT,
    PAGES,
    CLASSLIST,
    CONTACT,
    TEAM,
    TEAMLIST,
    CONTACTLIST,
  ] = [
    "HOME",
    "CLASSES",
    "ABOUT",
    "PAGES",
    "CLASSLIST",
    "CONTACT",
    "TEAM",
    "TEAMLIST",
    "CONTACTLIST",
  ];
  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src={DARKLOGO} alt="" />
          </a>
          <div className="right">
            <div>
              <div className={state.active ? "links active" : "links"}>
                <img
                  src={CANCEL}
                  alt=""
                  className="cancel"
                  onClick={() => setState(clearState)}
                />
                <div className="a">
                  <span onClick={() => setState({ ...state, primary: HOME })}>
                    Home
                  </span>
                  <div
                    className={
                      state.primary == HOME ? "dropdown active" : "dropdown"
                    }
                  >
                    <div className="b">
                      <img
                        src={CANCEL}
                        alt=""
                        className="back"
                        onClick={clearPrimary}
                      />
                      <a href="/">Home - Online Classes</a>
                      <a href="/">Home - Yoga Studio</a>
                      <a href="/">Home - Shop</a>
                    </div>
                  </div>
                </div>

                <div className="a">
                  <span onClick={() => setPrimary(ABOUT)}>About Us</span>
                  <div
                    className={
                      state.primary == ABOUT ? "dropdown active" : "dropdown"
                    }
                  >
                    <div className="b">
                      <img
                        src={CANCEL}
                        alt=""
                        className="back"
                        onClick={clearPrimary}
                      />
                      <a href="/">About 1</a>
                      <a href="/">About 2</a>
                      <a href="/">Our Instructors 1</a>
                      <a href="/">Our Instructors 2</a>
                      <a href="/">Timetable</a>
                      <a href="/">FAQ</a>
                    </div>
                  </div>
                </div>

                <div className="a">
                  <span onClick={() => setPrimary(CLASSES)}>Classes</span>
                  <div
                    className={
                      state.primary == CLASSES ? "dropdown active" : "dropdown"
                    }
                  >
                    <div className="b">
                      <img
                        src={CANCEL}
                        alt=""
                        className="back"
                        onClick={clearPrimary}
                      />
                      <span
                        className="c"
                        onClick={() => setSecondary(CLASSLIST)}
                      >
                        Online Classes
                      </span>
                      <div
                        className={
                          state.secondary == CLASSLIST
                            ? "dropdown active"
                            : "dropdown"
                        }
                      >
                        <div className="b">
                          <img
                            src={CANCEL}
                            alt=""
                            className="back"
                            onClick={clearSecondary}
                          />
                          <a href="/">Course List 1</a>
                          <a href="/">Course List 2</a>
                          <a href="/">Course List 3</a>
                          <a href="/">Course List 4</a>
                          <a href="/">Course List 5</a>
                        </div>
                      </div>
                      <a href="/">Offline Classes</a>
                    </div>
                  </div>
                </div>

                <div className="a">
                  <span onClick={() => setPrimary(PAGES)}>Pages</span>
                  <div
                    className={
                      state.primary == PAGES ? "dropdown active" : "dropdown"
                    }
                  >
                    <div className="b">
                      <img
                        src={CANCEL}
                        alt=""
                        className="back"
                        onClick={clearPrimary}
                      />
                      <span className="c" onClick={() => setSecondary(TEAM)}>
                        Team
                      </span>
                      <div
                        className={
                          state.secondary == TEAM
                            ? "dropdown active"
                            : "dropdown"
                        }
                      >
                        <div className="b">
                          <img
                            src={CANCEL}
                            alt=""
                            className="back"
                            onClick={clearSecondary}
                          />
                          <a href="/">Team 1</a>
                          <a href="/">Team 2</a>
                          <a href="/">Team 3</a>
                        </div>
                      </div>
                      <span className="c" onClick={() => setSecondary(CONTACT)}>
                        Contact
                      </span>
                      <div
                        className={
                          state.secondary == CONTACT
                            ? "dropdown active"
                            : "dropdown"
                        }
                      >
                        <div className="b">
                          <img
                            src={CANCEL}
                            alt=""
                            className="back"
                            onClick={clearSecondary}
                          />
                          <a href="/">Contact 1</a>
                          <a href="/">Contact 2</a>
                          <a href="/">Contact 3</a>
                        </div>
                      </div>
                      <a href="/">Price Table</a>
                      <a href="/">Gallery</a>
                      <a href="/">Maintenance</a>
                      <a href="/">Coming Soon</a>
                      <a href="/">404 Page</a>
                    </div>
                  </div>
                </div>

                <button className="view-button">View classes</button>
              </div>
            </div>
            <div
              className="lines"
              onClick={() => setState({ ...clearState, active: true })}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <img src={ACCOUNT} alt="" className="account" />
          </div>
        </div>
      </nav>
      <div className="modal"></div>
    </>
  );
}
