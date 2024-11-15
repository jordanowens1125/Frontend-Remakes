import Banner3 from "../ui/banners/banner4";
import LogoBanner1 from "../ui/banners/logobanner1";
import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import StatsGroup from "../ui/groups/stats";
import HowItWorks from "../ui/section/howitworks";
import OurStory from "../ui/section/ourstory";
import OurTeam from "../ui/section/ourteam";
import Whychooseus from "../ui/section/whychooseus";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"About"} />
      <OurStory />
      <Whychooseus />
      <HowItWorks />
      <Banner3 />
      <OurTeam />
      <section className="container">
        <StatsGroup />
      </section>
      <LogoBanner1 />
    </main>
  );
}
