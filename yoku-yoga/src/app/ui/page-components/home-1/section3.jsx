import { RIGHT } from "@/app/constants/icons";

export default function HomeSection3() {
  return (
    <section id="classes">
      <h2>Popular Online Classes</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        laboriosam rerum velit, ipsam sed ratione labore nostrum fugit, numquam
        corporis culpa vel repudiandae, voluptatum aperiam voluptate? Molestias
        cum ea obcaecati.
      </p>
      <button>
        Browse All Classes <img src={RIGHT}></img>
      </button>
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
