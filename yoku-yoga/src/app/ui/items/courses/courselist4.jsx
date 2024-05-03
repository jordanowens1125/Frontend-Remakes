import LessonSvgComponent from "@/app/icons/lesson";
import "./courselist4.scss";
import { LESSON, PEOPLE, BULB } from "@/app/constants/icons";
import PeopleSvgComponent from "@/app/icons/people";
import BulbSvgComponent from "@/app/icons/bulb";
export default function Courselist4({
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
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
      name: "Jane Smith",
    },
  ],
}) {
  return (
    <div className="items courselist4">
      {classes.map((item) => (
        <div className="item">
          <div className="img-container">
            <img src={item.image} alt={item.event} className="display" />
            <div className="content">
              <span>
                <LessonSvgComponent fill="transparent" />
                <p>{item.lessons} Lessons</p>
              </span>
              <span>
                <PeopleSvgComponent />
                <p>{item.students} Students Enrolled</p>
              </span>
              <span>
                <BulbSvgComponent />
                <p>
                  {item.event} , {item.type}
                </p>
              </span>
            </div>
          </div>
          <div className="info">
            <span>With {item.name}</span>
            <p className="title">{item.title}</p>
            <p className="price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
