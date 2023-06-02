import useTasks from "../hooks/useTasks";

const Alltasks = () => {
    const [tasks] = useTasks()
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {tasks?.map((task,i) =>
                        <tr key={task._id}>
                            <th>{i+1}</th>
                            <td>{task._title}</td>
                            <td>{task.description}</td>
                            <td>{task.status?<button className="btn btn-success">Completed</button>:<button className="btn btn-error">Incomplete</button>}</td>
                            <td><button className="btn btn-outline">Delete</button></td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
};

export default Alltasks;