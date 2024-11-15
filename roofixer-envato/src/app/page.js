import Hero from "./ui/hero/hero";
import AboutUs from "./ui/section/about";
import OurServices from "./ui/section/ourservices";
import ProcessSection from "./ui/section/process";
import ProjectSection from "./ui/section/projectSection";
import TestimonialsSection from "./ui/section/testimonials";

export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <AboutUs />
        <OurServices />
        <ProcessSection />
        <ProjectSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
