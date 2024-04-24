"use client";

import { useState } from "react";
import { CANCEL, FILTER } from "../constants/icons";
import CATEGORIES from "../constants/categories";
import ProductDisplay1 from "../ui/products/product-1-display";
import PRODUCTS from "../constants/products";

export default function Page() {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <>
      <div
        className={showFilter ? "modal" : ""}
        onClick={() => setShowFilter(false)}
      ></div>
      <section className="filter container">
        <div className={showFilter ? "left-search show-filter" : "left-search"}>
          <img
            src={CANCEL}
            alt=""
            className="icon"
            onClick={() => setShowFilter(false)}
          />

          <div className="filter-section">
            <p>Categories</p>
            <div className="options">
              {CATEGORIES.map((category) => (
                <span key={category.name} className="filter-section-details">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{category.name}</label>
                  <span>(2)</span>
                </span>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <p>Filter</p>
            <p>{CATEGORIES.length} products</p>
          </div>

          <div className="filter-section">
            <p>Availability</p>
            <span className="current-filter">
              <p>0 selected</p>
              <p>Reset</p>
            </span>
            <div className="options">
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">In stock</label>
                <span>(12)</span>
              </span>
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">In stock</label>
                <span>(2)</span>
              </span>
            </div>
          </div>

          <div className="filter-section">
            <p>Size</p>
            <span className="current-filter">
              <p>0 selected</p>
              <p>Reset</p>
            </span>
            <div className="options">
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">1kg</label>
                <span>(12)</span>
              </span>
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">2kg</label>
                <span>(2)</span>
              </span>
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">3kg</label>
                <span>(2)</span>
              </span>
              <span className="filter-section-details">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">5kg</label>
                <span>(2)</span>
              </span>
            </div>
          </div>

          <div className="filter-section">
            <p>Price</p>
            <span className="current-filter">
              <p>The highest price is $74.00</p>
              <p>Reset</p>
            </span>

            <input
              type="range"
              id="points"
              name="points"
              min="0"
              max="74"
            ></input>

            <div className="price-filter">
              <label htmlFor="from" className="low-label">
                From:
              </label>

              <input
                type="number"
                name="tentacles"
                min="0"
                max="100"
                className="low"
                defaultValue={0}
              />
              <span className="hyphen">-</span>
              <label htmlFor="high" className="high-label">
                To:
              </label>

              <input
                type="number"
                name="tentacles"
                min="1"
                max="100"
                className="high"
                defaultValue={1}
              />
            </div>
          </div>
        </div>

        <div className="right-search">
          <p>Animal biscuits and products (12)</p>
          <img
            src="https://mb-demo1.myshopify.com/cdn/shop/files/organic-categories-banner.jpg?v=1698315418&width=1920"
            alt=""
          />
          <div className="filter-options">
            <span className="open-filter" onClick={() => setShowFilter(true)}>
              <img src={FILTER} alt="" className="icon" />
              <p>Filter</p>
            </span>
            <div className="layouts">
              <div className="square-layout">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
              <div className="row-layout">
                <div className="row"></div>
                <div className="row"></div>
                <div className="row"></div>
              </div>
            </div>

            <span className="sort-filter">
              <label>Sort by:</label>
              <select name="" id="">
                <option value="">Featured</option>
                <option value="">Best Selling</option>
                <option value="">Alphabetically, A to Z</option>
                <option value="">Alphabetically, Z to A</option>
                <option value="">Price, low to high</option>
                <option value="">Price, high to low</option>
                {/* <option value="">Date, new to old</option>
              <option value="">Date, old to new</option> */}
              </select>
            </span>
          </div>
          <div className="filter-grid">
            {products.map((product) => (
              <ProductDisplay1 product={product} key={product.name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
