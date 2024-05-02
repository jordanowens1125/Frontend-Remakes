"use client";

import { ACCOUNT, CANCEL, DARKLOGO } from "@/app/constants/icons";
import "./nav.scss";
import { useState } from "react";

export default function Nav() {
  const [showBG, setShowBG] = useState(false);

  const clearState = {
    active: false,
    primary: false,
    secondary: false,
  };
  const [state, setState] = useState(clearState);
  const clearPrimary = () => {
    if (window.innerWidth < 1000) {
      setState({ ...state, primary: false, secondary: false });
    }
  };

  const clearAll = () => {
    setState(clearState);
  };

  const clearSecondary = (e) => {
    if (window.innerWidth < 1000) {
      setState({ ...state, secondary: false });
    }
  };

  const setPrimary = (primary) => {
    if (window.innerWidth < 1000) {
      setState({ ...state, primary: primary, secondary: false });
    }
  };

  const setSecondary = (e, secondary) => {
    if (!e.target.classList.contains("back")) {
      if (window.innerWidth < 1000) {
        setState({ ...state, secondary: secondary });
      }
    }
  };

  const [HOME, CLASSES, ABOUT, PAGES, CLASSLIST, CONTACT] = [
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

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const st = window.scrollY || document.body.scrollTop;
    if (st > lastScrollTop) {
      // console.log("down");
      if (st > 200) {
        setShowBG(true);
      }
    } else if (st < lastScrollTop) {
      // console.log("up");
      if (st < 200) {
        setShowBG(false);
      }
    }
    lastScrollTop = st;
  });

  return (
    <>
      <nav className={showBG ? "show-bg" : ""}>
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
                      <a href="/about1">About 1</a>
                      <a href="/about2">About 2</a>
                      <a href="/instructor1">Our Instructors 1</a>
                      <a href="/instructor2">Our Instructors 2</a>
                      <a href="/timetable">Timetable</a>
                      <a href="/faq">FAQ</a>
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
                        onClick={(e) => setSecondary(e, CLASSLIST)}
                      >
                        Online Classes
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
                            <a href="/courselist1">Course List 1</a>
                            <a href="/courselist2">Course List 2</a>
                            <a href="/courselist3">Course List 3</a>
                          </div>
                        </div>
                      </span>

                      <a href="/courselist4">Offline Classes</a>
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

                      <span
                        className="c"
                        onClick={(e) => setSecondary(e, CONTACT)}
                      >
                        Contact
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
                            <a href="/contact1">Contact 1</a>
                            <a href="/contact2">Contact 2</a>
                            <a href="/contact3">Contact 3</a>
                          </div>
                        </div>
                      </span>
                      <a href="/404">404 Page</a>
                    </div>
                  </div>
                </div>

                <a className="view-button btn-3" href="/courselist1">
                  View classes
                </a>
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
      {state.active && <div className="modal" onClick={clearAll}></div>}
    </>
  );
}
