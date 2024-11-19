import { NavLink } from "react-router-dom";
import logo from "../assets/logo-of-lingobingo.png"

const Header = () => {
    const links = <>
        <NavLink className="font-semibold mr-2" to="/">Home</NavLink>
        <NavLink className="font-semibold mr-2" to="/start-learning">Start_Learning</NavLink>
        <NavLink className="font-semibold mr-2" to="/tutorials">Tutorials</NavLink>
        <NavLink className="font-semibold mr-2" to="/about-us">About_Us</NavLink>
    </>

    return (
        <div>
            <div className="welcome text-center mt-3">
                <p className="">Welcome Hasibul Hasan </p>
            </div>

            <div className="main-header">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <div>
                            <img className="h-10 rounded-md" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;