import "./toptriangle.scss";

export default function TopTriangleElement({ bgColor = "#fff" }) {
  return (
    <>
    <div className="toptriangle" style={{ "--bgColor": bgColor }}>
      <div className="line"></div>
    </div>
    </>
    
  );
}
