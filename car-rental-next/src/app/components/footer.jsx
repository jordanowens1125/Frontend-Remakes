import "./footer.scss";
export default function Footer() {
  return (
    <section id="footer">
      <footer className="section-name">
        <div className="container">
          <div className="footer-s">
            <p className="logo">
              <b>Car</b>Rental
            </p>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion.
            </p>
            <div className="links">
              <a href="">(123) 498-4600</a>
              <a href="">example@carrental.com</a>
              <a href="https://xpeedstudio.com/">Design by XpeedStudio</a>
            </div>
          </div>

          <div className="footer-s">
            <p className="footer-h">Company</p>
            <div className="items">
              <p>New York</p>
              <p>Careers</p>
              <p>Mobile</p>
              <p>Blog</p>
              <p>How we work</p>
            </div>
          </div>

          <div className="footer-s">
            <p className="footer-h">Working Hours</p>
            <div className="items">
              <p>
                <span>Mon - Fri:</span>9:00AM - 9:00PM
              </p>
              <p>
                <span>Sat:</span>9:00AM - 7:00PM
              </p>
              <p>
                <span>Sun:</span>Closed
              </p>
            </div>
          </div>

          <div className="footer-s">
            <p className="footer-h">Subscription</p>
            <p>Subscribe your email address for latest news and updates.</p>
            <input type="text" placeholder="Email Address" />
            <button>Submit</button>
          </div>
        </div>
      </footer>
    </section>
  );
}
