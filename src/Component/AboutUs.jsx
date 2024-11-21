
const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto">
            <section className=" py-12 ">
                <div className="">
                    {/* section heading  */}
                    <div className="text-center mb-5">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">About</h2>
                        <p className="text-gray-700 text-lg w-5/6 mx-auto">
                            Our mission is to empower language learners by providing tools and
                            resources that make vocabulary acquisition effortless and fun. We aim
                            to help you build confidence and improve communication skills in
                            Japanese.
                        </p>
                    </div>

                    {/* details container  */}
                    <div className="grid md:grid-cols-2  ">
                        {/* text part */}
                        <div className=" p-10 bg-sky-400">

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">How It Works</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9924/9924380.png" alt="" />
                                    <div className="ml-6">
                                        <h3 className="font-semibold text-lg">Interactive Lessons</h3>
                                        <p>Learn vocabulary using real-life examples and accurate pronunciation practices.</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/16344/16344949.png" alt="" />
                                    <div className="ml-6">
                                        <h3 className="font-semibold text-lg">Personalized Training</h3>
                                        <p>Login to access tailored vocabulary lists and track learning progress.</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-20 " src="https://cdn-icons-png.flaticon.com/128/15189/15189446.png" alt="" />
                                    <div className="ml-6">
                                        <h3 className="font-semibold text-lg">Cultural Context</h3>
                                        <p>Understand words' meanings in practical, real-world, and cultural scenarios.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* image part */}
                        <div className="bg-[url('https://i.ibb.co.com/Yh8VDRc/annie-spratt-4-4-WPFLVh-AY-unsplash-1.jpg')] bg-cover md:h-auto h-64 row-start-1 md:row-start-auto bg-center">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;