import { DARKGREENBG, GREYBG } from "../constants/backgroundClasses";
import ContactForm from "../ui/contact/form";
import Contact1Items from "../ui/items/contact/contact1";
import FullMap from "../ui/map/fullmap";
import PageHeader1 from "../ui/page-headers/pageheader1";
import Socials from "../ui/socials/socials";

export default function Page() {
  return (
    <main>
      <PageHeader1 header={"Contact Us"} subheader={"Get In Touch"} />
      <Contact1Items classes={DARKGREENBG} />
      <section className={GREYBG}>
        <ContactForm />
      </section>

      <FullMap />
      <Socials />
    </main>
  );
}
