import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <div className="welcome text-center py-2 text-black">
                <p className="">Welcome Hasibul Hasan </p>
            </div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;