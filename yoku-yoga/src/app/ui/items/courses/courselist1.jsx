import { BOOKMARK, PEOPLE } from "@/app/constants/icons";
import "./courselist1.scss";
import Stars from "./stars";
import { LESSON } from "@/app/constants/icons";
import LessonSvgComponent from "@/app/icons/lesson";
import BookMarkSvgComponent from "@/app/icons/bookmark";
import PeopleSvgComponent from "@/app/icons/people";

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
      title: "Yoga for Strength and Flexibility",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-3.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga Flow: Harmonizing Mind and Body",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-4.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Stress Relief and Relaxation",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-5.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Inner Peace: Cultivating Serenity",
      price: 39,
      lessons: 6,
      students: 67,
    },

    {
      image: "home1/section3-6.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Mindful Yoga: Connecting Breath and Movement",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-1.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Wellness: Nurturing Body and Soul",
      price: 39,
      lessons: 6,
      students: 67,
    },
    {
      image: "home1/section3-2.jpg",
      event: "Meditation",
      type: "Pranayama",
      rating: 4,
      title: "Yoga for Athletes: Enhancing Performance and Preventing Injury",
      price: 39,
      lessons: 6,
      students: 67,
    },
  ],
}) {
  return (
    <div className="items courselist1">
      {classes.map((item) => (
        <div className="item" key={item.title}>
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
              <BookMarkSvgComponent stroke="#3dbca8" />
            </span>
            <div className="info">
              <span>
                <LessonSvgComponent fill="white" />
                <p>{item.lessons} lessons</p>
              </span>
              <span>
                <PeopleSvgComponent fill="white" stroke="#a2a2a2" />
                <p>{item.students} Students Enrolled</p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
