import { RIGHT } from "@/app/constants/icons";
import "./content1.scss";
export default function Content1({
  subheading,
  heading,
  text,
  buttons = [],
  image,
}) {
  return (
    <>
      <div className="content1">
        {image && <img src={image} alt="" className="icon"/>}
        {subheading && <span className="subheading">{subheading}</span>}
        {heading && <h3 className="heading">{heading}</h3>}
        {text && <p>{text}</p>}
        <div className="buttons">
          {buttons.map((button) => (
            <button className={button.class} key={button.text}>
              {button.text}
              {button.right && <img src={RIGHT} alt="right arrow" />}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
