import { EYE, HEART, LEFT, RIGHT } from "@/app/constants/icons";

export default function ProductDisplay1({ product }) {
  // const discount = product.oldprice
  //   ? Math.round(product.oldprice - product.updatedprice / product.oldprice)
  //   : null;

  // console.log(product.discount);

  const UpdateFavorites = (item) => {
    console.log(item);
  };

  const AddToCart = (item) => {
    console.log(item);
  };

  return (
    <>
      <div className="product-display-1">
        <div className="image">
          <div className="actions radius">
            <img
              src={HEART}
              alt="Heart"
              className="icon"
              onClick={() => UpdateFavorites(product)}
            />
            <img src={EYE} alt="Eye" className="icon" />
          </div>

          {/* {discount && <div className="discount">{discount}%</div>} */}

          <img
            src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-product-12.jpg?v=17065204288"
            alt=""
          />
        </div>
        <p>{product.name}</p>
        <select name="size" id="" className="radius">
          <option value="1">1kg</option>
          <option value="2">2kg</option>
          <option value="3">3kg</option>
          <option value="5">5kg</option>
        </select>
        <div className="amount radius">
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
        <div className="info">
          <div className="prices">
            <p className="updatedprice">${product.updatedPrice}</p>
            {product.oldPrice && (
              <p className="oldprice">${product.oldPrice}</p>
            )}
          </div>
          <span className="rating radius">
            <img src={HEART} alt="Heart" className="icon" />
            <p>{product.rating}.0</p>
          </span>
        </div>
        <button
          className="tertiary-btn radius"
          onClick={() => AddToCart(product)}
        >
          {" "}
          Add to cart
        </button>
      </div>
    </>
  );
}
