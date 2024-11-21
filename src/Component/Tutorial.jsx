import { Link } from "react-router-dom";


const Tutorial = () => {
    return (
        <div className="w-11/12 mx-auto text-center">
            <h3 className="text-5xl font-bold my-10">Tutorials</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 my-10">
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/7IUanmAUVx8?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/w5UhZ56Zbp8?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/yPNo7zzRVTo?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/2qk4gCZuSjk?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/qBClLIT_aLU?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/Z3_u6RaYHkI?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/IIev2MK7hhU?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/82PgG48rdvQ?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            <iframe className="rounded-2xl" width="100%" height="200" src="https://www.youtube.com/embed/hdDjCBo0SH8?autoplay=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </div>
            <Link  className="btn bg-sky-400 mb-10" to="/start-learning">Learn Vocabularies</Link>
        </div>
    );
};

export default Tutorial;