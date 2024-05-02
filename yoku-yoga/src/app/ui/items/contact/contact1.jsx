import { EMAIL, PHONE, POINTONMAP } from "@/app/constants/icons";
import "./contact1.scss";

export default function Contact1Items({
  classes,
  sectionID,
  items = [
    {
      icon: PHONE,
      title: "Phone",
      text: "A wonderful serenity has taken possession of my entire soul, like these.",
      link: "",
      linkText: "+1-2345-2345",
    },
    {
      icon: EMAIL,
      title: "Email",
      text: "A wonderful serenity has taken possession of my entire soul, like these.",
      link: "",
      linkText: "Contact@goodlayers.com",
    },
    {
      icon: POINTONMAP,
      title: "Location",
      text: "4 apt. Flawing Street. The Grand Avenue.Liverpool, UK 33342",
      link: "",
      linkText: "View On Google Map",
    },
  ],
}) {
  return (
    <section className={classes} id={sectionID}>
      <div className="container">
        <div className="items contact1-items">
          {items.map((item) => (
            <div className="item">
              <img src={item.icon} alt={item.title} />
              <p className="item-h">{item.title}</p>
              <p className="text">{item.text}</p>
              <a href={item.link}>{item.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
