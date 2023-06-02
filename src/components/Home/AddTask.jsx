import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = () => {
    const [selectedValue, setSelectedValue] = useState(false);
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const addItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = selectedValue;
        const newItem = {
            title, description, status
        }
        console.log(newItem)
        fetch('https://task-vault-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task inserted successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="lg:min-h-screen flex-col mx-auto lg:my-auto md:max-w-[80%]">
            <div className="text-center max-w-5xl mx-auto flex flex-col gap-2 md:gap-6">
                <h1 className="py-10 text-5xl font-bold">Add a Task</h1>
                <p>Say goodbye to scattered to-do lists and juggling multiple platforms – our task manager brings together all your work seamlessly.Experience the convenience of having all your work at one place and unlock a new level of efficiency in managing your tasks.</p>
            </div>
            <div className="hero rounded-2xl my-5 lg:my-14" style={{ backgroundImage: "url(https://raw.githubusercontent.com/SumonaShimu/images/main/ban.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="hero-overlay bg-opacity-50 rounded-2xl shadow-2xl " >
                    <div className="card flex-shrink-0 w-full lg:max-w-7xl flex-col lg:flex-row items-center lg:m-14" >
                        <form onSubmit={addItem} className="card-body w-[100%] md:max-w-[60%] my-2 md:my-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Task Title</span>
                                </label>
                                <input type="text" name="title" placeholder="title" className="max-w-[80%] input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="description" className="max-w-[80%] input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Status</span>
                                </label>
                                <select onChange={handleSelectChange} value={selectedValue} className="select select-primary max-w-[80%]">
                                    <option value={false} selected>incomplete</option>
                                    <option value={true}>Complete</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add task" className="btn btn-primary max-w-[80%]" />
                            </div>
                        </form>
                        <img src="https://raw.githubusercontent.com/SumonaShimu/images/main/add.gif" className="object-contain h-56 md:h[50%]" />
                    </div>
                </div>

            </div>

        </div>

    );
};

export default AddTask;