import { Link } from "react-router-dom";

const StartLearning = () => {
    const lessons=[1,2,3,4,5,6,7,8,9,10]
    
    return (
        <div className="text-center w-11/12 mx-auto my-10">
            <h2 className="text-5xl font-bold mb-10">Let's Learn Japanese</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    lessons.map(lesson=>{
                       return <>
                        <Link to={`/lesson/${lesson}`} className="text-xl font-bold p-5 flex items-center justify-center bg-sky-400">Lesson-{lesson}</Link>
                       </>
                    })
                }
            </div>

            <div>
                <h3 className="text-5xl font-bold my-10">Tutorial</h3>
                <div className="mb-5">
                <iframe className="rounded-2xl" width="100%" height="400" src="https://www.youtube.com/embed/7IUanmAUVx8?autoplay=1" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                </div>
                <Link className="btn bg-sky-400" to="/tutorials">View More</Link>
            </div>
        </div>
    );
};

export default StartLearning;