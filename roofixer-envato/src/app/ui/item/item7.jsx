import "./item7.scss";

export default function Item7({
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
  img,
}) {
  return (
    <div className="item7 item">
      <div className="top">
        <img src={img} alt="" />
        {svg && svgClass && <div className={svgClass}>{svg}</div>}
        {count && <div className="count">{count}</div>}
      </div>

      <div className="info">
        <div className="left">
          <h3 className={itemHeaderClass}>{itemHeaderText}</h3>
          {subhClass && subhText && <p className={subhClass}>{subhText}</p>}
          {text && <p className="text">{text}</p>}
          {row}
        </div>

        {link && linkClass && (
          <a href={link} className={linkClass}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}
