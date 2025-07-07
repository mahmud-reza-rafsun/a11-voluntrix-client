import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-6xl mx-auto px-5 lg:px-5 py-5 lg: 8">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;