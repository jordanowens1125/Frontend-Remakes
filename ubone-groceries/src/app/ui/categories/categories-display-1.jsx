import { LEFT, RIGHT } from "@/app/constants/icons";

export default function CategoriesDisplay1({ category }) {
  return (
    <div className="category-display-1">
      <img
        src="https://mb-demo1.myshopify.com/cdn/shop/files/grocery-cat1.jpg?v=1709975486&width=400"
        alt="Image"
      />
      <span className="discount">min 25% off</span>
      <p>Dry Fruits</p>
      <p>Now plus gift set with deal</p>
    </div>
  );
}
