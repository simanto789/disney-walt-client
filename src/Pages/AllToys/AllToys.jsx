

import {  useEffect, useState } from "react";


import AllToysRow from "./AllToysRow";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    const url = 'http://localhost:5000/alltoys';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    

    // updatetoys

    return (
        <div>
            <h2 className="text-3xl"> All Toys: {allToys.length}</h2>

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
                            allToys.map(toys =>
                                <AllToysRow
                                    key={toys._id}
                                    toys={toys}
                                ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;