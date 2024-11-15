import "./item2.scss";

export default function Item2({
  link,
  linkClass,
  linkText,
  text,
  itemHeaderText,
  itemHeaderClass = "item-h-1",
  count,
  subhText,
  subhClass,
  svg,
  svgClass = "icon-1",
  row,
}) {
  return (
    <div className="item2 item">
      <div className="left">
        {svg && svgClass && <div className={svgClass}>{svg}</div>}
        {count && <div className="count">{count}</div>}
      </div>

      <div className="info">
        <h3 className={itemHeaderClass}>{itemHeaderText}</h3>
        {subhClass && subhText && <p className={subhClass}>{subhText}</p>}
        {text && <p className="text">{text}</p>}
        {link && linkClass && (
          <a href={link} className={linkClass}>
            {linkText}
          </a>
        )}
        {row}
      </div>
    </div>
  );
}
