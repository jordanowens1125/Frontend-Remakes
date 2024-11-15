import "./header1.scss";

export default function Header1({
  span,
  header = "Section Header",
  emphasis,
  text,
  headerClass = "section-h-2",
}) {
  return (
    <>
      <div className="header1">
        {span && <span className="sub-h">{span}</span>}
        {header && (
          <h2 className={headerClass}>
            {header} {emphasis && <span>{emphasis}</span>}
          </h2>
        )}
        {text && <p className="text">{text}</p>}
      </div>
    </>
  );
}
