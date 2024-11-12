import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddTask() {
    const [data, setData] = useState('');
    var path = useLocation().pathname;
    const params = useParams();

    const apiUrl = 'http://localhost:4000/tasks';
    const [task,setTask] = useState({});
    useEffect(()=>{
        if(path.includes("edit")){
            fetch(apiUrl+params.n_id).then(res=>res.json()).then(res=> setTask(res))
        }
    },[]);
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
            {path.includes("edit") &&
                <div className="m-3 d-flex justify-content-center">
                    <label className="col-1 col-form-label fs-5">Is Task Done? </label>
                    <div className="input-group-text"><input type="checkbox" className="form-control form-control" /></div>
                </div>}
            <div className="row m-3">
                <div className="d-flex justify-content-center">
                    {path.includes("add") && <button className="btn btn-outline-success" onClick={() => { addApi(addApi, data); }}>Add Task</button>}
                    {path.includes("edit") && <button className="btn btn-outline-success" onClick={() => { editApi(addApi, data); }}>Edit Task</button>}
                </div>
            </div>
        </>
    );
}
function addApi(apiUrl, data) {
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
        .then(res => res.json())

}
function editApi(apiUrl, data) {

}
export default AddTask;