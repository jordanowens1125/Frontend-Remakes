import "./floatingbox1.scss";

export default function FloatingBox1({
  headertext = "45",
  text = "Years of Experience",
}) {
  return (
    <>
      <div className="floatingbox1">
        <p className="item-h-3">
          {headertext} 
        </p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
