import { RIGHT } from "@/app/constants/icons";
import "./content3.scss";
import RightArrowSvgComponent from "@/app/icons/right";
export default function Content3({
  subheader = "Yoku's Strength",
  header = "Our Expertises",
  text = "A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors. The social network perspective provides a set of methods for analyzing the structure of whole social entities as well as a variety.",
  buttons = [],
  image,
  link,
}) {
  return (
    <div className="content3">
      {image && <img src={image} alt="" />}
      {subheader && <span className="subheader">{subheader}</span>}
      {header && <h3 className="header">{header}</h3>}
      {text && <p>{text}</p>}
      {link && (
        <a href={link.route}>
          {link.text}
          <RightArrowSvgComponent />
        </a>
      )}
    </div>
  );
}
