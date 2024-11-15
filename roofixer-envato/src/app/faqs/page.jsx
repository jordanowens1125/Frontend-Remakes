import BreadCrumb from "../ui/breadcrumb/breadcrumb";
import FAQSGroup from "../ui/groups/faqs";

export default function Page() {
  return (
    <main>
      <BreadCrumb page={"FAQS"} />
      <section id="faqs">
        <div className="container">
          <FAQSGroup />
        </div>
      </section>
    </main>
  );
}
