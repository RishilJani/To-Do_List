import { useState } from "react";
import { Link } from "react-router-dom";
import { formateData } from "./GetAll";

var isFirst = true;
function Search() {
    const [txt, setTxt] = useState("");
    const [data, setData] = useState([]);
    const apiUrl = "http://localhost:4000/tasks/search"
    var formatted = [];
    if (data.length != 0) {
        formatted = formateData(data, apiUrl, setData);
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start m-4">
                    <Link className="btn btn-outline-info mx-3" to={"/"}>Back</Link>
                </div>
                <div className="row m-4 px-2 justify-content-center">
                    <div className='col-3 d-flex justify-content-center'>
                        <input class="form-control" type="search" placeholder="Search" value={txt} onChange={e => setTxt(e.target.value)} />
                    </div>
                    <div className='col-2 d-flex justify-content-start'>
                        <button className="btn btn-outline-primary" onClick={() => {
                            isFirst = false;
                            fetch(apiUrl + "/" + txt).then(res => res.json()).then(res => { setData(res) })
                        }}><i class="bi bi-search"></i></button>
                    </div>
                </div>
                <div>
                    {/* {(isFirst && formatted.length == 0)} */}
                    {formatted.length != 0 &&
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
                    }
                    {(!isFirst && formatted.length == 0) &&  <h2> No result Found</h2>}
                </div>
            </div>
        </>
    );
}
export default Search;