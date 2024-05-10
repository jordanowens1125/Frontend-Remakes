import "./team.scss";
export default function Team() {
  return (
    <section id="team">
      <div className="container items">
        <div className="item">
          <div className="img-container">
            <img src="team1.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Luke Miller</p>
            <p>Salesman</p>
          </div>
        </div>

        <div className="item">
          <div className="img-container">
            <img src="team2.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Michael Diaz</p>
            <p>Business Owner</p>
          </div>
        </div>

        <div className="item">
          <div className="img-container">
            <img src="team3.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Briana Ross</p>
            <p>Photographer</p>
          </div>
        </div>

        <div className="item">
          <div className="img-container">
            <img src="team4.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Lauren Rivera</p>
            <p>Detailist</p>
          </div>
        </div>

        <div className="item">
          <div className="img-container">
            <img src="team5.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Luca Rico</p>
            <p>Mechanic</p>
          </div>
        </div>

        <div className="item">
          <div className="img-container">
            <img src="team6.png" alt="" />
          </div>

          <div className="info">
            <p className="item-h">Caitlyn Hunt</p>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}
