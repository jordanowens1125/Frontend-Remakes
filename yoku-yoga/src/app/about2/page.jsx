import About2Section1 from "../ui/page-components/about2/1-about";
import About2Section2 from "../ui/page-components/about2/2-clear-mind";
import About2Section3 from "../ui/page-components/about2/3-stats";
import About2Section4 from "../ui/page-components/about2/4-where-are-we-from 4";
import About2Section5 from "../ui/page-components/about2/5-strength";

import '../ui/page-components/about2/about2.scss'

export default function Page() {
  return (
    <>
      <About2Section1 />
      <About2Section2 />
      <About2Section3 />
      <About2Section4 />
      <About2Section5 />
      {/* newsletter placeholder */}
      <About2Section1 />
    </>
  );
}
