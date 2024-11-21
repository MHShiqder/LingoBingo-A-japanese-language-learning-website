import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Success = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    return (
        <div className="bg-[#eab64f] w-11/12 mx-auto pb-10 bg-cover bg-right text-white px-5 mb-10">
            <h1 className="text-5xl font-bold py-10 text-center">Success</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14 " src="https://cdn-icons-png.flaticon.com/128/511/511587.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={1240}></CountUp>)}</h3>
                    <h5 className="text-xl ">Users</h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={12}></CountUp>)}</h3>
                    <h5 className="text-xl ">Lessons</h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/10558/10558485.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={200}></CountUp>)}</h3>
                    <h5 className="text-xl ">Vocabularies</h5>
                </div>

                <div className="flex flex-col items-center bg-[#ffffff3b] border py-10 space-y-3 ">
                    <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/7341/7341885.png" alt="" />
                    <h3 ref={ref} className="text-5xl">{inView && (<CountUp end={258}></CountUp>)}</h3>
                    <h5 className="text-xl ">Tutorials</h5>
                </div>

            </div>
        </div>
    );
};

export default Success;