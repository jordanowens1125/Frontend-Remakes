import "./header1-aligned.scss";

export default function Header1Aligned({
  span,
  header,
  textAlign = false,
  button,
  text,
  light = true,
  buttonType = "primary",
}) {
  return (
    <div className="header1-aligned">
      {span && (
        <span className="subtitle">
          <div className="oval"></div>
          {span}
        </span>
      )}
      {header && <h2>{header}</h2>}

      {button && <button className={buttonType}>{button}</button>}
      {text && <p>{text}</p>}
    </div>
  );
}
