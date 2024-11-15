import "./bottomtriangle.scss";

export default function BottomTriangleElement({ bgColor = "#fff" }) {
  return (
    <div className="bottomtriangle" style={{ "--bgColor": bgColor }}>
      Triangle
    </div>
  );
}
