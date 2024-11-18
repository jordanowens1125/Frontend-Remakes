import DoubleChevronSvgComponent from "@/app/svgs/double-chevron";
import "./breadcrumb.scss";
import Link from "next/link";
export default function BreadCrumb({ page }) {
  return (
    <section id="breadcrumb">
      <div className="container">
        <h2 className="header">{page}</h2>
        <span>
          <Link href={"/"}>Home</Link>
          <DoubleChevronSvgComponent />
          <p>{page}</p>
        </span>
      </div>
      <div className="img-container"></div>
    </section>
  );
}
