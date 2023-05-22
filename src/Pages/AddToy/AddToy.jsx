import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const sellername = form.sellername.value;
        const toyname = form.toyname.value;
        const toypicture = form.toypicture.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const toy = {
            email,
            sellername,
            toyname,
            toypicture,
            category,
            price,
            rating,
            quantity,
            details
        }

        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Toy Added Successfully')
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center mt-5 mb-3">Add Toys</h2>
            <form onSubmit={handleAddToy}>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="sellername" placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Picture</span>
                        </label>
                        <input type="text" name="toypicture" placeholder="Toy Picture" className="input input-bordered" />
                    </div>
                    <div className="form-control ml-5 w-1/2 max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" defaultValue="">
                            <option disabled value="">Pick one</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Wooden">Wooden</option>
                        </select>
                    </div>
                    <div className="form-control w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text"
                            name="rating"
                            placeholder="Rating"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Quantity"
                            className="input input-bordered"
                        />
                    </div>

                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        name="details"
                        placeholder="Toy details"
                        className="textarea textarea-bordered"
                    ></textarea>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" className="btn btn-primary">
                        Add Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;