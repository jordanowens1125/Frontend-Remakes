import QuotationSvgComponent from "@/app/svgs/quotations";
import "./reviews.scss";

export default function ReviewsGroup({
  items = [
    {
      text: "Aenean lacinia bibendum nulla sed est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem nec elit dolor id nibh ultricies vehicula ut id elit sociis natoque penatibus et montes mus.",
      headerText: "John Doe",
      subh: "Buffalo, NY",
    },
    {
      text: "Aenean lacinia bibendum nulla sed est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem nec elit dolor id nibh ultricies vehicula ut id elit sociis natoque penatibus et montes mus.",
      headerText: "Jane Doe",
      subh: "Buffalo, NY",
    },
    {
      text: "Aenean lacinia bibendum nulla sed est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem nec elit dolor id nibh ultricies vehicula ut id elit sociis natoque penatibus et montes mus.",
      headerText: "John Doe 2",
      subh: "Buffalo, NY",
    },
    {
      text: "Aenean lacinia bibendum nulla sed est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem nec elit dolor id nibh ultricies vehicula ut id elit sociis natoque penatibus et montes mus.",
      headerText: "Jane Doe 2",
      subh: "Buffalo, NY",
    },
  ],
  svgClass = "icon-4",
  itemHeaderClass = "item-h-5",
  textAligned = true,
  subhClass = "item-h-9",
}) {
  return (
    <div className="reviews group">
      {items.map((item) => (
        <div
          className={textAligned ? "item aligned" : "item1 item"}
          key={item.headerText}
        >
          <div className={svgClass}>{<QuotationSvgComponent />}</div>
          <p className="text">{item.text}</p>
          <h3 className={itemHeaderClass}>{item.headerText}</h3>

          <span className={subhClass}>{item.subh}</span>
        </div>
      ))}
    </div>
  );
}
