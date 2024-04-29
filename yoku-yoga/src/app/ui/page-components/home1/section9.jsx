export default function HomeSection8() {
  return (
    <div id="newsletter">
      <section className="container">
        {" "}
        <div className="content">
          <div className="img-container">
            <img src="home1/email.png" alt="" />
            <div className="circle"></div>
          </div>

          <h4>Subscribe to our newsletter</h4>
          <p>Get updates for new classes and new products</p>
          <form>
            <input type="text" placeholder="Your Email Address" />
            <button className="btn-6" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className="background">
        <img src="home1/cta.jpg" alt="" />
      </div>
    </div>
  );
}
