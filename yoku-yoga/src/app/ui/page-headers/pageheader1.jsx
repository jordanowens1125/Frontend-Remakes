import "./pageheader1.scss";

export default function PageHeading1({
  heading,
  subheading,
  text,
  button,
  divider = false,
}) {
  return (
    <section className="pageheader1">
      <div className="container">
        <h1 className="header">{heading}</h1>
      </div>
    </section>
  );
}
