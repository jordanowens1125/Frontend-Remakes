import { GREYBG } from "../constants/backgroundClasses";
import Contact3Items from "../ui/contact/contact3items";
import ContactForm from "../ui/contact/form";
import PageHeader1 from "../ui/page-headers/pageheader1";
import Socials from "../ui/socials/socials";

PageHeader1;

export default function Page() {
  return (
    <main>
      <PageHeader1 header={"Contact Us"} subheader={"Get In Touch"} />
      <Contact3Items />
      <section className={GREYBG}>
        <ContactForm />
      </section>

      <Socials />
    </main>
  );
}
