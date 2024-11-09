import Link from "next/link";
import "./notfound.scss";
import BreadCrumb from "./ui/breadcrumb/breadcrumb";

export default function Page() {
  return (
    <section className="notfound">
      <BreadCrumb page={"404"} />
      <div className="container">
        <div className="group">
          <h1>404</h1>
          <h3 className="item-h-4">Whoops! Page Not Found</h3>
          <Link href={"/"} className="btn-1">
            {" "}
            Back To Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
