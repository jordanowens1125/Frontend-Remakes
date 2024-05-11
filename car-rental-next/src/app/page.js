import AppSBS from "./components/app-sbs";
import Banner1 from "./components/banner1";
import BookCarForm from "./components/book-car";
import CarToggle from "./components/cartoggle";
import FAQS from "./components/faqs";
import Features from "./components/features";
import Hero from "./components/hero";
import Reviews from "./components/reviews";
import WhyChooseUs from "./components/why";
export default function Home() {
  return (
    <main>
      <Hero />
      <BookCarForm />
      <Features />
      <CarToggle />
      <Banner1 />
      <WhyChooseUs />
      <Reviews />
      <FAQS />
      <AppSBS />
    </main>
  );
}
