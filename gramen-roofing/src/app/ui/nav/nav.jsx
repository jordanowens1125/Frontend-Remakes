"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./nav.scss";
import CancelSvgComponent from "@/app/icons/cancel";
import AccountSVGComponent from "@/app/icons/account";

export default function Nav() {
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

  const LOGO = "../../../../public/logo.png";

  useEffect(() => {
    const headerObserver = new IntersectionObserver(updateNav, {
      root: null,
      threshold: 0,
      rootMargin: `50px`,
    });
    function updateNav(entries) {
      const [entry] = entries;
      const Nav = document.getElementById("nav");
      if (!entry.isIntersecting) {
        Nav.classList.add("show-bg");
      } else {
        Nav.classList.remove("show-bg");
      }
    }
    headerObserver.observe(document.getElementById("top"));
  }, []);

  return (
    <>
      <nav id="nav">
        <div className="container">
          {/* <a href="/" className="logo">
            <img src={DARKLOGO} alt="" />
          </a> */}
          <div className="logo">
            <img src={LOGO} alt="Logo" />
          </div>
          <div className="right">
            <div>
              <div className={state.active ? "links active" : "links"}>
                <div onClick={() => setState(clearState)} className="back">
                  <img src={LOGO} alt="Logo" />
                  <CancelSvgComponent />
                </div>
                <Link href={"/"} className="a">
                  Home
                </Link>

                <a href="/about" className="a">
                  About Us
                </a>

                <a href="/services" className="a">
                  Services
                </a>

                <a href="/projects" className="a">
                  Projects
                </a>

                <a href="/faqs" className="a">
                  FAQS
                </a>

                <a href="/contact" className="a">
                  Contact
                </a>

                <a className="view-button btn-1" href="/contact">
                  Get A Quote
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
          </div>
        </div>
      </nav>
      {state.active && <div className="modal" onClick={clearAll}></div>}
    </>
  );
}
