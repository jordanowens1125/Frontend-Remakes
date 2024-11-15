import "./contact.scss";
import PhoneSvgComponent from "@/app/icons/phone";
import PointOnMapSvgComponent from "@/app/icons/pointonmap";
import SendSvgComponent from "@/app/icons/send";

export default function ContactGroup({
  items = [
    {
      title: "Address",
      value: "Jin Cempaka Wnagi No 22, Jakarta - Indonesia 12345",
      icon: <PointOnMapSvgComponent />,
      link: "",
    },
    {
      title: "Email",
      value: "Contact@domain.com",
      icon: <SendSvgComponent />,
      link: "",
    },
    {
      title: "Phone Number",
      value: "(+62)815254239",
      icon: <PhoneSvgComponent />,
      link: "",
    },
  ],
  iconClass = "icon-1",
  itemHeaderClass = "item-h-5",
}) {
  return (
    <div className="contact-group group">
      {items.map((item) => {
        return (
          <div key={item.title} className="item">
            <div className={iconClass}>{item.icon}</div>

            <p className={itemHeaderClass}>{item.title}</p>

            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </div>
        );
      })}
    </div>
  );
}
