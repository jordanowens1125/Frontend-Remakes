import Header1 from "../headings/header1";
import "./projects1.scss";

export default function Projects1() {
  return (
    <section className="projects1">
      <div className="container">
        <Header1
          span={"Portfolio"}
          header={"Our Latest Projects"}
          button={"All Projects"}
        />
      </div>
      <div className="group">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1730405704088-3d8f36e32b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1730405704088-3d8f36e32b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1730405704088-3d8f36e32b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>

        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1730405704088-3d8f36e32b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
