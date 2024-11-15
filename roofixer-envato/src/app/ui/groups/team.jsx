import {
  imgteam1,
  imgteam2,
  imgteam3,
  imgteam4,
} from "@/app/constants/sources";
import "./team.scss";
import TEAMLIST from "@/app/constants/team";

export default function TeamGroup() {
  return (
    <ul className="teamgroup group">
      {TEAMLIST.map((item) => (
        <li className="item" key={item.name}>
          <img src={item.img} alt="" />
          <div className="info">
            <p className="item-h-5">{item.name}</p>
            <p className="subh">{item.position}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
