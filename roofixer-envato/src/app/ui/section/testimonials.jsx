import { GREY } from "@/app/constants/colors";
import ReviewsGroup from "../groups/reviews";
import Header1 from "../headers/header1";
import BottomTriangleElement from "../img-containers/bottomtriangle";
import TopTriangleElement from "../img-containers/toptriangle";

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <TopTriangleElement bgColor={GREY} />
      <div className="container">
        <Header1 span={"Testimonials"} header="Hear It From Our Clients" />
        <ReviewsGroup />
      </div>
    </section>
  );
}
