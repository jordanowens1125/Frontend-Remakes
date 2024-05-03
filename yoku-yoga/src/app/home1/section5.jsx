"use client";
import { useState } from "react";
import LeftArrowSvgComponent from "../icons/left";
import RightArrowSvgComponent from "../icons/right";
import INSTRUCTORS from "../constants/instructors";
// import Slider from "../../slider/slider";
// import Section5ItemElement from "./section5-item";

export default function HomeSection5() {
  const [number, setNumber] = useState(0);
  const updatePosition = (param = number) => {
    const items = document.getElementById("homepage-section5");
    const item = document.getElementById("homepage-section5-item");
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

  const items = [
    { img: "", name: "Mildred Reed", classes: 2 },
    { img: "", name: "Jane Smith", classes: 2 },
    { img: "", name: "Madison Diaz", classes: 2 },
    { img: "", name: "Brenda Roberts", classes: 2 },
    { img: "", name: "Lori Mendoza", classes: 2 },
    { img: "", name: "Crystal Gibson", classes: 2 },
  ];
  const headerText = "Our Instructors";
  const sectionText =
    "A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release any suffering, find inner peace and salvation.";
  return (
    // <Slider sectionHead={headerText} sectionText={sectionText}
    //   items={items}
    //   ItemElement={<Section5ItemElement/>}
    // />
    <>
      <section id="instructors" className="slider-section">
        <div className="container">
          <div className="top">
            <h2 className="header">{headerText}</h2>
            <p>{sectionText}</p>
            <div className="arrows">
              <button onClick={downOne}>
                <LeftArrowSvgComponent />
              </button>
              <button onClick={upOne}>
                <RightArrowSvgComponent />
              </button>
            </div>
          </div>

          <div
            className="items"
            id="homepage-section5"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="item" id="homepage-section5-item">
              <div className="img-container">
                <img src="home1/section3-1.jpg" alt="" />
              </div>
              <div className="item-info">
                <p className="instructor">Mildred Reed</p>
                <p className="class">2 Classes</p>
              </div>
            </div>

            {INSTRUCTORS.map((item) => (
              <div className="item" key={item.name}>
                <div className="img-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <p className="instructor">{item.name}</p>
                  <p className="class">{item.courses} Classes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
