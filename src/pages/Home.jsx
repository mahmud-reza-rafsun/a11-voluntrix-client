import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import VounteerPost from "../components/VounteerPost";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Voluntrix | Home</title>
            </Helmet>
            <Carousel/>
            <VounteerPost/>
        </div>
    );
};

export default Home;