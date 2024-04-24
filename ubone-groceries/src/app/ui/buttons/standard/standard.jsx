export default function StandardButton({
  lefticon,
  righticon,
  link,
  action,
  text,
}) {
  return (
    <>
      <button>
        {lefticon && <img src={lefticon} alt={text} />}
        {text && text}
        {righticon && <img src={righticon} alt={text} />}
      </button>
    </>
  );
}
