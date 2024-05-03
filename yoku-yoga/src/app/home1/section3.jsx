"use client";
import { useState } from "react";
import LeftArrowSvgComponent from "../icons/left";
import RightArrowSvgComponent from "../icons/right";
import CLASSES from "../constants/classes";

export default function HomeSection3() {
  const [number, setNumber] = useState(1);
  const updatePosition = (param = number) => {
    const items = document.getElementById("homepage-section3");
    const item = document.getElementById("homepage-section3-item");
    const margin = item.offsetWidth * param;
    items.style.marginLeft = `${-margin - 40}px`;
    clearActives();
    setActives(param);
  };

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

  function upOne() {
    if (number + 1 >= 6) {
      setNumber(0);
      updatePosition(0);
    } else {
      setNumber(number + 1);
      updatePosition(number + 1);
    }
  }

  function downOne() {
    if (number - 1 <= -1) {
      setNumber(5);
      updatePosition(5);
    } else {
      setNumber(number - 1);
      updatePosition(number - 1);
    }
  }

  function setActives(param) {
    const itemPairs = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 0,
    };
    const itemList = getItemList();
    // add active class 2 elements that should be full opac
    const img1 = itemList[param]
      .getElementsByClassName("img-container")[0]
      .getElementsByTagName("img")[0];
    const img2 = itemList[itemPairs[param]]
      .getElementsByClassName("img-container")[0]
      .getElementsByTagName("img")[0];

    img1.classList.add("active");
    img2.classList.add("active");
  }

  function getItemList() {
    const itemList = document
      .getElementById("classes")
      .getElementsByClassName("item");
    return itemList;
  }

  function clearActives() {
    const itemList = getItemList();
    for (let i = 0; i < itemList.length; i++) {
      const img = itemList[i]
        .getElementsByClassName("img-container")[0]
        .getElementsByTagName("img")[0];
      img.classList.remove("active");
    }
  }

  return (
    <section id="classes" className="slider-section">
      <div className="container">
        <div className="top">
          <h2 className="header">Popular Online Classes</h2>
          <p>
            A meditative means of discovering dysfunctional perception and
            cognition, as well as overcoming it to release any suffering, find
            inner peace and salvation.
          </p>
          <div className="arrows">
            <button onClick={downOne}>
              <LeftArrowSvgComponent />
            </button>
            <button onClick={upOne}>
              <RightArrowSvgComponent />
            </button>
          </div>
          <button className="btn-3">
            Browse All Classes <RightArrowSvgComponent />
          </button>
        </div>

        <div
          className="items"
          id="homepage-section3"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="item active" id="homepage-section3-item">
            <div className="img-container">
              <img src="home1/section3-1.jpg" alt="" />
              {/* <div className="content-items">
                <div className="content-item">
                  6 <img src="" alt="" />
                </div>
                <div className="content-item">
                  6 <img src="" alt="" />
                </div>
                <div className="content-item">
                  6 <img src="" alt="" />
                </div>
              </div> */}
            </div>
            <div className="item-info">
              <p className="instructor">With Jane Smith</p>
              <p className="class">Yoga for Beginners Course</p>
              <p className="price">$39</p>
            </div>
          </div>

          {CLASSES.map((item) => (
            <div className="item" key={item.title}>
              <div className="img-container">
                <img src={item.image} alt={item.title} />
                {/* <div className="content-items">
                  <div className="content-item">
                    6 <img src="" alt="" />
                  </div>
                  <div className="content-item">
                    6 <img src="" alt="" />
                  </div>
                  <div className="content-item">
                    6 <img src="" alt="" />
                  </div>
                </div> */}
              </div>
              <div className="item-info">
                <p className="instructor">With {item.teacher}</p>
                <p className="class">{item.title}</p>
                <p className="price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
