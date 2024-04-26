import ContactHeading from "../contact-1/contact-heading";
import ContactForm from "../form";
import Links from "../links";

export default function ContactSection2() {
  return (
    <section className="contact contact-2">
      <ContactHeading />
      <div className="sbs container">
        <div className="left">
          <p className="section-h">Leave us your info</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid unde est fugiat voluptatem vitae numquam voluptatum
            explicabo optio totam magnam accusamus dolorem eum illo voluptatibus
            veniam adipisci, quod saepe.
          </p>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Full Name"
              className="name"
              required
            />
            <input type="text" placeholder="Email" className="email" required />
            <input
              type="text"
              placeholder="Subject"
              className="subject"
              required
            />
            <textarea
              id="w3review"
              name="w3review"
              rows="6"
              placeholder="Message"
              className="message"
              required
            />
            <button className="btn-7" type="submit">
              Submit Now
            </button>
          </form>
        </div>
        <div className="right"></div>
      </div>

      <Links />
    </section>
  );
}
