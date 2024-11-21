import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const { updateNamePhoto } = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        updateNamePhoto(name, photo)
        toast.success("Updated successfully")
        e.target.reset()
        navigate("/profile")
    }
    return (
        <div>
            <div className="w-11/12 mx-auto text-center my-10">
                <h1 className="text-5xl font-bold  mb-5">Update Profile</h1>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-sky-500 text-white hover:bg-sky-700">Update</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;