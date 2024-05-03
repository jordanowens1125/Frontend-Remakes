"use client";

import { DARKLOGO } from "@/app/constants/icons";
import "./nav.scss";
import { useState } from "react";
import AccountSVGComponent from "@/app/icons/account";
import { WHITE } from "@/app/constants/colors";
import CancelSvgComponent from "@/app/icons/cancel";

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
      e.target.parentNode.parentNode.parentNode.classList.remove("active");
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
    handleScroll();
  });

  const handleScroll = debounce(() => {
    const st = window.scrollY || document.body.scrollTop;
    if (st > lastScrollTop) {
      // console.log("down");
      if (st > 100) {
        setShowBG(true);
      }
    } else if (st < lastScrollTop) {
      // console.log("up");
      if (st < 100) {
        setShowBG(false);
      }
    }
    lastScrollTop = st;
  }, 500);

  function debounce(func, wait, immediate) {
    let timeout = null;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

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
                <div onClick={() => setState(clearState)} className="back">
                  <CancelSvgComponent />
                </div>

                <a href="/" className="a">
                  Home
                </a>
                {/* <div className="a">
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
                </div> */}

                <div className="a">
                  <span onClick={() => setPrimary(ABOUT)}>About Us</span>
                  <div
                    className={
                      state.primary == ABOUT ? "dropdown active" : "dropdown"
                    }
                  >
                    <div className="b">
                      <div className="back" onClick={clearPrimary}>
                        <CancelSvgComponent />
                      </div>

                      <a href="/about1">About 1</a>
                      <a href="/about2">About 2</a>
                      <a href="/instructor1">Our Instructors 1</a>
                      <a href="/instructor2">Our Instructors 2</a>
                      {/* <a href="/timetable">Timetable</a> */}
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
                      <div onClick={clearPrimary}>
                        <CancelSvgComponent />
                      </div>

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
                            <div onClick={(e) => clearSecondary(e)}>
                              <CancelSvgComponent />
                            </div>

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
                      <div onClick={clearPrimary}>
                        <CancelSvgComponent />
                      </div>

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
                            <div onClick={(e) => clearSecondary(e)}>
                              <CancelSvgComponent />
                            </div>

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
            <a href="/" className="account">
              <AccountSVGComponent stroke={WHITE} />
            </a>
          </div>
        </div>
      </nav>
      {state.active && <div className="modal" onClick={clearAll}></div>}
    </>
  );
}
