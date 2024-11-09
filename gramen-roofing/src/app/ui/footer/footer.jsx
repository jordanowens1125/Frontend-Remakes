import DoubleChevronSvgComponent from "@/app/icons/double-chevron";
import "./footer.scss";
import Link from "next/link";
import TwitterComponent from "@/app/icons/twitter";
import LinkedinSvgComponent from "@/app/icons/linkedin";
import YoutubeSvgComponent from "@/app/icons/youtube";
import SkypeSvgComponent from "@/app/icons/skype";
import MapBanner from "../banners/map";

export default function Footer() {
  return (
    <footer>
      <MapBanner />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-s">
            <p className="logo">
              <img src={null} alt="Logo"/>
            </p>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion.
            </p>
            <p className="sub-h">Working Hours</p>
            <div>
              <p>
                <b>Mon - Sat:</b>
                10:00AM - 4:00PM
              </p>
              <p>
                <b>Sunday:</b> Close
              </p>
            </div>
          </div>
          <div className="footer-s">
            <p className="footer-h">Quick Links</p>
            <div className="items">
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
            </div>
          </div>
          <div className="footer-s">
            <p className="footer-h">Our Services</p>
            <div className="items">
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
              <Link href={"/"}>
                <DoubleChevronSvgComponent />
                Damaged Roofing
              </Link>
            </div>
          </div>
          <div className="footer-s">
            <p className="footer-h">Our Gallery</p>
            <div className="images">
              <Link href={"/"}>
                <img src={null} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={null} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={null} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={null} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="container">
        <div className="bottom">
          <p>All Copyright 2023 by Gramen</p>
          <div className="links">
            <TwitterComponent />
            <LinkedinSvgComponent />
            <YoutubeSvgComponent />
            <SkypeSvgComponent />
          </div>
          <div className="row">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
