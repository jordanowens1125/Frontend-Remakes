import Hero from "./ui/hero/hero";
import HowItWorks from "./ui/section/howitworks";
import OurServices from "./ui/section/ourservices";
import OurStory from "./ui/section/ourstory";
import Whychooseus from "./ui/section/whychooseus";

export default function Home() {
  return (
    <div>
      <main>
       
        <Hero/>
        <OurStory />
        <OurServices />
        <Whychooseus />
        <HowItWorks />
      </main>
    </div>
  );
}
