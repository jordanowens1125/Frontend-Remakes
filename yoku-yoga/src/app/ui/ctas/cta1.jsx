import "./cta1.scss";
import { SEND } from "@/app/constants/icons";

export default function CTA1({
  header = " Subscribe to our newsletter",
  text = "Get updates for new classes and new products",
  button = { className: "btn-3", text: "Subscribe" },
}) {
  return (
    <div className="cta1">
      <h3 className="header">{header}</h3>
      <p>{text}</p>
      <form>
        <span>
          <img src={SEND} alt="Send" />
          <input type="email" placeholder="Your Email Address" />
        </span>
        {button && (
          <button className={button.className} type="submit">
            {button.text}
          </button>
        )}
      </form>
    </div>
  );
}
