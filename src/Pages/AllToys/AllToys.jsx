import  { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "http://localhost:5000/alltoys";
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const filteredToys = allToys.filter((toy) =>
      toy.toyname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setAllToys(filteredToys);
  };

  return (
    <div>
      <h2 className="text-3xl text-center mt-5 mb-5">
        Total Toys: {allToys.length}
      </h2>

      <form onSubmit={handleSearchSubmit} className="flex justify-center mt-4 mb-4">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">
          Search
        </button>
      </form>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
            {allToys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
