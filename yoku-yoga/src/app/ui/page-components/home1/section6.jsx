import Companies from "../../items/companies";

export default function HomeSection6() {
  return (
    <section id="featured-in">
      <div className="container">
        <h3>We are featured in</h3>
        {<Companies />}
      </div>
    </section>
  );
}
