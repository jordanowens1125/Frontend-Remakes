import "./header2.scss";

export default function Header2({
  span,
  header = "Section Header",
  emphasis,
  text,
  bottom,
  ctatext,
  ctalink ,
  btnClass = "btn-1",
}) {
    btnClass = btnClass + " margin-class"
  return (
    <>
      <div className="header2">
        {span && <span className="sub-h">{span}</span>}
        {header && (
          <h2 className="section-h-2">
            {header} {emphasis && <span>{emphasis}</span>}
          </h2>
        )}
        {text && <p className="text">{text}</p>}

        {ctalink && ctatext && (
          <a href={ctalink} className={btnClass}>
            {ctatext}
          </a>
        )}
        
      </div>{bottom && <div className="bottom">{bottom}</div>}
    </>
  );
}
