import useTitle from "../../../hooks/useTitle";
import Category from "../../Category/Category";

import Banner from "../Banner/Banner";
import Gallery from "../Galery/Gallery";
import Information from "../Informaton/Information";
import OurBrands from "./OurBrands/OurBrands";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            
            <Gallery></Gallery>
            <Information></Information>
            <Category></Category>
            <OurBrands></OurBrands>
        </div>
    );
};

export default Home;