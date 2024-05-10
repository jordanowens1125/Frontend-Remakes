import PhoneSvgComponent from "../icons/phone";
import "./banner2.scss";
export default function Banner2() {
  return (
    <section id="banner2">
      <div className="container">
        <h2>Book a car by getting in touch with us</h2>

        <a href="tel:123-456-7890">
          <PhoneSvgComponent />
          <p href="tel:123-456-6789"> (123) 456-7869 </p>
        </a>
      </div>
    </section>
  );
}
