"use client";
import UpArrowSvgComponent from "../icons/up-arrow";
import "./to-top.scss";

import { useEffect } from "react";
export default function ToTop() {
  useEffect(() => {
    const headerObserver = new IntersectionObserver(updateToTop, {
      root: null,
      threshold: 0,
      rootMargin: `150px`,
    });
    function updateToTop(entries) {
      const [entry] = entries;

      const ToTop = document.getElementById("to-top");
      if (!entry.isIntersecting) {
        ToTop.classList.add("show");
      } else {
        ToTop.classList.remove("show");
      }
    }
    headerObserver.observe(document.getElementById("nav"));
  }, []);
  return (
    <div>
      <a
        href="#nav"
        id="to-top"
        onDragStart={() => {
          return false;
        }}
        onDrop={() => {
          return false;
        }}
      >
        <UpArrowSvgComponent />
      </a>
    </div>
  );
}
