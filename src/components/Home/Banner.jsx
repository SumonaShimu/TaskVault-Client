const Banner = () => {
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-2/5">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/images/main/2.jpg" className="object-contain" />
                </div>
                <div className="w-full lg:max-w-[50%]">
                    <h1 className="text-5xl font-bold"><span className="text-blue-800"> Effortlessly Manage all your tasks </span><span className="text-orange-500">at one Place</span><img src="https://raw.githubusercontent.com/SumonaShimu/images/main/form.gif" className="h-12 inline-block ms-5 rounded-full" /></h1>
                    <p className="py-6 text-justify my-10">Streamline your productivity and stay organized with our comprehensive task manager website. With our user-friendly interface and powerful features, you can effortlessly manage all your tasks in one centralized location. Say goodbye to scattered to-do lists and juggling multiple platforms – our task manager brings together all your work seamlessly.Experience the convenience of having all your work at one place and unlock a new level of efficiency in managing your tasks.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;