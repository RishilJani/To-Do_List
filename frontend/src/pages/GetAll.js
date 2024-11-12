import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function GetAll() {
    const [data, setData] = useState([]);


    var handleChange = (ind) => {
        // console.log(checked);
        setChecked(...checked, checked[ind] = !checked[ind]);
    }

    const apiUrl = 'http://localhost:4000/tasks';

    // to fetch Api and store in data
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))

    }, []);

    var [checked, setChecked] = useState([]);
    // to change value of checked state
    useEffect(() => {
        console.log("checked useState");

        for (let i = 0; i < data.length; i++) {
            checked[i] = data[i].isDone;
        }

        setChecked(checked);
    }, []);


    var formatted = data.map((t, index) => {
        return (
            <tr style={{ textDecoration: checked[index] ? 'line-through' : 'none' }} >

                <td>{t.n_id}</td>

                <td>{t.task}</td>

                <td><Link className="btn btn-outline-info" to={"/edit/" + t.n_id}> Edit </Link></td>

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