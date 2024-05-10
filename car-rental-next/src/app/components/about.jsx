import "./about.scss";
export default function About() {
  return (
    <section id="about">
      {" "}
      <div className="container sbs">
        <img src="about.jpg" alt="" className="left" />
        <div className="right">
          <h3 className="header">About Company</h3>
          <h2 className="subheader">
            You star the engine and your adventure begins
          </h2>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eaque iste aut blanditiis sit, quos minus dolorem
            itaque aperiam temporibus laboriosam? Beatae, cum animi culpa
            necessitatibus minus illo? Recusandae, ipsam! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Doloribus velit, eligendi ducimus
            accusantium molestiae mollitia? Beatae vero a aliquam eveniet nam
            magni, ea magnam accusantium similique nisi nihil, quos facilis!
          </p>
          <div className="items">
            <div className="item">
              <img src="about1.png" alt="" />
              <p className="item-h">20</p>
              <p className="text">Car Types</p>
            </div>

            <div className="item">
              <img src="about2.png" alt="" />
              <p className="item-h">85</p>
              <p className="text">Rental Outlets</p>
            </div>

            <div className="item">
              <img src="about3.png" alt="" />
              <p className="item-h">75</p>
              <p className="text">Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
