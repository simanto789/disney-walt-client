

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
            <h2 className="text-3xl text-center mt-5 mb-5"> Total Toys: {allToys.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            
                            <th>Toy name</th>
                            <th>Seller Name</th>                    
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toy =>
                                <AllToysRow
                                    key={toy._id}
                                    toy={toy}
                                ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;