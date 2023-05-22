import { Link } from "react-router-dom";


const SubCategory = ({ product }) => {
    const { _id, img, tittle, price, rating } = product;
    return (
        <div className="card w-96 bg-base-100" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <img className="w-11/12 p-5" src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {tittle}
                </h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <Link to={`/details/${_id}`}><button className="btn btn-outline btn-primary mr-2">Details</button></Link>
            </div>
        </div>
    );
};

export default SubCategory;