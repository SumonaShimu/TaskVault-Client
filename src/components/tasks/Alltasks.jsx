import useTasks from "../hooks/useTasks";

const Alltasks = () => {
    const [tasks] = useTasks()
    return (
        <div className="w-full hero min-h-[80vh] text-center" style={{ backgroundImage: "url(https://t4.ftcdn.net/jpg/04/81/08/55/360_F_481085583_mdh39H3kZPGimEtznCvAJcQQ4F1WuWN1.webp)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className="w-full mx-auto hero-overlay bg-opacity-50">
            <h1 className="text-4xl py-10 text-white" >All your tasks </h1>
                <table className="table table-zebra max-w-[90%] mx-auto bg-white rounded-lg">
                    {/* head */}
                    <thead className="md:text-xl font-semibold">
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {tasks?.map((task, i) =>
                            <tr key={task._id}>
                                <th>{i + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status ? <button className="btn btn-success">Completed</button> : <button className="btn btn-error">Incomplete</button>}</td>
                                <td><button className="btn btn-outline">Update</button></td>
                                <td><button className="btn btn-outline">Delete</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Alltasks;