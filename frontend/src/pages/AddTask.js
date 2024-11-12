import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
    const [data, setData] = useState('');
    const navi = useNavigate();
    const apiUrl = 'http://localhost:4000/tasks';
    return (
        <>
            <div className="row m-3 d-flex justify-content-center">
                <label className="col-2 col-form-label fs-5">Task : </label>
                <div className="col-4 ">
                    <input type="text" className="form-control form-control-lg fs-6" onChange={(e) => {
                        setData(e.target.value);
                    }} placeholder="Write task..." />
                </div>
            </div>
            <div className="row m-3">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-success" onClick={() => {
                        let obj = {
                            "mytask": data
                        }
                        
                        fetch(apiUrl, {
                            method: "POST",
                            body: JSON.stringify(obj),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res=>navi('/'))

                    }}>Add Task</button>
                </div>
            </div>
        </>
    );
}
async function addApi(apiUrl, data) {

    return true;
}
export default AddTask;