import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function GetAll() {
    const [data, setData] = useState([]);
    var [checked, setChecked] = useState([]);
    const apiUrl = 'http://localhost:4000/tasks';
    const navi = useNavigate();

    // var handleChange = (ind) => {
    //     setChecked(...checked, checked[ind] = !checked[ind]);
    // }
    var changeChecked = (data) => {
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


        setChecked(checked);
    }, []);

    // to change value of checked state



    var formatted = data.map((t, index) => {
        return (
            <tr style={{ textDecoration: checked[index] ? 'line-through' : 'none' }} >

                <td>{t.n_id}</td>

                <td>{t.task}</td>

                <td><Link className="btn btn-outline-info" to={"/edit/" + t.n_id}> Edit </Link></td>

                <td><button className="btn btn-outline-danger" onClick={() => {
                    console.log("clicked");

                    fetch(apiUrl + "/" + t.n_id, {
                        method: "DELETE"
                    }).then(res => navi("/"));
                }}>Delete</button></td>

            </tr>
        );
    });

    return (
        <>
            <div className="container p-5">
                <table className="table table-borderd">
                    <thead>
                        <th>Sr No.</th>
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



// function deletetask(id){
//     const apiUrl = 'http://localhost:4000/tasks/'+id;
//     fetch(apiUrl,{
//         method:"DELETE"
//     })
//     .then(res=>res.json())

// }
export default GetAll;