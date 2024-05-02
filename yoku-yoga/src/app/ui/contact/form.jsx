import "./form.scss";

export default function ContactForm() {
  return (
      <form className="contact-form">
        <h3 className="header">Leave us your info</h3>
        <p className="subheader">and we will get back to you.</p>
        <input type="text" placeholder="Full Name" className="name" required />
        <input type="text" placeholder="Email" className="email" required />
        <input type="text" placeholder="Subject" className="subject" required />
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
  );
}
