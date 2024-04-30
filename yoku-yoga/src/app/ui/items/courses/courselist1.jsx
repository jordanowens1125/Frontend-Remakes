import { BOOKMARK, PEOPLE } from "@/app/constants/icons";
import "./courselist1.scss";
import Stars from "./stars";
import { LESSON } from "@/app/constants/icons";

export default function CourseList1({
  classes = [
    {
      image: "home1/section3-1.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-2.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-3.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-4.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-5.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },

    {
      image: "home1/section3-6.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-1.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-2.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
    },
  ],
}) {
  return (
    <div className="items courselist1">
      {classes.map((item) => (
        <div className="item">
          <div className="img-container">
            <img src={item.image} alt={item.event} />
          </div>

          <div className="item-section">
            <span className="top">
              <div className="class">
                <p>{item.event}</p>,<p>{item.type}</p>
              </div>

              <Stars />
            </span>
            <h3 className="title">{item.title}</h3>
          </div>
          <div className="item-section">
            <span className="bottom">
              <p className="price">${item.price}</p>
              <img src={BOOKMARK} alt="Bookmark" className="bookmark" />
            </span>
            <div className="info">
              <span>
                <img src={LESSON} alt="Lesson" />
                <p>{item.lessons} lessons</p>
              </span>
              <span>
                <img src={PEOPLE} alt="Students" />
                <p>{item.students} Students Enrolled</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
