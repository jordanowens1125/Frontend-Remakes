const SeatSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M22.5 20v2a1 1 0 0 1-1 1H7.596a2 2 0 0 1-1.95-1.557L1.278 2.222A1 1 0 0 1 2.253 1h3.455a1 1 0 0 1 .973.771L10.5 18h10a2 2 0 0 1 2 2Z" />
      <path d="M6.967 3H9a1 1 0 0 1 1 1v2L8 7.5M13.5 14.375h-6" />
    </g>
  </svg>
);
export default SeatSvgComponent;
