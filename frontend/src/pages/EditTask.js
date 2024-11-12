import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTask() {
    const [task, setTask] = useState({});
    // var [data, setData] = useState("");
    const params = useParams();
    const navi = useNavigate();

    const apiUrl = 'http://localhost:4000/tasks/' + params.n_id;
    
    useEffect(() => {
        fetch(apiUrl).then(res => res.json()).then(res => setTask(res))

    }, []);


    return (
        <>
            <div className="row m-3 d-flex justify-content-center">
                <label className="col-2 col-form-label fs-5">Task : </label>
                <div className="col-4 ">
                    <input type="text" id="txt" className="form-control form-control-lg fs-6" value={task.task} onChange={e => setTask( {...task, task : e.target.value})} />
                </div>
            </div>

            <div className="m-3 d-flex justify-content-center">
                <label className="col-form-label fs-5 m-1">Is Task Done? :</label>
                <input type="checkbox" id="chk" className="form-check-input fs-5 m-3" checked={task.isDone} onChange={(e)=>{ setTask({...task,isDone : e.target.checked})}}/>
                
            </div>
            <div className="row m-3">
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-info mx-2" to={'/'}>Back</Link>
                    <button className="btn btn-outline-success mx-2" onClick={() => {
                        fetch(apiUrl, {
                            method: "PUT",
                            body: JSON.stringify(task),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(res=> navi('/'))
                    }}>Submit </button>

                </div>
            </div>
        </>
    );
}


export default EditTask;