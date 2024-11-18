const HammerSVGComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      
      strokeMiterlimit: 1,
    }}
    transform="scale(-1 1)"
    viewBox="0 0 64 64"
    stroke={stroke}
    strokeWidth={1}
    fill={"none"}
  >
    <path
      d="M-768-192H512v800H-768z"
      style={{
        fill: "none",
        stroke: "stroke",
      }}
    />
    <path d="m30.651 23.538 25.24 24.346-6.577 6.577-23.969-25.617 5.306-5.306Zm-7.208 3.403 5.306-5.305s-2.695-2.056-2.447-3.34c.248-1.285.809-3.1 4.711-4.711 3.903-1.611 7.543-1.757 7.543-1.757l.131-1.758s-8.969-1.356-13.707.327c-4.738 1.684-10.097 8.02-10.097 8.02s.935 3.064-.667 4.666c-1.601 1.601-3.754-.245-3.754-.245l-2.456 3.118 6.197 6.197 3.112-2.461s-1.472-2.207-.017-3.528c3.132-2.842 6.145.777 6.145.777Z" />
  </svg>
);
export default HammerSVGComponent;
