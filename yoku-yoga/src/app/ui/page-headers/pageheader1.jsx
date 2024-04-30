import "./pageheader1.scss";

export default function PageHeader1({
  header,
  subheader,
  text,
  button,
  divider = false,
}) {
  return (
    <section className="pageheader1">
      <div className="container">
        <h1 className="header">{header}</h1>
      </div>
    </section>
  );
}
