import "./header1-light.scss";

export default function Header1Light({
  span,
  header,
  textAlign = false,
  button,
  text,
  light = true,
  buttonType = "primary",
}) {
  return (
    <div className="header1light">
      {span && (
        <span className="subtitle">
          <div className="oval"></div>
          {span}
        </span>
      )}
      {header && <h3>{header}</h3>}

      {button && <button className={buttonType}>{button}</button>}
      {text && <p>{text}</p>}
    </div>
  );
}
