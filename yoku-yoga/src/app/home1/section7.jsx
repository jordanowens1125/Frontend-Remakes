import LessonSvgComponent from "../icons/lesson";
import FloatingRightSBS from "../ui/sbs/floating-right-img";
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
                <LessonSvgComponent fill="transparent" />
                Meditation
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Yoga Therapy
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Anatomy
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Pranayama
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Yoga Poses
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Remedies
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Yin Poses
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Seasonal Tips
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Styles
              </p>
              <p className="item">
                <LessonSvgComponent fill="transparent" />
                Recipes
              </p>
            </div>
          </>
        }
        Rightimg={<img src="about1/section-1.png" alt="" />}
      />
    </>
  );
}
