import { useLoaderData } from "react-router-dom";



const SubCategoryDetails = () => {
    const product = useLoaderData();
    const { tittle, img, seller_name, seller_email, price, rating, quantity, details } = product;

    return (
        <div className="card card-side bg-base-100 shadow-xl  flex flex-col md:flex-row">
            <figure><img className="w-full mt-10" src={img} alt="Movie" /></figure>
            <div className="card-body  w-full md:w-1/2 ">
                <h2 className="card-title mt-10 mb-5">{tittle}</h2>
                <p>Seller Name: {seller_name}</p>
                <p>Seller Email: {seller_email}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Quantity: {quantity}</p>
                <p>Details: {details}</p>
            </div>
        </div>
    );
};

export default SubCategoryDetails;