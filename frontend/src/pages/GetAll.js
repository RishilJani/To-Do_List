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

                <td className="text-start">{t.task}</td>

                <td>{t.created_date} </td>
                
                <td><Link className="btn btn-outline-info" to={"/edit/" + t.n_id}> <i class="bi bi-pencil-square"></i> </Link></td>

                <td><button className="btn btn-outline-danger" onClick={() => {
                    console.log("clicked");

                    fetch(apiUrl + "/" + t.n_id, {
                        method: "DELETE"
                    }).then(res => res.json())
                    .then(res=> setData(res));

                }}><i class="bi bi-trash"></i></button></td>

            </tr>
        );
    });

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

export default GetAll;