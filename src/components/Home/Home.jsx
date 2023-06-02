import AddTask from "./AddTask";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="container mx-auto min-h-[80vh]">
        <Banner></Banner>
        <AddTask></AddTask>
        </div>
    );
};

export default Home;