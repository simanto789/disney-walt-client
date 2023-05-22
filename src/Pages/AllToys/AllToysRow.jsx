import { Link } from "react-router-dom";


const AllToysRow = ({ toy }) => {
    const { _id,  toyname, sellername,  category, price, quantity, details } = toy;

    
    return (
        <tr>
            
            <td>
                {toyname}
            </td>
            <td>{sellername}</td>
        
            <td>{category}</td>
            <td>{price}$</td>
          
            <td>{quantity}</td>
            <td>{details}</td>
            <td><Link to={`/toysdetails/${_id}`}><button className="btn btn-outline btn-primary">Details</button></Link></td>

            
        </tr>
    );
};

export default AllToysRow;