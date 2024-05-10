import "./contact.scss";
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="left">
          <h2 className="header">Need additional info?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo
            nostrum magnam. Maxime nemo quia, illum dolores, vitae in voluptate
            fugiat, tenetur mollitia ea amet totam. Consequuntur voluptate rem
            cupiditate.
          </p>
          <div className="items">
            <a href="">(562) 498-4600</a>
            <a href="">xyz@carrental.com</a>
            <a href="">Level 1, 121 King Street Melbourne, 3000, Australia</a>
          </div>
        </div>
        <form className="right">
          <span>
            <label htmlFor="Name">Full Name</label>
            <input type="text" placeholder="Full name" />
          </span>
          <span>
            <label htmlFor="Name">Email Address</label>
            <input type="text" placeholder="Email Address" />
          </span>

          <span>
            <label htmlFor="Name">Tell me about it</label>
            <textarea rows="4" cols="50" placeholder="Write here.."></textarea>
          </span>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}
