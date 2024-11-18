import "./hero-header.scss";

export default function HeroHeader({
  span,
  header,
  textAlign = false,
  button,
  text,
  light = true,
  buttonType = "primary",
}) {
  return (
    <div className="hero-header">
      {span && (
        <span className="subtitle">
          <div className="oval"></div>
          {span}
        </span>
      )}
      {header && <h1>{header}</h1>}
      {text && <p>{text}</p>}
      {button && <button className={buttonType}>{button}</button>}
    </div>
  );
}
