import "./faqs.scss";
export default function FAQS() {
  return (
    <section id="faqs">
      <div className="container accordion">
        <input type="checkbox" id="1" name="1" value="1" defaultChecked />
        <input type="checkbox" id="2" name="2" value="2" />
        <input type="checkbox" id="3" name="3" value="3" />
        <div className="items">
          <div className="item">
            <label htmlFor="1">
              1. What is special about comparing rental car deals?
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
