import { LEFT, RIGHT } from "@/app/constants/icons";
import ProductDisplay2 from "../products/product-2-display";

export default function ProductBox({ list }) {
  return (
    <div className="box shadow radius" key={list.title}>
      <div className="flexsb">
        <p>{list.title}</p>
        <div className="sliderbuttons">
          <button className="sliderbutton tertiary-bg circle">
            <img src={LEFT} alt="" className="icon" />
          </button>
          <button className="sliderbutton tertiary-bg circle">
            <img src={RIGHT} alt="" className="icon" />
          </button>
        </div>
      </div>
      {list.items.map((item) => {
        return <ProductDisplay2 product={item} key={item.name} />;
      })}
    </div>
  );
}
