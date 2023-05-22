

import { useLoaderData } from "react-router-dom";



const ToysDetails = () => {
    const toy = useLoaderData();
    const { toyname, toypicture, sellername,email, price, rating, quantity, details } = toy;

    return (
        <div className="card card-side bg-base-100 shadow-xl  flex flex-col md:flex-row">
            <figure><img className="w-1/2 mt-10" src={toypicture} alt="Movie" /></figure>
            <div className="card-body  w-full md:w-1/2 ">
                <h2 className="card-title mt-10 mb-5">Toy : {toyname}</h2>
                <p>Seller Name: {sellername}</p>
                <p>Seller Email: {email}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Quantity: {quantity}</p>
                <p>Details: {details}</p>
            </div>
        </div>
    );
};

export default ToysDetails;