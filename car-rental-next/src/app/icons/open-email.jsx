const OpenEmailSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <g stroke={stroke} strokeLinecap="round" strokeWidth={2}>
      <path strokeLinejoin="round" d="m4 9 6.2 4.65a3 3 0 0 0 3.6 0L20 9" />
      <path d="M3 9.177a2 2 0 0 1 1.029-1.749l7-3.888a2 2 0 0 1 1.942 0l7 3.888A2 2 0 0 1 21 9.177V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.177Z" />
    </g>
  </svg>
);
export default OpenEmailSvgComponent;
