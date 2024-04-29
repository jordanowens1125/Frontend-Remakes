"use client";

import { LEFT, RIGHT } from "@/app/constants/icons";
import { useState } from "react";

export default function Slider({
  start = 0,
  sectionid,
  items = [],
  updatePostion,
  sectionHead,
  sectionText,
  buttonLinkText,
  ItemElement,
}) {
  const [number, setNumber] = useState(start);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) upOne();
    if (isRightSwipe) downOne();
  };

  function getItemList() {
    const itemList = document
      .getElementById(sectionid)
      .getElementsByClassName("item");
    return itemList;
  }

  function downOne() {}
  function upOne() {}

  const ReturnItem = (item) => {
    return <div>1</div>;
  };
  return (
    <section id={sectionid} className="slider-section">
      <div className="container">
        <div className="top">
          {sectionHead && <h2 className="heading">{sectionHead}</h2>}
          {sectionText && <p>{sectionText}</p>}

          <div className="arrows">
            <button onClick={downOne}>
              <img src={LEFT} alt="" />
            </button>
            <button onClick={upOne}>
              <img src={RIGHT} alt="" />
            </button>
          </div>
          {buttonLinkText && (
            <button>
              {buttonLinkText} <img src={RIGHT} alt="Arrow" />
            </button>
          )}
        </div>

        <div className="items">
          {items.map((item) => (
            <ReturnItem key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
