import Swal from "sweetalert2";
import useTasks from "../hooks/useTasks";
import { useState } from "react";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
const Alltasks = () => {
    const [tasks, refetch] = useTasks()
    console.log(tasks)
    const [selectedValue, setSelectedValue] = useState(false);
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value === 'true');
    };

    const updateTask = (id) => {
        event.preventDefault();
        const status = selectedValue;
        const updatedTask = { status };
        console.log(updatedTask);
        fetch(`https://task-vault-server.vercel.app/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Task status updated!',
                        'success'
                    )
                    refetch()
                }
                if (data.modifiedCount == 0) {
                    Swal.fire(
                        'Unchanged!',
                        'You have selected the same status again!',
                        'info'
                    )
                }

            })
    }
    //delete Tasks
    const deleteTask = (id) => {
        console.log('delete', id);
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this task!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            customClass: {
                confirmButton: 'btn btn-error',
                cancelButton: 'btn btn-success me-5',
            },
            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Task has been deleted',
                    showConfirmButton: false,
                    timer: 1000
                })
                fetch(`https://task-vault-server.vercel.app/tasks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch();
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // User clicked the cancel button
                Swal.fire(
                    'Cancelled',
                    'Your task is safe.',
                    'error'
                );
            }
        });
    }
    return (
        <div className="w-full hero min-h-[80vh] text-center" style={{ backgroundImage: "url(https://t4.ftcdn.net/jpg/04/81/08/55/360_F_481085583_mdh39H3kZPGimEtznCvAJcQQ4F1WuWN1.webp)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "left" }}>
            <div className="w-full mx-auto hero-overlay bg-opacity-75">
                <h1 className="text-4xl py-10 text-white" >All your tasks </h1>
                <table className="table table-zebra overflow-x-scroll lg:overflow-x-hidden max-w-[90%] mx-auto mb-10 bg-white rounded-lg">
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
                                <td>
                                    <label htmlFor={`modal-${task._id}`} className="text-xl text-white btn btn-primary rounded-full">
                                        <RiEdit2Fill />
                                    </label>
                                    <input type="checkbox" id={`modal-${task._id}`} className="modal-toggle" onChange={() => { }} />
                                    <div className="modal">
                                        <div className="modal-box bg-slate-200">
                                            <form onSubmit={() => updateTask(task._id)} className="bg-primary rounded-xl m-3 p-5 grid grid-cols-1 gap-3 w-[90%] mx-auto">
                                                <h1 className="text-4xl py-10 text-white text-center font-semibold">Update Task Status</h1>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-white">Task Title</span>
                                                    </label>
                                                    <input type="text" defaultValue={task.title} name="title" placeholder="title" className="input input-bordered" readOnly />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-white">Description</span>
                                                    </label>
                                                    <input type="text" defaultValue={task.description} name="description" placeholder="description" className="input input-bordered" readOnly />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text text-white">Status</span>
                                                    </label>
                                                    <select onChange={handleSelectChange} value={selectedValue} className="select select-primary w-full max-w-xs">
                                                        <option value={true} selected>Complete</option>
                                                        <option value={false}>Incomplete</option>
                                                    </select>
                                                </div>
                                                <div className="modal-action">
                                                    <button type="submit" className="btn">
                                                        Update
                                                    </button>
                                                    <label htmlFor={`modal-${task._id}`} className="btn">Close</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <button onClick={() => deleteTask(task._id)} className='text-xl text-white btn btn-primary rounded-full'><RiDeleteBinFill></RiDeleteBinFill> </button>
                                </td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Alltasks;