import "./header1.scss";

export default function Header1({
  span,
  header,
  textAlign = false,
  button,
  text,
  light = true,
  buttonType = "btn-1",
}) {
  return (
    <div className="header1">
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
