import { SEND } from "@/app/constants/icons";
import Companies from "../../items/companies";

export default function AboutSection4() {
  return (
    <section id="newsletter">
      <div className="container">
        {<Companies />}
        <div className="cta">
          <h3 className="cta-heading">Subscribe to our newsletter</h3>
          <p>Get updates for new classes and new products.</p>
          <form>
            <span>
              <img src={SEND} alt="Send" />
              <input type="text" placeholder="Your Email Address" />
            </span>

            <button className="btn-3" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
