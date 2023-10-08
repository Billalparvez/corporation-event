import Cards from "../Services/Services";
import Footer from "../Shard/Footer";
import AboutTheProduct from "./AboutTheProduct";
import Bannar from "./Bannar";
import Collection from "./Collection";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <div className="max-w-7xl mx-auto ">
                <Cards></Cards>
                <AboutTheProduct></AboutTheProduct>
                <Collection></Collection>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Home;