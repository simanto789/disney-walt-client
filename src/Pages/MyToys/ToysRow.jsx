import { Link } from "react-router-dom";

const ToysRow = ({ toys, handleDelete }) => {
    const { _id, toypicture, toyname, sellername, email, category, price, rating, quantity, details } = toys;

    
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-28 h-24">
                        <img src={toypicture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {toyname}
            </td>
            <td>{sellername}</td>
            <td>{email}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{details}</td>
            <th>
                <Link to={`../updatetoys/${_id}`}><button className="btn btn-outline">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline ml-2">Delete</button>
            </th>
        </tr>
    );
};

export default ToysRow;