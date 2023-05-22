import useTitle from "../../../hooks/useTitle";
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Gallery from "../Galery/Gallery";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;