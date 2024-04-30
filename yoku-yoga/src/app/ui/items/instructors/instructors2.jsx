import "./instructors2.scss";

export default function Instructors2({
  items = [
    {
      info: "2",
      name: "Jane Smith",
      img: "instructor2/1.jpg",
    },
    {
      info: "2",
      name: "Mildred Reed",
       img: "instructor2/2.jpg",
    },
    {
      info: "2",
      name: "Madison Diaz",
       img: "instructor2/3.jpg",
    },
    {
      info: "2",
      name: "Brenda Roberts",
       img: "instructor2/4.jpg",
    },
    {
      info: "2",
      name: "Lori Mendoza",
       img: "instructor2/5.jpg",
    },
    {
      info: "2",
      name: "Crystal Gibson",
       img: "instructor2/6.jpg",
    },
  ],
}) {
  return (
    <div className="items instructors2">
      {items.map((item) => (
        <div className="item" key={item.name}>
          <img src={item.img} alt={item.name} />
          <p className="item-h">{item.name}</p>
          <p className="info">{item.info} classes</p>
        </div>
      ))}
    </div>
  );
}
