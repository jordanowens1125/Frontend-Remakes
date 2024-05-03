import "./cta2.scss";

export default function CTA2({
  sectionID,
  classes,
  input,
  button = { btnClass: "btn-6", text: "Subscribe" },
}) {
  return (
    <>
      <div id={sectionID} className={`${classes}  cta2`}>
        <section className="container">
          <div className="content">
            <div className="img-container">
              <img src="home1/email.png" alt="" />
              <div className="circle"></div>
            </div>

            <h4>Subscribe to our newsletter</h4>
            <p>Get updates for new classes and new products</p>
            <form>
              <input type="text" placeholder="Your Email Address" />
              <button className={button.btnClass} type="submit">
                {button.text}
              </button>
            </form>
          </div>
        </section>
        <div className="background">
          <img src="home1/cta.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
