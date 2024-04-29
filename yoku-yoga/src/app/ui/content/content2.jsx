import "./content2.scss";
export default function Content2({
  subheading,
  heading,
  text,
  buttons = [],
  image,
}) {
  return (
    <>
      <div className="content2">
        {image && <img src={image} alt="" />}
        {subheading && <span className="subheading">{subheading}</span>}
        {heading && <h3 className="heading">{heading}</h3>}
        {text && <p>{text}</p>}
        <div className="buttons">
          {buttons.map((button) => (
            <button className={button.class} key={button.text}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
