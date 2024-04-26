import './globals.scss'
import './ui/page-components/home-1/home1.scss'
import HeroSection1 from './ui/page-components/home-1/sectionhero'
import HeroSection2 from "./ui/page-components/home-1/section2";
import HeroSection3 from "./ui/page-components/home-1/section3";
import HeroSection4 from "./ui/page-components/home-1/section4";
import HeroSection5 from "./ui/page-components/home-1/section5";
import HeroSection6 from "./ui/page-components/home-1/section6";
import HeroSection7 from "./ui/page-components/home-1/section7";
import HeroSection8 from "./ui/page-components/home-1/section8";
import HeroSection9 from "./ui/page-components/home-1/section9";

export default function Home() {
  return (
    <main className="">
      <div className="col">
        <button className="btn-1">Button 1</button>
        <button className="btn-2">Button 2</button>
        <button className="btn-3">Button 3</button>
        <button className="btn-4">Button 4</button>
        <button className="btn-5">Button 5</button>
        <button className="btn-6">Button 6</button>
        <button className="btn-7">Button 7</button>
        <button className="btn-8">Button 8</button>
        <button className="btn-9">Button 9</button>
      </div>
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
      <HeroSection8 />
      <HeroSection9 />
    </main>
  );
}
