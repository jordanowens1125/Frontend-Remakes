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
        <label htmlFor="4">What is included in the courses?</label>
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
          <p className="green">Beginner Bliss:</p>
          <p>
            Dive into the fundamentals with our Beginner Level classes! Perfect
            for those new to yoga or seeking a refresher on the basics. Learn
            proper alignment, foundational poses, and breath work to kickstart
            your practice with confidence.
          </p>
          <p className="green"> Intermediate Insight:</p>
          <p>
            Our Intermediate Level classes are designed to challenge and
            inspire! Explore more advanced poses, refine your alignment, and
            delve into the subtleties of yoga sequencing to take your practice
            to new heights
          </p>
          <p className="green">Advanced Asanas:</p>
          <p>
            Elevate your practice to the next level with our Advanced Level
            classes! Delve into intricate poses, harness the power of pranayama
            and meditation, and unlock the profound wisdom of yoga philosophy.
            Suitable for seasoned practitioners seeking to explore the full
            spectrum of yoga.
          </p>
        </div>

        <div className="tab-option">
          <p className="green">Hatha Yoga:</p>
          <p>
            Dive into the foundational aspects of yoga with our Hatha Yoga
            classes, focusing on alignment, breath awareness, and mindful
            movement to cultivate strength, flexibility, and balance.
          </p>
          <p className="green">Vinyasa Flow:</p>
          <p>
            Flow with your breath in our dynamic Vinyasa Flow classes, where
            fluid sequences and creative transitions synchronize movement and
            breath, leaving you feeling energized, centered, and revitalized.
          </p>
          <p className="green">Yin Yoga:</p>
          <p>
            Unwind and release tension with our Yin Yoga classes, featuring
            gentle, long-held poses designed to target deep connective tissues
            and promote relaxation, flexibility, and inner peace.
          </p>
          <p className="green">Power Yoga:</p>
          <p>
            Ignite your inner fire and challenge your limits with our Power Yoga
            classes, combining strength-building poses, cardiovascular elements,
            and breath work to enhance endurance, vitality, and mental focus.
          </p>
        </div>

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
          <p>
            Class Schedule: We maintain a well-defined and consistent class
            schedule that offers a variety of class times throughout the week.
            This allows our participants to find classes that fit their busy
            schedules and make yoga a regular part of their routine.
          </p>

          <p>
            Class Variety: We offer a diverse range of classes, including Hatha,
            Vinyasa, Yin, Power, Restorative, and Meditation, to cater to
            different preferences and needs. Our classes range from
            beginner-friendly sessions to advanced practices, ensuring there's
            something for everyone.
          </p>

          <p>
            Level Differentiation: Each class is clearly labeled with its level
            of difficulty, making it easy for participants to select classes
            that match their skill level and experience. Whether you're new to
            yoga or a seasoned practitioner, we have classes tailored to your
            needs.
          </p>
        </div>

        <div className="tab-option">
          <p>
            For a comfortable yoga class, aim for a space approximately 20 feet
            by 20 feet with a ceiling height of at least 8 feet. Choose a flat,
            non-slip surface and prioritize good ventilation and lighting.
            Accessibility and positive energy are key, whether you're practicing
            in a studio, community center, or at home.
          </p>
        </div>
      </div>
    </div>
  );
}
