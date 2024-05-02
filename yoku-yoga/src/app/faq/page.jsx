import FAQS from "../ui/items/faqs/faqs";
import PageHeader2 from "../ui/page-headers/pageheader2";
import './faq.scss'
export default function Page() {
  return (
    <>
      <PageHeader2 header={"FAQS"} />
      <section id='faq-section'>
        <div className="container">
          <FAQS />
        </div>
      </section>
    </>
  );
}
