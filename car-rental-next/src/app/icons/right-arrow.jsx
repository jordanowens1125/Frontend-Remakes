const RightArrowSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    transform="rotate(270)"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 10 5 5 5-5"
    />
  </svg>
);
export default RightArrowSvgComponent;
