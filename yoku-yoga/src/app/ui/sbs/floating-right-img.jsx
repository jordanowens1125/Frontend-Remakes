import "./floating-right-img.scss";

export default function FloatingRightSBS({
  Left,
  Rightimg,
  sectionID='',
  classes='',
}) {
  return (
    <section id={sectionID} className={`floating-right-sbs ${classes}`}>
      <div className="container ">
        <div className="left">{Left}</div>
        <div className="right">{Rightimg}</div>
      </div>
    </section>
  );
}
