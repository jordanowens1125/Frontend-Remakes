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
      {header && <h2 className="section-h">{header}</h2>}

      {button && <button className={buttonType}>{button}</button>}
      {text && <p>{text}</p>}
    </div>
  );
}
