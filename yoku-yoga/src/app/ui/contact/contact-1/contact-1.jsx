import ContactItems from "./items";
import ContactForm from "../form";
import FullMap from "./fullmap";
import Links from "../links";
import ContactHeader from "./contact-header";

export default function ContactSection1() {
  return (
    <div className="contact contact-1">
      <ContactHeader />
      <ContactItems />
      <ContactForm />
      <FullMap />
      <Links />
    </div>
  );
}
