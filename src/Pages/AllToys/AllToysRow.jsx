

const AllToysRow = ({ toys }) => {
    const {  toypicture, toyname, sellername, email, category, price, rating, quantity, details } = toys;

    
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
            <td><button className="btn btn-outline btn-primary">Details</button></td>

            
        </tr>
    );
};

export default AllToysRow;