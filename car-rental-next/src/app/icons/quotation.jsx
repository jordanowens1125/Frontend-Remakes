const QuotationSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20">
    <title>
      {"editor / 24 - editor, end, quotation, quote, testimonial, tool icon"}
    </title>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M19 10.02h-6.368A.64.64 0 0 1 12 9.373V1.647A.64.64 0 0 1 12.632 1h5.736a.64.64 0 0 1 .632.647v10.118C19 13.552 17.586 15 15.842 15M8 10.02H1.632A.64.64 0 0 1 1 9.373V1.647A.64.64 0 0 1 1.632 1h5.736A.64.64 0 0 1 8 1.647v10.118C8 13.552 6.586 15 4.842 15" />
    </g>
  </svg>
);
export default QuotationSvgComponent;
