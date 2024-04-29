import "./floating-left-img.scss";

export default function FloatingLeftImgSBS({
  leftimg,
  right,
  backgroundColorClass,
}) {
  return (
    <>
      <section className={backgroundColorClass}>
        <div className="container">
          <div className=" sbs-left">
            <img className="left" src={leftimg} alt="left image" />
            <div className="right">{right}</div>
          </div>
        </div>
      </section>
    </>
  );
}
