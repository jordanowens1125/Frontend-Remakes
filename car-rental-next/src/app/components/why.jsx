import "./why.scss";
export default function Why() {
  return (
    <section id="why">
      <div className="container">
        <img
          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/display_car_image-1024x449.png"
          alt=""
        />
        <div className="sbs">
          <div className="left">
            <h3 className="subheader">Why Choose Us</h3>
            <h2 className="header">Best valued deals you will ever find</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              soluta laboriosam unde atque fuga nostrum modi, quibusdam
              perferendis veritatis quidem, blanditiis maiores eius. Atque
              adipisci minima, vero necessitatibus asperiores perspiciatis!
            </p>
            <button>Find Details</button>
          </div>
          <div className="right items">
            <div className="item">
              <img src="why1.png" alt="" />
              <p className="item-h">Cross Country Drive</p>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>

            <div className="item">
              <img src="why2.png" alt="" />
              <p className="item-h">All Inclusive Pricing</p>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>

            <div className="item">
              <img src="why3.png" alt="" />
              <p className="item-h">No Hidden Charges</p>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
