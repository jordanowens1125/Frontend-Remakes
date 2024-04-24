export default function CategoriesDisplay2({
  category = { name: "", image: "" },
}) {
  return (
    <div className="category-display-2">
      <div>
        <img
          src={category.image}
          alt={category.name}
        />
      </div>
      <p>{category.name}</p>
    </div>
  );
}
