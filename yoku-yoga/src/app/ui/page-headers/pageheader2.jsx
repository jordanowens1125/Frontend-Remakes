import "./pageheader2.scss";

export default function PageHeader2({
  header,
  subheader,
  text,
  button,
  divider = false,
}) {
  return (
    <section className="pageheader2">
      <div className="container">
        {subheader && <span className="subheader">{subheader}</span>}
        {header && <h1 className="header">{header}</h1>}
        {text && <p className="text">{text}</p>}
        {button && (
          <a className={button.class} href={button.link}>
            {button.text}
          </a>
        )}
        {divider && <span className="divider"></span>}
      </div>
    </section>
  );
}
