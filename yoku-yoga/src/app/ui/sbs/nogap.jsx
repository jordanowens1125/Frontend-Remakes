import "./nogap.scss";

export default function NoGapSBS({ left, right, sectionClasses, sectionID }) {
  return (
    <section className={sectionClasses} id={sectionID}>
      <div className="container">
        <div className="nogap">
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </div>
      </div>
    </section>
  );
}
