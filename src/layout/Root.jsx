import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shard/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto text-black">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;