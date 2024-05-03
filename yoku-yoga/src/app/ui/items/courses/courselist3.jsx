import { AVATAR } from "@/app/constants/icons";
import "./courselist3.scss";
import Stars from "./stars";
import AvatarSvgComponent from "@/app/icons/avatar";

export default function Courselist3({
  courses = [
    {
      image: "home1/section3-1.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Yoga for Beginners Course",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-2.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Yamas and Niyamas",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-3.jpg",
      category: "Pranayama",
      rating: 4,
      title: "The Smart Flow Yoga",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-4.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Nine days of Pranayama",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-5.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Mastering Anxiety",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },

    {
      image: "home1/section3-6.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Self Care Through Ayurveda",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-1.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Vinyasa Krama",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
    {
      image: "home1/section3-2.jpg",
      category: "Pranayama",
      rating: 4,
      title: "Yoga For Better Sleep",
      price: 39,
      lessons: 6,
      students: 67,
      instructor: "Jane Smith",
      duration: 6,
      text: "Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition.",
    },
  ],
}) {
  return (
    <div className="items courselist3">
      {courses.map((item) => (
        <div className="item" key={item.title}>
          <img src={item.image} alt={item.title} className="course-img" />
          <div className="info">
            <p className="title">{item.title}</p>
            <span className="price">${item.price}</span>
            <span className="details">
              <div>
                Category: <span className="detail">{item.category}</span>
              </div>
              <div>
                Duration: <span className="detail">{item.duration} weeks</span>
              </div>
              <div>
                Lectures: <span className="detail">{item.lessons}</span>
              </div>
              <Stars />
            </span>
            <p className="text">{item.text}</p>
            <div className="instructor">
              <AvatarSvgComponent />
              <p className="teacher">Teacher</p>
              <p className="name">{item.instructor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
