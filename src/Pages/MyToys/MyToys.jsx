import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMytoys(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl"> my toys: {mytoys.length}</h2>
            
        </div>
    );
};

export default MyToys;