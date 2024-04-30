import "./quote-content.scss";

export default function QuoteContent({ quoteColor, text, name, info }) {
  return (
    <div className="quote">
      <img src="quotation.png" alt="Quotation Marks" />
      <p className="text">{text}</p>

      <div className="info">
        <p className="name">{name}</p>
        <p className="subinfo">{info}</p>
      </div>
    </div>
  );
}
