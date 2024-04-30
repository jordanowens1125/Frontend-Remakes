import StatList from "../ui/items/statlist";

export default function AboutSection3() {
  return (
    <section id="numbers">
      <div className="container">
        <div className="top">
          <h3 className="sectionhead">What's the numbers</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi enim,
            maxime ratione eos necessitatibus doloremque quae amet ab aliquam!
            Molestias dolorem consequatur magnam quam sed beatae praesentium
            sint tenetur sapiente?
          </p>
          <a href="/courselist1" className="btn-10">
            Browse Courses
          </a>
        </div>
        {/* items stats */}
        {<StatList />}
      </div>
    </section>
  );
}
