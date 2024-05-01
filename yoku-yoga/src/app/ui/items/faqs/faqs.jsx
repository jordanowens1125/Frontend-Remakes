import "./faqs.scss";

export default function FAQS({ questions }) {
  return (
    <div className="faqs">
      <input type="radio" name="tab" defaultChecked value="1" id="1" />
      <input type="radio" name="tab" value="2" id="2" />
      <input type="radio" name="tab" value="3" id="3" />
      <input type="radio" name="tab" value="4" id="4" />
      <input type="radio" name="tab" value="5" id="5" />
      <input type="radio" name="tab" value="6" id="6" />
      <div className="tabs" id="tabs">
        <label htmlFor="1">How long do I really need to practice?</label>
        <label htmlFor="2">Which level of class should I choose?</label>
        <label htmlFor="3">What types of classes can I do?</label>
        <label htmlFor="4">What is included in the courses??</label>
        <label htmlFor="5">How can I organize my classes?</label>
        <label htmlFor="6">How much space do I need?</label>
      </div>

      <div className="tab-content">
        <div className="tab-option">
          <p>
            How long you should practice yoga really depends on your personal
            goals, schedule, and lifestyle. While even a short, daily practice
            can offer benefits, we recommend aiming for at least 20-30 minutes
            per session, several times a week, to experience noticeable
            improvements in flexibility, strength, and mental well-being.
          </p>
          <p className="green">
            The modern practice of yoga as a form of exercise developed from
            medieva
          </p>
          <p className="green">
            The book received some positive reviews. Krysta Gibson, reviewing
            the book for New Spirit Journal
          </p>
          <p className="green">
            The critic and yoga teacher Matthew Remski compares historians of
            yoga
          </p>
          <p className="green">
            In Remski’s view, along comes “Goldberg with a dozen years of dogged
            research, a sleuthing style
          </p>
          <p>
            Yoga has traditionally referred to both a school of philosophy and
            many paths for an individual’s soteriological and spiritual
            practice. These historical texts mention asanas, but the posture
            practice is but one step.
          </p>
        </div>

        <div className="tab-option">
          <h3>Renovation</h3>
          <p>Renovation</p>
        </div>

        <div className="tab-option">
          <h3>Consulting</h3>
          <p>Consulting</p>
        </div>

        <div className="tab-option">
          <h3>Contractor</h3>
          <p>Contractor</p>
        </div>

        <div className="tab-option">
          <h3>Architecture</h3>
          <p>Architecture</p>
        </div>

        <div className="tab-option">
          <h3>Planning</h3>
          <p>Planning</p>
        </div>
      </div>
    </div>
  );
}
