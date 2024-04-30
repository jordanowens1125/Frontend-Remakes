import { RIGHT } from "@/app/constants/icons";
import "./content3.scss";
export default function Content3({
  subheading = "Yoku's Strength",
  heading = "Our Expertises",
  text = "A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors. The social network perspective provides a set of methods for analyzing the structure of whole social entities as well as a variety.",
  buttons = [],
  image,
  link,
}) {
  return (
    <div className="content3">
      {image && <img src={image} alt="" />}
      {subheading && <span className="subheading">{subheading}</span>}
      {heading && <h3 className="heading">{heading}</h3>}
      {text && <p>{text}</p>}
      {link && (
        <a href={link.route}>
          {link.text}
          <img src={RIGHT} />
        </a>
      )}
    </div>
  );
}
