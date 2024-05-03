import { RIGHT } from "@/app/constants/icons";
import "./content1.scss";
import SectionHeader1 from "../section-headers/sectionheader1";
import RightArrowSvgComponent from "@/app/icons/right";
export default function Content1({
  subheader,
  header,
  text,
  buttons = [],
  image,
}) {
  return (
    <>
      <div className="content1">
        {image && <img src={image} alt="" className="icon" />}
        <SectionHeader1 header={header} subheader={subheader} />
        {text && <p>{text}</p>}
        <div className="buttons">
          {buttons.map((button) => (
            <a className={button.class} key={button.text} href={button.link}>
              {button.text}
              {button.right && <RightArrowSvgComponent />}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
