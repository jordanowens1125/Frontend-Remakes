import EmailSvgComponent from "@/app/icons/email";
import "./socials.scss";
import FacebookSvgComponent from "@/app/icons/facebook";
import SkypeSvgComponent from "@/app/icons/skype";
import TwitterComponent from "@/app/icons/twitter";

export default function Socials({ sectionID, classes }) {
  return (
    <section className={classes} id={sectionID}>
      <div className="container contact-link-icons">
        <a href="mailto:jordanowens1125@gmail.com">
          <EmailSvgComponent fill="transparent" />
        </a>
        <a href="/">
          <FacebookSvgComponent />
        </a>
        {/* <a href="/">
          <img src="linkedin.svg" alt="" />
        </a> */}
        <a href="/">
          <SkypeSvgComponent />
        </a>
        <a href="/">
          <TwitterComponent />
        </a>
      </div>
    </section>
  );
}
