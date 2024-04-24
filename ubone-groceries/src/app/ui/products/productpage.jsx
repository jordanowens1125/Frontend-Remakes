import {
  AMEX,
  DISCOVER,
  HEART,
  MASTERCARD,
  PAYPAL,
  VISA,
} from "@/app/constants/icons";
import ProductDisplay1 from "./product-1-display";
import PRODUCTS from "@/app/constants/products";

export default function ProductPage() {
  function zoomIn(event) {
    const element = document.getElementById("overlay");
    element.style.display = "inline-block";
    const img = document.getElementById("imgZoom");
    const posX = event.offsetX ? event.offsetX : event.pageX - img.offsetLeft;
    const posY = event.offsetY ? event.offsetY : event.pageY - img.offsetTop;
    element.style.backgroundPosition = -posX * 4 + "px " + -posY * 4 + "px";
  }

  function zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  }

  return (
    <>
      <section className="container product-page">
        <div className="upper-product">
          <div className="product-showcase">
            <input
              type="radio"
              id="img1-radio"
              name="showcase"
              value="1"
              defaultChecked
            ></input>
            <input
              type="radio"
              id="img2-radio"
              name="showcase"
              value="2"
            ></input>
            <input
              type="radio"
              id="img3-radio"
              name="showcase"
              value="3"
            ></input>
            <input
              type="radio"
              id="img4-radio"
              name="showcase"
              value="4"
            ></input>
            <input
              type="radio"
              id="img5-radio"
              name="showcase"
              value="5"
            ></input>
            <div className="img-container">
              {/*  */}
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16.jpg?v=1709887601&width=375"
                alt=""
                className="img1 showcase"
              />
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-e.jpg?v=1709887601&width=360"
                alt=""
                className="img2 showcase"
              />
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-a.jpg?v=1709887510&width=360"
                alt=""
                className="img3 showcase"
              />
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-b.jpg?v=1709887509&width=360"
                alt=""
                className="img4 showcase"
              />
              <img
                src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-c.jpg?v=1709887510&width=360"
                alt=""
                className="img5 showcase"
              />
            </div>
            <div id="img-labels">
              <label
                id="img1-label"
                className="img1-label"
                htmlFor="img1-radio"
              >
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16.jpg?v=1709887601&width=375"
                  alt=""
                />
              </label>
              <label
                id="img2-label"
                className="img2-label"
                htmlFor="img2-radio"
              >
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-e.jpg?v=1709887601&width=360"
                  alt=""
                />
              </label>
              <label
                id="img3-label"
                className="img3-label"
                htmlFor="img3-radio"
              >
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-a.jpg?v=1709887510&width=360"
                  alt=""
                />
              </label>
              <label
                id="img4-label"
                className="img4-label"
                htmlFor="img4-radio"
              >
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-b.jpg?v=1709887509&width=360"
                  alt=""
                />
              </label>
              <label
                id="img5-label"
                className="img5-label"
                htmlFor="img5-radio"
              >
                <img
                  src="https://mb-demo1.myshopify.com/cdn/shop/files/marbo-grocery-product-16-c.jpg?v=1709887510&width=360"
                  alt=""
                />
              </label>
            </div>
          </div>
          <div className="product-info">
            <p>Fresh Organic Egg</p>
            <span>stars 1 review</span>
            <div className="prices">
              <p className="updatedprice">$22.00</p>
              <p className="oldprice">$28.00</p>
            </div>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              voluptatum magni repudiandae eveniet nisi voluptatibus laboriosam
              inventore itaque culpa quisquam odit facilis deserunt doloremque
              excepturi nemo aspernatur, amet vel esse!
            </p>
            <span className="size">
              <b>Size:</b>
              <select name="" id="">
                <option value="1kg">1KG</option>
                <option value="1kg">1KG</option>
                <option value="1kg">1KG</option>
                <option value="1kg">1KG</option>
                <option value="1kg">1KG</option>
              </select>
            </span>

            <div className="product-inputs">
              <div className="amount">
              <button>-</button>
              <span className="count">0</span>
              <button>+</button>
            </div>
            <button>Add to cart</button>
            <button className="black-btn">Buy it now</button>
            </div>
            

            <div className="group">
              <span>
                <img src={HEART} alt="" className="icon" />
                <p>Wishlist</p>
              </span>
              <span>
                <img src={HEART} alt="" className="icon" />
                <p>Question</p>
              </span>
              <span>
                <img src={HEART} alt="" className="icon" />
                <p>Question</p>
              </span>
              <span>
                <img src={HEART} alt="" className="icon" />
                <p>Share</p>
              </span>
            </div>
            <div className="col-m tracking">
              <span>
                <p>Delivery</p>
                <p>Estimated delivery time: 5-7 days</p>
              </span>
              <span>
                <p>Returns</p>
                <p>Within 45 days of purchase</p>
              </span>
              <span>
                <p>Sku</p>
                <p>445</p>
              </span>
            </div>
            <div className="payment-methods">
              <img src={VISA} alt="" />
              <img src={MASTERCARD} alt="" />
              <img src={AMEX} alt="" />
              <img src={PAYPAL} alt="" />
              <img src={DISCOVER} alt="" />
            </div>
          </div>
        </div>

        <div className="lower-product">
          <input
            type="radio"
            id="description-radio"
            name="section"
            value="description"
            defaultChecked
          ></input>
          <input
            type="radio"
            id="additional-radio"
            name="section"
            value="additional"
          ></input>
          <input
            type="radio"
            id="video-radio"
            name="section"
            value="video"
          ></input>
          <input
            type="radio"
            id="review-radio"
            name="section"
            value="review"
          ></input>
          <div id="tabs">
            <label
              id="description-label"
              className="product-section description"
              htmlFor="description-radio"
            >
              Description
            </label>
            <label
              id="additional-label"
              className="product-section additional"
              htmlFor="additional-radio"
            >
              Additional Info
            </label>
            <label
              id="video-label"
              className="product-section video"
              htmlFor="video-radio"
            >
              Video
            </label>
            <label
              id="review-label"
              className="product-section review"
              htmlFor="review-radio"
            >
              Review
            </label>
          </div>
          <div className="lower-product-sections">
            <div className="description-content content">
              <img
                src="https://cdn.shopify.com/s/files/1/0728/4994/8973/files/organic.jpg?v=1696845929"
                alt=""
              />

              <div className="col-l">
                <div className="col">
                  <p className="specification-title">Product Specifications</p>
                  <p>
                    Care for fiber: 30% more recycled polyester. We label
                    garments manufactured using environmentally friendly
                    technologies and raw materials with the Join Life label.
                  </p>
                </div>
                <div className="col">
                  <p className="specification-title">Washing Instructions</p>
                  <p>
                    Care for fiber: 30% more recycled polyester. We label
                    garments manufactured using environmentally friendly
                    technologies and raw materials with the Join Life label.
                  </p>
                </div>
              </div>

              <div className="col-l">
                <div className="col">
                  <p className="specification-title">Material</p>
                  <p>
                    Care for fiber: 30% more recycled polyester. We label
                    garments manufactured using environmentally friendly
                    technologies and raw materials with the Join Life label.
                  </p>
                </div>

                <div className="col">
                  <p className="specification-title">Wearing</p>
                  <p>Model is 1.85m wearing</p>
                  <p>Size: M</p>
                </div>
              </div>
            </div>

            <div className="additional-info content">
              <div className="info-section">
                <p>Vendor</p>
                <p>Ubone</p>
              </div>
              <div className="info-section">
                <p>Type</p>
                <p>Grovery</p>
              </div>
              <div className="info-section">
                <p>Size</p>
                <p>1kg, 2kg, 3kg, 5kg</p>
              </div>
              <div className="info-section">
                <p>Sku</p>
                <p>445</p>
              </div>
              <div className="info-section">
                <p>Barcode</p>
                <p>12345678</p>
              </div>
              <div className="info-section">
                <p>Weight</p>
                <p>0.2kg</p>
              </div>
            </div>

            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="video content"
            ></iframe>

            <div className="review content">
              <p>No reviews to show right now</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        {" "}
        <div className="related-products">
          <p>You might also like</p>
          <p className="section-h">Related Products</p>
          <div className="grid6">
            <ProductDisplay1 product={PRODUCTS[0]} />
          </div>
        </div>
      </section>
    </>
  );
}
