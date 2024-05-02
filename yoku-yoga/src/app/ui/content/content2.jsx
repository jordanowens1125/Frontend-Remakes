import "./content2.scss";
export default function Content2({
  subheader,
  header,
  text,
  buttons = [],
  image,
}) {
  return (
    <>
      <div className="content2">
        {image && <img src={image} alt="" />}
        {subheader && <span className="subheader">{subheader}</span>}
        {header && <h3 className="header">{header}</h3>}
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
