import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function GetAll() {
    const [data, setData] = useState([]); // for data that comes from database
    var [checked, setChecked] = useState([]); // for data of already done tasks
    const apiUrl = 'http://localhost:4000/tasks';

    // to fetch Api and store in data
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => changeChecked(res))
    }, []);

    // function to change value of data 
    // use when task is done
    var changeChecked = (data, index = -1, chk = false) => {
        if (index != -1) {
            data[index].isDone = chk;
        }
        for (let i = 0; i < data.length; i++) {
            checked[i] = data[i].isDone;
        }
        setData(data);
    }

    var formatted = formateData(data, apiUrl, setData); // data maps in row-column format

    return (
        <>
            <div className="container p-5">
                <table className="table table-borderd text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-start">Task</th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {formatted}
                    </tbody>
                </table>
            </div>
        </>
    );
}

// function to format data with row-column structure 
// it also adds butoon for edit and delete a task
function formateData(data, apiUrl, setData) {

    var format = data.map((t, index) => {
        return (
            <tr key={t.n_id} style={{ textDecoration: t.isDone ? 'line-through' : 'none' }} >
                
                {/* Checkbox*/}
                <td>
                    <input className="form-check-input" type="checkbox" onChange={(e) => {

                        t.isDone = e.target.checked;
                        fetch(apiUrl + "/" + t.n_id, {
                            method: "PUT",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => setData(res))
                    }} checked={t.isDone} />
                </td>

                {/* Task statement */}
                <td className="text-start">{t.task}</td>

                {/* Created Date */}
                <td>{t.created_date} </td>

                {/* Edit button */}
                <td><Link className="btn btn-outline-info" to={"/edit/" + t.n_id}> <i className="bi bi-pencil-square"></i> </Link></td>

                {/* Delete button */}
                <td><button className="btn btn-outline-danger" onClick={() => {
                    console.log(apiUrl + "/" + t.n_id);
                    
                    fetch(apiUrl + "/" + t.n_id, {
                        method: "DELETE"
                    }).then(res => res.json())
                        .then(res => setData(res));

                }}><i className="bi bi-trash"></i></button></td>

            </tr>
        );
    });

    return format;
}

export default GetAll;
export { formateData };