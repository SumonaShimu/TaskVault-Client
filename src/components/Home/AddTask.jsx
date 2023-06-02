const AddTask = () => {
    return (
        <div className="lg:min-h-screen flex-col mx-auto lg:my-auto h-full">
            <div className="text-center max-w-5xl mx-auto flex flex-col gap-6">
                <h1 className="py-10 text-5xl font-bold">Add a Task</h1>
                <p>Say goodbye to scattered to-do lists and juggling multiple platforms – our task manager brings together all your work seamlessly.Experience the convenience of having all your work at one place and unlock a new level of efficiency in managing your tasks.</p>
            </div>
            
            <div className="card flex-shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 mx-auto my-10" style={{ backgroundImage: "url(https://raw.githubusercontent.com/SumonaShimu/images/main/ban.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <form className="m-10 rounded-lg mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input type="text" placeholder="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select className="select select-primary w-full max-w-xs">
                            <option disabled selected>Pick a status</option>
                            <option>Complete</option>
                            <option>incomplete</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Add task" className="btn btn-primary" />
                    </div>
                </form>
                <img src="https://raw.githubusercontent.com/SumonaShimu/images/main/add.gif" className="object-contain h-56" />
            </div>
        </div>

    );
};

export default AddTask;