import "./standard.scss";

export default function StandardSBS({
  left,
  right,
  sectionClasses,
  sectionID,
}) {
  return (
    <section className={sectionClasses} id={sectionID}>
      <div className="container">
        <div className="standard-sbs">
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </div>
      </div>
    </section>
  );
}
