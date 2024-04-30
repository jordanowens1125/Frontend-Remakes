import "./floating-left-img.scss";

export default function FloatingLeftImgSBS({
  leftimg,
  right,
  sectionClasses,
  sectionID,
}) {
  return (
    <>
      <section className={sectionClasses} id={sectionID}>
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
