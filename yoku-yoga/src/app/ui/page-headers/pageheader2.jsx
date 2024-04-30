import "./pageheader2.scss";

export default function PageHeading2({
  heading,
  subheading,
  text,
  button,
  divider = false,
}) {
  return (
    <section className="pageheader2">
      <div className="container">
        {subheading && <span className="subheading">{subheading}</span>}
        {heading && <h1 className="heading">{heading}</h1>}
        {text && <p className="text">{text}</p>}
        {button && <button className={button.class}>{button.text}</button>}
        {divider && <span className="divider"></span>}
      </div>
    </section>
  );
}
