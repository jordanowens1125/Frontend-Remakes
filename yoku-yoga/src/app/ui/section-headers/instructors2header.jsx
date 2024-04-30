import "./instructors2header.scss";

export default function Instructors2Header({ header, text }) {
  return (
    <div className="instruction2header">
      <h3 className="header">{header}</h3>
      <p>{text}</p>
    </div>
  );
}
