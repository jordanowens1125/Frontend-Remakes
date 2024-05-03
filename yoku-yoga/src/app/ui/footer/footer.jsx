import FacebookSvgComponent from "@/app/icons/facebook";
import "./footer.scss";
import LinkedinSvgComponent from "@/app/icons/linkedin";
import TwitterComponent from "@/app/icons/twitter";
import PinterestSvgComponent from "@/app/icons/pinterest";
import InstagramSvgComponent from "@/app/icons/instagram";
import EmailSvgComponent from "@/app/icons/email";
import PhoneSvgComponent from "@/app/icons/phone";
import { WHITELOGO } from "@/app/constants/icons";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="upperfooter">
          <div className="container">
            <div className="logo">
              <img src={WHITELOGO} alt="Yoku Logo" className="logo-img" />
              <p>
                Far far away, behind the word mountains, far from countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they.
              </p>
            </div>

            <div className="quicklinks">
              <p className="footer-header">Quick Links</p>
              <div className="items">
                {/* <a href="/">Pricing</a> */}
                <a href="/instructors1">Become Instructor</a>
                <a href="/courselist1">Courses</a>
                <a href="/contact1">Contact Us</a>
                <a href="/faq">FAQ</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Service</a>
                <a href="/">Support Center</a>
              </div>
            </div>

            <div className="contact">
              <p className="footer-header">Contact Info</p>
              <div className="address">
                <p>1810 King Way</p>
                <p>King Street, 5th Avenue, New York</p>
              </div>

              <div className="items">
                <a className="item">
                  <PhoneSvgComponent fill="transparent" />
                  <p>1800-234-2356</p>
                </a>
                <a className="item">
                  <EmailSvgComponent fill="transparent" />
                  <p>contact@yokuyoga.co</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lowerfooter">
          <div className="container">
            <p>Copyright @ 2024 Goodlayers. All Rights Reserved.</p>
            <div className="links">
              <FacebookSvgComponent />
              <LinkedinSvgComponent />
              <TwitterComponent />
              <PinterestSvgComponent />
              <InstagramSvgComponent />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
