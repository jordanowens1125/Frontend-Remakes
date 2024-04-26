export default function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <h3 className="section-head">Leave us your info</h3>
        <p className="section-subhead">and we will get back to you.</p>
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
    </section>
  );
}
