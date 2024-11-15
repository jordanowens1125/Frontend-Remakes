const RightArrowSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
  
}) => (
  <svg
    
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    transform="rotate(180)"
    viewBox="0 0 24 24"
    strokeWidth={1}
  >
    <path d="M1.293 12.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L4.414 11H22a1 1 0 0 1 0 2H4.414l3.293 3.293a1 1 0 1 1-1.414 1.414Z" />
  </svg>
);
export default RightArrowSvgComponent;
