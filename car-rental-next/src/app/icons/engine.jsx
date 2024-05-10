const EngineSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 0 25 25">
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M12 7.82h10M2 7.82h2M20 16.82h2M2 16.82h10M8 11.82a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 20.82a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </g>
  </svg>
);
export default EngineSvgComponent;
