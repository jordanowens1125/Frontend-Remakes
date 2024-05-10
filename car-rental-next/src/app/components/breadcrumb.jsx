import "./breadcrumb.scss";
export default function BreadCrumb({page}) {
  return (
    <section id="breadcrumb">
      <div className="container">
        <h1 className="header">{page}</h1>
        <span>
          <a href="/">Home</a>
          <p>/</p>
          <p>{page}</p>
        </span>
      </div>
    </section>
  );
}
