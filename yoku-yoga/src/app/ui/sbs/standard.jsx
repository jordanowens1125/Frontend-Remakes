import "./standard.scss";

export default function StandardSBS({ left, right, backgroundColorClass }) {
  return (
    <section className={backgroundColorClass}>
      <div className="container">
        <div className="standard-sbs">
        <div className="left">{left}</div>
        <div className="right">{right}</div>
      </div>
      </div>
      
    </section>
  );
}
