import PROJECTSLIST from "@/app/constants/projects";

export default function Projects1Group() {
  return (
    <div className="group">
      {PROJECTSLIST.map((item) => (
        <div key={item.title} className="item">
          <div className="overlay"></div>
          <img src={item.img} alt={item.title} />
          <div className="info">
            <span className="item-h-1">{item.title}</span>
            <p className="item-h-7">{item.subh}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
