"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./nav.scss";
import CancelSvgComponent from "@/app/svgs/cancel";
import { LOGO } from "@/app/constants/sources";
import NavItems from "./navinfo";
import Call from "../combinations/call";
import SocialsGroup from "../groups/socials";

export default function Nav() {
  const clearState = {
    active: false,
    primary: false,
    secondary: false,
  };
  const [state, setState] = useState(clearState);

  const clearAll = () => {
    setState(clearState);
  };

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
          <div className="top">
            <Call />
            <Link className="logo" href="/">
              <img src={LOGO} alt="Logo" />
            </Link>
            <a href="/contact" className="btn-2 view-button">
              Schedule Today
            </a>
          </div>

          <div className="bottom">
            <div className="right">
              <div className={state.active ? "links active" : "links"}>
                <div onClick={() => setState(clearState)} className="back">
                  <CancelSvgComponent />
                </div>

                {NavItems.map((item) => (
                  <Link
                    href={item.href}
                    className={item.classList}
                    key={item.label}
                    onClick={clearAll}
                  >
                    {item.label}
                  </Link>
                ))}

                <img src={LOGO} alt="Logo" />
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

            <SocialsGroup iconClass="icon-3"/>
          </div>
        </div>
      </nav>
      {state.active && <div className="modal" onClick={clearAll}></div>}
    </>
  );
}
