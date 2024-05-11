import "./faqs.scss";
import SectionHeader1 from "./sectionheader1";
export default function FAQS() {
  return (
    <section id="faqs">
      <div className="container accordion">
        <SectionHeader1
          header={"Frequently Asked Questions"}
          subheader={"FAQ"}
          text={
            "Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries."
          }
        />
        <input type="checkbox" id="1" name="1" value="1" defaultChecked />
        <input type="checkbox" id="2" name="2" value="2" />
        <input type="checkbox" id="3" name="3" value="3" />
        <div className="items">
          <div className="item">
            <label htmlFor="1">
              1. What is special about comparing rental car deals?
            </label>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div className="item">
            <label htmlFor="2">2. How do I find the car rental deals?</label>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div className="item">
            <label htmlFor="3">
              3. How do I find such low rental car prices?
            </label>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
