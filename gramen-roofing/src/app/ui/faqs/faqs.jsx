import DoubleChevronSvgComponent from "@/app/icons/double-chevron";
import "./faqs.scss";
import Header1 from "../headings/header1";

export default function FAQS() {
  const items = [
    {
      question: "",
      answer: "",
    },
  ];
  return (
    <section className="faqs">
      <div className="container accordion">
        <Header1 span={"FAQ"} header={"Frequently Asked Questions"} />
        <input type="checkbox" id="1" name="1" value="1" />
        <input type="checkbox" id="2" name="2" value="2" />
        <input type="checkbox" id="3" name="3" value="3" />
        <div className="items">
          <div className="item">
            <label htmlFor="1">
              1. What is special about comparing rental car deals?
              <DoubleChevronSvgComponent />
            </label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              excepturi asperiores obcaecati eaque at atque iure, eligendi nobis
              suscipit qui corrupti? Voluptas reprehenderit culpa excepturi est
              esse impedit, cumque numquam.
            </p>
          </div>

          <div className="item">
            <label htmlFor="2">
              1. What is special about comparing rental car deals?
              <DoubleChevronSvgComponent />
            </label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              excepturi asperiores obcaecati eaque at atque iure, eligendi nobis
              suscipit qui corrupti? Voluptas reprehenderit culpa excepturi est
              esse impedit, cumque numquam.
            </p>
          </div>

          <div className="item">
            <label htmlFor="3">
              2. What is special about comparing rental car deals?
              <DoubleChevronSvgComponent />
            </label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              excepturi asperiores obcaecati eaque at atque iure, eligendi nobis
              suscipit qui corrupti? Voluptas reprehenderit culpa excepturi est
              esse impedit, cumque numquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
