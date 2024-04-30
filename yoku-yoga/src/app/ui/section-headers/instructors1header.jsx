import "./instructors1header.scss";

export default function Instructors1Header({ header, text }) {
  return (
    <div className="instruction1header">
      {header && <h3 className="header">{header}</h3>}
      {text && <p className="text">{text}</p>}
    </div>
  );
}
