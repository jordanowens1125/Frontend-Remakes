const CancelSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 512 512"
  >
    <title>{"cancel"}</title>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M420.48 121.813 390.187 91.52 256 225.92 121.813 91.52 91.52 121.813 225.92 256 91.52 390.187l30.293 30.293L256 286.08l134.187 134.4 30.293-30.293L286.08 256z"
    />
  </svg>
);
export default CancelSvgComponent;
