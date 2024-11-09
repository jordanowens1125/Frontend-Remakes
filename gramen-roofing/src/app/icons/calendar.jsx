const CalendarSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M10 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2V10M7 3v2m10-2v2M3 9h18m-7.5 4H7m3 4H7m7 4 2.025-.405c.177-.035.265-.053.347-.085a.994.994 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21 16a1.414 1.414 0 1 0-2-2l-4.157 4.157a2.098 2.098 0 0 0-.242.264.994.994 0 0 0-.11.207c-.033.082-.05.17-.086.347L14 21Z"
    />
  </svg>
);
export default CalendarSvgComponent;
