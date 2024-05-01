import FAQS from "../ui/items/faqs/faqs";
import PageHeader2 from "../ui/page-headers/pageheader2";

export default function Page() {
  return (
    <>
      <PageHeader2 header={"FAQS"} />
      <section>
        <div className="container">
          <FAQS />
        </div>
      </section>
    </>
  );
}
