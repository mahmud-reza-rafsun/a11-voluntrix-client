import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;