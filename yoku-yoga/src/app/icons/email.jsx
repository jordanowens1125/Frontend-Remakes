const EmailSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
    />
    <rect
      width={18}
      height={14}
      x={3}
      y={5}
      stroke={stroke}
      strokeLinecap="round"
      strokeWidth={2}
      rx={2}
    />
  </svg>
);
export default EmailSvgComponent;
