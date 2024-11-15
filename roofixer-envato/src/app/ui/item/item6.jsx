import "./item6.scss";

export default function Item6({
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
  svgClass='icon-1',
  row,
}) {
  return (
    <div className="item6 item">
      <img src={img} alt={itemHeaderText} />
      <div className="info">
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
    </div>
  );
}
