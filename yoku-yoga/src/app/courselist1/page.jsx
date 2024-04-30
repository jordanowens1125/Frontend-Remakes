import CourseList1 from "../ui/items/courses/courselist1";
import PageHeader1 from "../ui/page-headers/pageheader1";

export default function Page() {
  return (
    <>
      <PageHeader1 header={"Course List 1"} />
      <div className="container">
        <CourseList1 />
      </div>
    </>
  );
}
