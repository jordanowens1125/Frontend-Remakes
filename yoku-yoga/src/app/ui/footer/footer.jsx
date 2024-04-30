import {
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  PINTEREST,
  TWITTER,
} from "@/app/constants/icons";
import './footer.scss'

export default function Footer() {
  return (
    <>
      <footer>
        <section className="upperfooter">
          <div className="container">
            <div className="logo">
              <img src="" alt="Yoku Logo" className="logo-img" />
              <p>
                Far far away, behind the word mountains, far from countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they.
              </p>
            </div>

            <div className="quicklinks">
              <p className="footer-heading">Quick Links</p>
              <div className="items">
                <a href="/pricing">Pricing</a>
                <a href="/pricing">Become Instructor</a>
                <a href="/pricing">Courses</a>
                <a href="/pricing">Contact Us</a>
                <a href="/pricing">FAQ</a>
                <a href="/pricing">Privacy Policy</a>
                <a href="/pricing">Terms of Service</a>
                <a href="/pricing">Support Center</a>
              </div>
            </div>

            <div className="contact">
              <p className="footer-heading">Contact Info</p>
              <div className="address">
                <p>1810 King Way</p>
                <p>King Street, 5th Avenue, New York</p>
              </div>

              <div className="items">
                <a className="item">
                  <img src="" alt="Phone" />
                  <p>1800-234-2356</p>
                </a>
                <a className="item">
                  <img src="" alt="Email" />
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
              <img src={FACEBOOK} alt="Facebook logo" />
              <img src={LINKEDIN} alt="Linkedin logo" />
              <img src={PINTEREST} alt="Pinterest logo" />
              <img src={TWITTER} alt="X logo" />
              <img src={INSTAGRAM} alt="Instagram logo" />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
