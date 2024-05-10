"use client";
import { useState } from "react";
import CancelSvgComponent from "../icons/cancel";
import SandwichSvgComponent from "../icons/sandwich";
import "./nav.scss";
export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <section id="nav">
      <div className="container">
        <a href="/">
          <img src="logo.png" alt="Logo" />
        </a>

        <div className={show ? "links show" : "links"}>
          <div className="close" onClick={() => setShow(false)}>
            <CancelSvgComponent />
          </div>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/models">Models</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/team">Our Team</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="dropdown" onClick={() => setShow(true)}>
          <SandwichSvgComponent />
        </div>
        <div className="auth">
          <a href="/" className="btn-3">Sign In</a>
          <a href="/" className="btn-1">Register</a>
        </div>
      </div>
    </section>
  );
}
