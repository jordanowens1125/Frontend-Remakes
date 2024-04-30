import "./topbottom.scss";

export default function TopBottom({ top, bottom, sectionClasses, sectionID }) {
  return (
    <section className={sectionClasses} id={sectionID}>
      <div className="container topbottom">
        {top}
        {bottom}
      </div>
    </section>
  );
}
