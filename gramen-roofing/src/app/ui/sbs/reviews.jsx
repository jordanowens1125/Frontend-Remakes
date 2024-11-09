import Reviews from "../groups/reviews";
import Header1Aligned from "../headings/header1-aligned";
import "./reviews.scss";

export default function IDK() {
  return (
    <section className="reviews-form">
      <div className="container ">
        <Header1Aligned
          span={"Book Appointment"}
          header={"Roofing Services Available"}
        />
        <Reviews />
      </div>
    </section>
  );
}
