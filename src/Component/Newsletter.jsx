
const Newsletter = () => {
    return (
        <div className="text-center w-11/12 mx-auto space-y-5 my-10 py-10 bg-sky-300">
            <h3 className="text-5xl font-bold">Subscribe to Newsletter</h3>
            <p className="text-xl ">Stay updated with our latest news and offers</p>

            <div className="join">
                <input className="input input-bordered join-item rounded-full" placeholder="Email" />
                <button className="btn bg-[#eab64f] join-item rounded-r-full text-lg">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;