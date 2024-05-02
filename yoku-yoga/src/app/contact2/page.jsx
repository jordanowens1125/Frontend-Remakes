import Contact2Section from "../ui/contact/contact2section";
import PageHeader1 from "../ui/page-headers/pageheader1";
import Socials from "../ui/socials/socials";

export default function Page() {
  return (
    <main>
      <PageHeader1 header={"Contact Us"} subheader={"Get In Touch"} />
      <Contact2Section />
      <Socials />
    </main>
  );
}
