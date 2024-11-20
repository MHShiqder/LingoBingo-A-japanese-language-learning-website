import AboutUs from "../Component/AboutUs";
import Success from "../Component/Success";
import Slideshow from "../Component/Slideshow";
import Team from "../Component/Team";



const Home = () => {
    return (
        <div>            
            <Slideshow></Slideshow>
            <AboutUs></AboutUs>
            <Success></Success>
            <Team></Team>
        </div>
    );
};

export default Home;