import "./item1.scss";

export default function Item1({
  link,
  linkClass,
  linkText,
  text,
  itemHeaderText,
  itemHeaderClass = "item-h-1",
  count,
  subhText,
  subhClass,
  img,
  svg,
  svgClass = "icon-1",
  row,
  textAligned,
}) {
  return (
    <div className={textAligned ? "item item1 aligned": "item1 item"}>
      <img src={img} alt={itemHeaderText} />
      {count && <div className="count">{count}</div>}
      {svg && svgClass && <div className={svgClass}>{svg}</div>}
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
  );
}
