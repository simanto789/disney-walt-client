import { useEffect, useState } from "react";
import SubCategory from "./SubCategory";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://disney-walt-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.dataset.title);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category == selectedCategory)
    : products;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center text-3xl mt-5 mb-5">Category</h2>

      <div className="text-center">
        <div className="btn-group gap-5 mb-5">
          <input
            type="radio"
            name="options"
            data-title="indoor"
            className="btn btn-outline btn-primary"
            onClick={handleCategoryChange}
          />
          <input
            type="radio"
            name="options"
            data-title="wooden"
            className="btn btn-outline btn-primary"
            onClick={handleCategoryChange}
          />
          <input
            type="radio"
            name="options"
            data-title="outdoor"
            className="btn btn-outline btn-primary"
            onClick={handleCategoryChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SubCategory key={product._id} product={product} />
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
