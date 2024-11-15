import "./header1.scss";

export default function Header1({
  span,
  header = "Section Header",
  emphasis,
  text,
}) {
  return (
    <>
      <div className="header1">
        {span && <span className="sub-h">{span}</span>}
        {header && (
          <h2 className="section-h-1">
            {header} {emphasis && <span>{emphasis}</span>}
          </h2>
        )}
        {text && <p className="text">{text}</p>}
      </div>
    </>
  );
}
