const DoubleChevronSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="m6 17 5-5-5-5m7 10 5-5-5-5"
    />
  </svg>
);
export default DoubleChevronSvgComponent;
