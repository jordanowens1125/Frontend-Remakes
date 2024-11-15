import FAQSLIST from "@/app/constants/faqs";
import QuotationSvgComponent from "@/app/icons/quotations";
import "./faqs.scss";

export default function FAQSGroup() {
  return (
    <div className="group faqsgroup">
      {FAQSLIST.map((item) => (
        <div key={item.question} className="item">
          <div className="icon-5">
            <QuotationSvgComponent />
          </div>
          <div className="info">
            <span className="item-h-2">{item.question}</span>
            <p className="text">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
