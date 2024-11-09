import "./header1-white.scss";

export default function Header1White({
  span,
  header,
  textAlign = false,
  button,
  text,
  light = true,
  buttonType = "primary",
}) {
  return (
    <div className="header1white">
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
