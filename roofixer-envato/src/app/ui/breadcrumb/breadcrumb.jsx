import DoubleChevronSvgComponent from "@/app/svgs/double-chevron";
import "./breadcrumb.scss";
import Link from "next/link";
import BottomTriangleElement from "../img-containers/bottomtriangle";
export default function BreadCrumb({ page, triangleColor = "#fff" }) {
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
      <BottomTriangleElement bgColor={triangleColor} />
    </section>
  );
}
