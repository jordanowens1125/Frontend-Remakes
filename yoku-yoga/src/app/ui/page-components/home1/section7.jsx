import { LESSON } from "@/app/constants/icons";

export default function HomeSection7() {
  return (
    <section id="articles">
      <div className="container">
        <div className="sbs">
          <div className="left">
            <h3 className="heading">Inspired Articles</h3>
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
          </div>
          <div className="right">
            <img
              src="about-1/section-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
