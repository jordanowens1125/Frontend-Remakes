import "./item10.scss";

export default function Item10({
  link,
  linkClass,
  linkText,
  text,
  itemHeaderText,
  itemHeaderClass = "item-h-1",
  count ='1',
  subhText,
  subhClass,
  svg,
  svgClass = "icon-1",
  row,
}) {
  return (
    <div className="item10 item">
      {svg && svgClass && <div className={svgClass}>{svg}</div>}

      <h3 className={itemHeaderClass}>{itemHeaderText}</h3>
      {subhClass && subhText && <p className={subhClass}>{subhText}</p>}
      {text && <p className="text">{text}</p>}
      <div className="row">
        {link && linkClass && (
          <a href={link} className={linkClass}>
            {linkText}
          </a>
        )}

        {count && <div className="count">{count}</div>}
      </div>
    </div>
  );
}
