const MailSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 -3.5 32 32"
  >
    <title>{"mail"}</title>
    <path
      fill={fill}
      fillRule="evenodd"
      d="m16 14.916-3.316-2.749L1.115 24.01h29.476L19.235 12.147 16 14.916Zm4.89-4.026 11.002 11.439a2.53 2.53 0 0 0 .108-.695V1.862L20.89 10.89ZM0 1.816v19.818c0 .243.045.473.108.695l11.039-11.402L0 1.816ZM31 0H1l15 12.019L31 0Z"
    />
  </svg>
);
export default MailSvgComponent;
