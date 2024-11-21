import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Root = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <Toaster></Toaster>
            {
                user && <div className="welcome text-center py-2 text-black bg-sky-300">
                <p className="">Welcome {user.displayName} </p>
            </div>
            }
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;