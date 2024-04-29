import "./statlist.scss";

export default function StatList({
  stats = [
    {
      img: "about1/section3-1.png",
      data: "1M",
      title: "Class Views",
    },
    {
      img: "about1/section3-2.png",
      data: "48K",
      title: "Happy Students",
    },
    {
      img: "about1/section3-3.png",
      data: "90%",
      title: "Satisfaction",
    },
    {
      img: "about1/section3-4.png",
      data: "20",
      title: "Awesome Instructors",
    },
  ],
}) {
  return (
    <div className="items stats">
      {stats.map((stat) => (
        <div className="item" key={stat.title}>
          <img src={stat.img} alt="" />
          <p className="item-h">{stat.data}</p>
          <p className="title">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
