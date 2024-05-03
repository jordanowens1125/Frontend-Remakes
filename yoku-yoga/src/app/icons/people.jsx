const PeopleSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 32 32"
    fill={fill}
    stroke={stroke}
  >
    <title />
    <path d="M20 19a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM8.94 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM25 20H15a5 5 0 0 0-5 5v5h2v-5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5h2v-5a5 5 0 0 0-5-5ZM13 11H6a4 4 0 0 0-4 4v4h2v-4a2 2 0 0 1 2-2h7Z" />
  </svg>
);
export default PeopleSvgComponent;
