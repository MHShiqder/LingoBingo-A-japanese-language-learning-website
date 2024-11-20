import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-of-lingobingo.png"

const Header = () => {
    const links = <>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/">Home</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/start-learning">Start_Learning</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/tutorials">Tutorials</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/about-us">About_Us</NavLink>
    </>

    return (
        <div className=" text-white sticky top-0 z-50">
            

            <div className="main-header bg-[#eab64f] ">
                <div className="navbar w-11/12 mx-auto">
                    <div className="navbar-start md:w-1/2 w-2/3">
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
                        <Link to="/">
                        <img className="h-10 " src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end w-1/3 md:w-1/2">
                        <a className="btn btn-ghost">Login</a>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Header;