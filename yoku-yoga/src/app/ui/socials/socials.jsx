import "./socials.scss";

export default function Socials({ sectionID, classes }) {
  return (
    <section className={classes} id={sectionID}>
      <div className="container contact-link-icons">
        <a href="/">
          <img src="mail.svg" alt="" />
        </a>
        <a href="/">
          <img src="facebook.svg" alt="" />
        </a>
        {/* <a href="/">
          <img src="linkedin.svg" alt="" />
        </a> */}
        <a href="/">
          <img src="skype.svg" alt="" />
        </a>
        <a href="/">
          <img src="twitter.svg" alt="" />
        </a>
      </div>
    </section>
  );
}
