import DiamondSvgComponent from "@/app/svgs/diamond";
import "./banner2.scss";

export default function Banner2() {
  const items = [
    {
      text: "Roof Installation1",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation1",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation3",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation4",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation5",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation6",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation7",
      icon: <DiamondSvgComponent />,
    },
    {
      text: "Roof Installation8",
      icon: <DiamondSvgComponent />,
    },
  ];
  const style = {
    "--width": 600,
    "--height": 70,
    "--quantity": 8,
    "--duration": 10,
  };

  return (
    <section className="banner2">
      <div className="slider" style={style}>
        <span style={{ "--position": 0 }}>
          <div className="icon">
            <DiamondSvgComponent />
          </div>

          <svg viewBox="0 0 500 50" className="text">
            <text y="50">Modified Roofing</text>
          </svg>
        </span>
      </div>
    </section>
  );
}
