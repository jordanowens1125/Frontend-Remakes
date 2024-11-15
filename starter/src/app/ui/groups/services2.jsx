import "./services2.scss";
import {
  imgservices1,
  imgservices2,
  imgservices3,
  imgservices4,
  imgservices5,
  imgservices6,
} from "@/app/constants/sources";

export default function Services2Group({
  items = [
    {
      header: "Roof Installation",
      img: imgservices1,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
    {
      header: "Roof Installation 2",
      img: imgservices2,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
    {
      header: "Roof Installation 3",
      img: imgservices3,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
    {
      header: "Roof Installation 4",
      img: imgservices4,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
    {
      header: "Roof Installation 5",
      img: imgservices5,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
    {
      header: "Roof Installation 6",
      img: imgservices6,
      text: "Platea quam eleifend at congue ac lobortis tristique massa mus.",
    },
  ],
  iconClass = "icon-1",
  itemHeaderClass = "item-h-1",
}) {
  return (
    <ul className="group servicegroup2">
      {items.map((item) => (
        <li key={item.header} className="item">
          <div className="img-container">
            <img src={item.img} alt={item.header} />
          </div>

          <div className="info">
            <span className={itemHeaderClass}>{item.header}</span>
            <p className="text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
