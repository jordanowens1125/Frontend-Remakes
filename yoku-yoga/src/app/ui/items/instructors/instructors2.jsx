import "./instructors2.scss";

export default function Instructors2({
  items = [
    {
      info: "2",
      name: "Jane Smith",
      img: "",
    },
    {
      info: "2",
      name: "Mildred Reed",
      img: "",
    },
    {
      info: "2",
      name: "Madison Diaz",
      img: "",
    },
    {
      info: "2",
      name: "Brenda Roberts",
      img: "",
    },
    {
      info: "2",
      name: "Lori Mendoza",
      img: "",
    },
    {
      info: "2",
      name: "Crystal Gibson",
      img: "",
    },
  ],
}) {
  return (
    <div className="items instructors2">
      {items.map((item) => (
        <div className="item" key={item.name}>
          <img src="about2/section2.jpg" alt="" />
          <p className="item-h">Jane Smith</p>
          <p className="info">{item.info} classes</p>
        </div>
      ))}
    </div>
  );
}
