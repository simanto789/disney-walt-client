import { useEffect, useState } from "react";
import Imagecart from "./Imagecart";


const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://disney-walt-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setImages(data));
    }, [])

    return (
        <div className="max-w-5xl mx-auto" >
            <h2 className="text-center text-3xl mt-5 mb-5">Newly Arrived Sets</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {
                    images.map(image => <Imagecart
                        key={image._id}
                        image={image}
                    ></Imagecart>)
                }

            </div>
        </div>
    );
};

export default Gallery;