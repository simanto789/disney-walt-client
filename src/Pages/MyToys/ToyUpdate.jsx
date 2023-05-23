
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ToyUpdate = () => {
    const { user } = useContext(AuthContext);

    const handleUpdateToy = event => {
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

        fetch('https://disney-walt-server.vercel.app/toys', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy Added Successfully')
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl text-center mt-5 mb-3">Update Toy</h2>
            <form onSubmit={handleUpdateToy}>


                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 ml-5">
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
                <div className="mt-6 text-center mb-5">
                    <button type="submit" className="btn btn-primary">
                        Update Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ToyUpdate;