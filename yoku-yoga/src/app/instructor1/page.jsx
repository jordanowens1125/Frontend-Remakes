import Instructors1 from "../ui/items/instructors/instructors1";
import PageHeading from "../ui/page-header";

export default function Page() {
  return (
    <>
      <PageHeading heading={"Our Instructors"} />
      <section>
        <div className="container">
          <Instructors1 />
        </div>
      </section>
    </>
  );
}
