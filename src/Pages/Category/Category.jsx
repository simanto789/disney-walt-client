import { useEffect, useState } from "react";
import SubCategory from "./SubCategory";


const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="max-w-5xl mx-auto " >
            <h2 className="text-center text-3xl mt-5 mb-5">Category</h2>

            <div className="text-center">
                <div className="btn-group gap-5 mb-5">
                    <input type="radio" name="options" data-title="Indoor" className="btn" />
                    <input type="radio" name="options" data-title="Wooden" className="btn" />
                    <input type="radio" name="options" data-title="Outdoor" className="btn" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {
                    products.map(product => <SubCategory
                        key={product._id}
                        product={product}
                    ></SubCategory>)
                }

            </div>
        </div>
    );
};

export default Category;