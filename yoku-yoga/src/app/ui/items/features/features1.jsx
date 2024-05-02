import "./features1.scss";

export default function Features1({
  sectionID,
  classList,
  items = [
    {
      image: "home1/feature1.png",
      title: "Many Styles",
      info: "20+ styles of Yoga Workout and Mediation that suit everyone",
    },
    {
      image: "home1/feature2.png",
      title: "Pro Instructors",
      info: "Professional Yoga Instructors from around the world",
    },
    {
      image: "home1/feature3.png",
      title: "Quality Content",
      info: "All Our Classes are Well Planned by Professional Yoga Instructors",
    },
  ],
}) {
  return (
    <section id={sectionID} className={classList}>
      <div className="container">
        <div className="items features1">
          {items.map((item) => (
            <div className="item">
              <img src={item.image} alt="Feature 1" />
              <p className="item-h">{item.title}</p>
              <p className="item-info">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
