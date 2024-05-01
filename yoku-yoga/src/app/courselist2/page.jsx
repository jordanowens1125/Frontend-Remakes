import PageHeader1 from "../ui/page-headers/pageheader1";
import CourseList2 from "../ui/items/courses/courselist2";
import { GREYBG } from "../constants/backgroundClasses";
export default function Page() {
  return (
    <>
      <PageHeader1 header={"Course List 2"} />
      <section className={GREYBG}>
        <div className="container">
          <CourseList2 />
        </div>
      </section>
    </>
  );
}
