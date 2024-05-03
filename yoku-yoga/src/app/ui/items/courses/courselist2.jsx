import { BOOKMARK, BULB, PEOPLE } from "@/app/constants/icons";
import "./courselist2.scss";
import LessonSvgComponent from "@/app/icons/lesson";
import BulbSvgComponent from "@/app/icons/bulb";
import PeopleSvgComponent from "@/app/icons/people";

export default function CourseList2({
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
    <div className="items courselist2">
      {classes.map((item) => (
        <div className="item" key={item.name}>
          <div className="img-container">
            <img src={item.image} alt={item.event} className="display" />
            <div className="content">
              <span>
                <LessonSvgComponent fill="transparent"/>
                <p>{item.lessons} Lessons</p>
              </span>
              <span>
                <PeopleSvgComponent fill=""/>
                <p>{item.students} Students Enrolled</p>
              </span>
              <span>
                <BulbSvgComponent/>
                <p>
                  {item.event} , {item.type}
                </p>
              </span>
            </div>
          </div>
          <div className="info">
            <span>
              With <p>{item.name}</p>
            </span>
            <p className="title">{item.title}</p>
            <p className="price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
