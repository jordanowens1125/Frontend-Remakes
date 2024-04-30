import "./topbottom.scss";

export default function TopBottom({ top, bottom }) {
  return (
    <section>
      <div className="container topbottom">
        {top}
        {bottom}
      </div>
    </section>
  );
}
