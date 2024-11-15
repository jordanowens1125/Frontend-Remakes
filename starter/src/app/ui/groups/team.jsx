import { imgteam1, imgteam2, imgteam3, imgteam4 } from "@/app/constants/sources";
import "./team.scss";
import LinksGroup from "./links";

export default function TeamGroup({
  items = [
    {
      img: imgteam1,
      name: "Tommy Burner",
      position: "Leader",
      social1: "facebook.com",
      social2: "facebook.com",
      social3: "facebook.com",
    },
    {
      img: imgteam2,
      name: "Alexa Aldina",
      position: "Leader",
      social1: "facebook.com",
      social2: "facebook.com",
      social3: "facebook.com",
    },
    {
      img: imgteam3,
      name: "Eric Sumpter",
      position: "Leader",
      social1: "facebook.com",
      social2: "facebook.com",
      social3: "facebook.com",
    },
    {
      img: imgteam4,
      name: "Moses Malone",
      position: "Leader",
      social1: "facebook.com",
      social2: "facebook.com",
      social3: "facebook.com",
    },
  ],
}) {
  return (
    <ul className="teamgroup group">
      {items.map((item) => (
        <li className="item" key={item.name}>
          <img src={item.img} alt="" />
          <div className="info">
            <p className="item-h-1">{item.name}</p>
            <div className="row">
              <p className="text">{item.position}</p>
              <LinksGroup />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
