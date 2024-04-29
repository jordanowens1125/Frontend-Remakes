import "./nogap.scss";

export default function NoGapSBS({ left, right, backgroundColorClass }) {
  return (
    <section className={backgroundColorClass}>
      <div className="container">
        <div className="nogap">
          <div className="left">{left}</div>
          <div className="right">{right}</div>
        </div>
      </div>
    </section>
  );
}
