import ContactItems from "./items";
import ContactForm from "../form";
import FullMap from "./fullmap";
import Links from "../links";
import ContactHeading from "./contact-heading";

export default function ContactSection1() {
  return (
    <div className="contact contact-1">
      <ContactHeading />
      <ContactItems />
      <ContactForm />
      <FullMap />
      <Links />
    </div>
  );
}
