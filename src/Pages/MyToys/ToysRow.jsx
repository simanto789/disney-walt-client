
const ToysRow = ({ toys }) => {
    const { toypicture, toyname, sellername, email, category, price, rating, quantity, details } = toys;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToysRow;