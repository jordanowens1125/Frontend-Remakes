import "./statsheader.scss";

export default function StatsHeader({
  header = "What's the numbers",
  text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi enim, maxime ratione eos necessitatibus doloremque quae amet ab aliquam! Molestias dolorem consequatur magnam quam sed beatae praesentium int tenetur sapiente?",
  link = {
    href: "/courselist1",
    buttonClass: "btn-10",
    text: "Browse Courses",
    right: false,
  },
}) {
  return (
    <div className="statsheader">
      <h3 className="header">{header}</h3>
      <p>{text}</p>
      <a href="/courselist1" className={link.buttonClass}>
        {link.text}
      </a>
    </div>
  );
}
