import FloatingRightSBS from "../ui/sbs/floating-right-img";
import { LESSON } from "../constants/icons";

export default function HomeSection10() {
  return (
    <>
      <FloatingRightSBS
        sectionID={"articles"}
        Left={
          <>
            <h3 className="header">Inspired Articles</h3>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus natus rerum labore sequi in quis pariatur dolor,
              laudantium aperiam beatae esse vel modi magnam temporibus
              distinctio eveniet quo dolores.
            </p>
            <div className="items">
              <p className="item">
                <img src={LESSON} alt="" /> Meditation
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Yoga Therapy
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Anatomy
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Pranayama
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Yoga Poses
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Remedies
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Yin Poses
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Seasonal Tips
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Styles
              </p>
              <p className="item">
                <img src={LESSON} alt="" /> Recipes
              </p>
            </div>
          </>
        }
        Rightimg={<img src="about1/section-1.png" alt="" />}
        sectionID={"articles"}
      />
    </>
  );
}
