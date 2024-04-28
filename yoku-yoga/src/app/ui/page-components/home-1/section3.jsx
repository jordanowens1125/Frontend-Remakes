import { RIGHT } from "@/app/constants/icons";

export default function HomeSection3() {
  return (
    <section id="classes">
      <div className="container">
        <div className="top">
          <h2 className="heading">Popular Online Classes</h2>
          <p>
            A meditative means of discovering dysfunctional perception and
            cognition, as well as overcoming it to release any suffering, find
            inner peace and salvation.
          </p>
          <button>
            Browse All Classes <img src={RIGHT} alt="Arrow" />
          </button>
        </div>
      </div>

      <div className="items">
        <div className="item">
          <div className="img-container">
            <img src="" alt="" />
            <div className="content-items">
              <div className="content-item">
                6 <img src="" alt="" />
              </div>
              <div className="content-item">
                6 <img src="" alt="" />
              </div>
              <div className="content-item">
                6 <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className="item-info">
            <p>With Jane Smith</p>
            <p>Yoga for Beginners Course</p>
            <p>$39</p>
          </div>
        </div>
      </div>
    </section>
  );
}
