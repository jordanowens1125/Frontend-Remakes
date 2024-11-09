import ALLICONS from "./icons/ALLICONS";
import Banner1 from "./ui/banners/banner1";
import Banner2 from "./ui/banners/banner2";
import BreadCrumb from "./ui/breadcrumb/breadcrumb";
import Buttons from "./ui/buttons";
import Contact from "./ui/contact/contact";
import FAQS from "./ui/faqs/faqs";
import Footer from "./ui/footer/footer";
import Process from "./ui/groups/process";
import Projects2 from "./ui/groups/projects2";
import Services1 from "./ui/groups/services1";
import Services2 from "./ui/groups/services2";
import Stats from "./ui/groups/stats";
import Team from "./ui/groups/team";
import Hero from "./ui/hero/hero";
import Nav from "./ui/nav/nav";
import About1 from "./ui/sbs/about1";
import Reviews from "./ui/sbs/reviews";
import WhatWeDo from "./ui/sbs/what-we-do";
import Whyus1 from "./ui/sbs/whyus1";

export default function Home() {
  return (
    <div>
      <main></main>

      {/* <Buttons /> */}

      {/* <Hero />
      <Services1 /> */}
      {/* <About1 />
      <WhatWeDo />
      
       */}
      <Hero />
      <Services2 />
      <About1 />
      <Whyus1 />
      <Process />
      <Projects2 />
      <Reviews />
    </div>
  );
}
