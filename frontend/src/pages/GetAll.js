import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function GetAll() {
    const [data, setData] = useState([]);
    var [checked, setChecked] = useState([]);
    const apiUrl = 'http://localhost:4000/tasks';
    
    const navi = useNavigate();

    var changeChecked = (data, index = -1, chk = false) => {
        if (index != -1) {
            
            data[index].isDone = chk;
            console.log(data[index],chk);
        }
        for (let i = 0; i < data.length; i++) {
            checked[i] = data[i].isDone;
        }
        setData(data);
    }

    // to fetch Api and store in data
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => changeChecked(res))
    }, []);

    var formatted = data.map((t, index) => {
        return (
            <tr style={{ textDecoration: t.isDone ? 'line-through' : 'none' }} >

                <td><input className="form-check-input" type="checkbox"  onChange={(e) => { 
                    
                    t.isDone = e.target.checked;
                    console.log(t);
                    fetch(apiUrl+"/"+t.n_id,{
                        method : "PUT",
                        body : JSON.stringify(t),
                        headers : {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res=> res.json())
                    .then(res=> setData(res))
                }} checked={t.isDone} /></td>

                <td>{t.task}</td>

                <td><Link className="btn btn-outline-info" to={"/edit/" + t.n_id}> Edit </Link></td>

                <td><button className="btn btn-outline-danger" onClick={() => {
                    console.log("clicked");

                    fetch(apiUrl + "/" + t.n_id, {
                        method: "DELETE"
                    }).then(res => res.json())
                    .then(res=> setData(res));

                }}>Delete</button></td>

            </tr>
        );
    });

    return (
        <>
            <div className="container p-5">
                <table className="table table-borderd">
                    <thead>
                        <th></th>
                        <th>Task</th>
                        <th>Edit Task</th>
                        <th>Delete Task</th>
                    </thead>
                    <tbody>
                        {formatted}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GetAll;