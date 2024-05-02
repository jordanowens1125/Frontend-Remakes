import { GREYBG } from "../constants/backgroundClasses";
import Courselist4 from "../ui/items/courses/courselist4";
import PageHeader1 from "../ui/page-headers/pageheader1";

export default function Page() {
  return (
    <>
      <PageHeader1 header={"Offline Classes"} />
      <section >
        <div className="container">
          <Courselist4 />
        </div>
      </section>
    </>
  );
}
