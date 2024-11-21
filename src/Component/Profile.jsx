import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="text-center my-10 ">
            <h1 className="mb-5 text-xl font-bold">Welcome to your profile, {user.displayName}</h1>
            <img className="mx-auto rounded-full w-40 h-40 my-10" src={user.photoURL} alt="" />
            <h2>Email: {user.email}</h2>
            <h2 className="text-base font-semibold mb-5">Name: {user.displayName}</h2>
            <Link className="btn bg-sky-600 text-white" to="/update">UPDATE</Link>
        </div>
    );
};

export default Profile;