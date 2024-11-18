const YoutubeSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 -0.5 25 25"
  >
    <g
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      clipRule="evenodd"
    >
      <path d="M18.168 19.003a4.183 4.183 0 0 0 4.332-4.017V9.02a4.183 4.183 0 0 0-4.332-4.017H6.832A4.183 4.183 0 0 0 2.5 9.02v5.966a4.183 4.183 0 0 0 4.332 4.017h11.336Z" />
      <path d="m12.008 9.178 3.161 2.148a.667.667 0 0 1 0 1.152l-3.161 2.35c-.6.407-1.508.06-1.508-.576v-4.5c0-.633.909-.981 1.508-.574Z" />
    </g>
  </svg>
);
export default YoutubeSvgComponent;
