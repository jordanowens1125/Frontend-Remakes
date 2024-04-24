"use client";

import { useRouter, usePathname } from "next/navigation";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  console.log(convertBreadcrumb(pathname));

  return (
    <div aria-label="breadcrumbs-banner">
      <div className="img-container">
        <img
          src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-readcrumbs.jpg?v=1709983325&width=1500"
          alt=""
        />

        <div>
          <span className="breadcrumb-content container">
            <div className="links">
              <a href="/">Home</a>-<a href={pathname}>{pathname}</a>
            </div>

            <p className="current-breadcrumb">{pathname}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
