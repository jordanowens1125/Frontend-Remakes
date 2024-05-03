import { DARKGREENBG } from "@/app/constants/backgroundClasses";
import "./contact3items.scss";

export default function Contact3Items() {
  const items = [
    {
      city: "London",
      text: "4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342",
      telephone: "+44-20-2355-3456",
      email: "London@InfiniteWP.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214789.0595424924!2d-117.25410123902319!3d32.73709144045893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbffd6a74d24ed%3A0xd95f60f86694dfb9!2sBill%20Howe%20Plumbing%2C%20Heating%20%26%20Air%2C%20Restoration%20%26%20Flood%20Services!5e0!3m2!1sen!2sus!4v1693689079614!5m2!1sen!2sus",
    },
    {
      city: "New York",
      text: "88 Flower Avenue. Kingdom St.New York 7689",
      telephone: "+1-4533-4435-2",
      email: "Sanfran@InfiniteWP.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214789.0595424924!2d-117.25410123902319!3d32.73709144045893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbffd6a74d24ed%3A0xd95f60f86694dfb9!2sBill%20Howe%20Plumbing%2C%20Heating%20%26%20Air%2C%20Restoration%20%26%20Flood%20Services!5e0!3m2!1sen!2sus!4v1693689079614!5m2!1sen!2sus",
    },
  ];
  return (
    <div className={`items contact3items`}>
      {items.map((item) => (
        <div className="item" key={item.city}>
          <div className={`info ${DARKGREENBG}`}>
            <p className="city">{item.city}</p>
            <p>{item.text}</p>
            <a href="">Tel:{item.telephone}</a>
            <a href="">Email: {item.email}</a>
          </div>
          <iframe
            src={item.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
