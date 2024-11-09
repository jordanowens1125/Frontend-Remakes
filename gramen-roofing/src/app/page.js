import Process from "./ui/groups/process";
import Projects2 from "./ui/groups/projects2";
import Services2 from "./ui/groups/services2";
import Hero from "./ui/hero/hero";
import About1 from "./ui/sbs/about1";
import Reviews from "./ui/sbs/reviews";
import Whyus1 from "./ui/sbs/whyus1";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services2 />
        <About1 />
        <Whyus1 />
        <Process />
        <Projects2 />
        <Reviews />
      </main>
    </div>
  );
}
