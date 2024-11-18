import "./checkgroup.scss";

export default function CheckGroup({
  items = [
    {
      text: "Time savings through effective project management",
    },
    {
      text: "High quality workmanship and materials",
    },
    {
      text: "Professional and efficient project delivery",
    },
  ],
}) {
  return (
    <ul className="checkgroup group">
      {items.map((item) => (
        // <Item15 key={item.text} text={item.text} />
        <></>
      ))}
    </ul>
  );
}
