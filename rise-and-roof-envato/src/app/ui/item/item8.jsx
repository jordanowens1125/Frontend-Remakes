import "./item8.scss";

export default function Item8({
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
  textAligned,
}) {
  return (
    <div className="item8 item">
      <img src={img} alt={itemHeaderText} />
      <div className={textAligned ? "info align" : "info"}>
        {svg && svgClass && <div className={svgClass}>{svg}</div>}
        {count && <div className="count">{count}</div>}
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