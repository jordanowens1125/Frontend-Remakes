import "./hero.scss";
export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="left">
          <p className="subheader">Plan your trip now</p>
          <h1 className="header">
            Save <span>big</span> with our car rental
          </h1>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nam
            molestias.
          </p>
          <div className="buttons">
            <a className="btn-1">Book Ride</a>
            <a>Learn More</a>
          </div>
        </div>
        <div className="right">
          <img src="hero.png" alt="" />
          <img src="hero-bg.png" alt="" className="bg-img" />
        </div>
      </div>
    </section>
  );
}
