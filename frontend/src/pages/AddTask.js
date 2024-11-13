import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddTask() {
    const [data, setData] = useState('');
    const navi = useNavigate();
    const apiUrl = 'http://localhost:4000/tasks';
    return (
        <>
            {/* link back to home page */}
            <div className="m-5 d-flex justify-content-start">
                <Link className="btn btn-outline-info mx-3" to={"/"}>Back</Link>
            </div>

            {/* To take user input */}
            <div className="row m-3 d-flex justify-content-center">
                <label className="col-2 col-form-label fs-5">Task : </label>
                <div className="col-4 ">
                    <input type="text" className="form-control form-control-lg fs-6" onChange={e=>setData(e.target.value)} placeholder="Write task..." />
                </div>
            </div>
        
            {/* To send data to backend */}
            <div className="row m-5">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-success mx-3" onClick={() => {
                        let obj = {
                            "mytask": data
                        }

                        fetch(apiUrl, {
                            method: "POST",
                            body: JSON.stringify(obj),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(res => navi('/'))

                    }}>Add Task</button>
                </div>
            </div>
        </>
    );
}
export default AddTask;