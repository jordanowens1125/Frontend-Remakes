import Companies from "../ui/banners/companies";
import FlexBanner from "../ui/banners/flex-banner";
import GridBanner from "../ui/banners/grid-banner";
import Homegrid from "../ui/banners/homegrid";
import Process from "../ui/banners/process";
import SaleBanner from "../ui/banners/sale-banner";
import Subscribe from "../ui/banners/subscribe";
import Cart from "../ui/nav/Cart";
import CategoriesDisplay1 from "../ui/categories/categories-display-1";
import CategoriesDisplay2 from "../ui/categories/categories-display-2";
import Offers from "../ui/offers/offers";
import ProductDisplay1 from "../ui/products/product-1-display";
import ProductPage from "../ui/products/productpage";
import Breadcrumbs from "../ui/breadcrumb/breadcrumb";
import PRODUCTS from "../constants/products";
import Grid3 from "../ui/groupings/grid3";
import Grid6 from "../ui/groupings/grid6";
import Grid8 from "../ui/groupings/grid8";
import CATEGORIES from "../constants/categories";
import ProductBox from "../ui/groupings/product-box";
import COLUMNS from "../constants/productColumns";

export default function Home() {
  return (
    <main>
      <Homegrid />
      {/* <Grid8
        headingtext={"Categories"}
        subheadingtext={"Fresh and fabulous from farm to table!"}
        content={CATEGORIES.map((category) => (
          <CategoriesDisplay2 category={category} key={category.name} />
        ))}
      />
      <Grid6
        headingtext={"Top selling products"}
        subheadingtext={"Fresh and fabulous from farm to table!"}
        content={PRODUCTS.map((product) => (
          <ProductDisplay1 key={product.name} product={product} />
        ))}
        bottomelement={
          <div className="flex-sm">
            <button>Offer Products</button>
            <button>Popular Products</button>
          </div>
        }
      />

      <Offers />
      <Grid3
        headingtext={"Top selling products"}
        subheadingtext={"Fresh and fabulous from farm to table!"}
        content={CATEGORIES.map((category) => (
          <CategoriesDisplay1 category={category} key={category.name} />
        ))}
      />
      <FlexBanner />
      <Grid6
        headingtext={"Top selling products"}
        subheadingtext={"Fresh and fabulous from farm to table!"}
        content={PRODUCTS.map((product) => (
          <ProductDisplay1 key={product.name} product={product} />
        ))}
      />
      <SaleBanner /> */}
      <section>
        <div className="product-grouping-2 container">
          {COLUMNS.map((list) => (
            <ProductBox list={list} key={list.title} />
          ))}
        </div>
      </section>
      <GridBanner />
      <Companies />
      <Process />
      <Subscribe />

      {/* <ProductPage /> */}
    </main>
  );
}
