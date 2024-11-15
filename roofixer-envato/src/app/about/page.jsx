import Banner3 from "../ui/banners/banner4";
import LogoBanner1 from "../ui/banners/logobanner1";
import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import StatsGroup from "../ui/groups/stats";
import TeamGroup from "../ui/groups/team";
import ContractorsSection from "../ui/section/contractors";
import HowItWorks from "../ui/section/howitworks";
import OurStory from "../ui/section/ourstory";
import TeamSection from "../ui/section/team";
import Whychooseus from "../ui/section/whychooseus";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"About"} />
      <ContractorsSection/>
      <TeamSection/>
    </main>
  );
}
