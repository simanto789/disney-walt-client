import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToysRow from "./ToysRow";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);
    useTitle('My Toys')

    const url = `https://disney-walt-server.vercel.app/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure You Want To Delete');
        if (proceed) {
            fetch(`https://disney-walt-server.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = mytoys.filter( toys => toys._id !== id);
                        setMytoys(remaining);
                    }
                })
        }
    }

    // updatetoys

    return (
        <div>
            <h2 className="text-3xl text-center mt-5 mb-5">My Toy: {mytoys.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Toy name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(toys =>
                                <ToysRow
                                    key={toys._id}
                                    toys={toys}
                                    handleDelete={handleDelete}
                                ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;