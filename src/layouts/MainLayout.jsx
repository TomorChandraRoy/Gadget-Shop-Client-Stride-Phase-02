import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar/>
            </div>
            <Outlet/>
            <div className="">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;