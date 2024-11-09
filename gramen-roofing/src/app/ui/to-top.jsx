"use client";
import UpSvgComponent from "../icons/up";
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
    headerObserver.observe(document.getElementById("top"));
  }, []);
  return (
    <a
      href="#top"
      id="to-top"
      onDragStart={() => {
        return false;
      }}
      onDrop={() => {
        return false;
      }}
    >
      <UpSvgComponent />
    </a>
  );
}
