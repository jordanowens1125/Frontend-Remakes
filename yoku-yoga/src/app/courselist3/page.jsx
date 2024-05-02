import Courselist3 from "../ui/items/courses/courselist3";
import PageHeader1 from "../ui/page-headers/pageheader1";
export default function Page() {
  return (
    <>
      <PageHeader1 header={"Course List 3"} />
      <section>
        <div className="container">
          <Courselist3 />
        </div>
      </section>
    </>
  );
}
