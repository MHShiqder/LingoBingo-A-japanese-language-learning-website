import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-of-lingobingo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
    const navigate=useNavigate()
    const {user,userSignOut}=useContext(AuthContext)
    const links = <>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/">Home</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/start-learning">Start_Learning</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/tutorials">Tutorials</NavLink>
        <NavLink className="btn btn-ghost font-semibold mr-2" to="/about-us">About_Us</NavLink>
        {
            user && <NavLink className="btn btn-ghost font-semibold mr-2" to="/profile">Profile</NavLink>
        }
    </>
    const handleSignOut=()=>{
        userSignOut()
        .then(result=>{
            toast.success("Logged out Successfully")
            navigate("/")
        })

    }
console.log(user?.photoURL)
    return (
        <div className=" text-white sticky top-0 z-50">
            

            <div className="main-header bg-[#eab64f] ">
                <div className="navbar w-11/12 mx-auto p-0">
                    <div className="navbar-start md:w-1/2 w-2/3">
                        <div className="dropdown text-black">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
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
                        {
                            user
                            ?<div className="flex flex-col sm:flex-row justify-center gap-2 items-center my-2 sm:my-auto">
                                <img className="w-12 h-12 rounded-full object-cover" src={`${user.photoURL}`} alt="" />
                                <button onClick={handleSignOut} className="btn bg-slate-200 ">Logout</button>
                            </div>
                            :<Link to="/login" className="btn btn-ghost">Login</Link>
                        }
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Header;