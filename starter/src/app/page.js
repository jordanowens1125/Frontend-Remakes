import Design from "./design/design";
import Banner4 from "./ui/banners/banner4";
import HowItWorks from "./ui/section/howitworks";
import OurServices from "./ui/section/ourservices";
import OurStory from "./ui/section/ourstory";
import Whychooseus from "./ui/section/whychooseus";

export default function Home() {
  return (
    <div>
      <main>
        <Design/>
        <OurStory />
        <OurServices />
        <Whychooseus />
        <HowItWorks />
      </main>
    </div>
  );
}
