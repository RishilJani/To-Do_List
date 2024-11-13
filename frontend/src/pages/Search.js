import { useState } from "react";
import { Link } from "react-router-dom";
import { formateData } from "./GetAll";

var isFirst = true;
function Search() {
    const [txt, setTxt] = useState(""); // for the string to be searched
    const [data, setData] = useState([]); // for data that comes from database
    const apiUrl = "http://localhost:4000/tasks"

    var formatted = [];

    // when data is available
    if (data.length != 0) { formatted = formateData(data, apiUrl, setData); }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start m-4">
                    <Link className="btn btn-outline-info mx-3" to={"/"}>Back</Link> {/* link back to home page */}
                </div>

                <div className="row m-4 px-2 justify-content-center">
                    {/* For input string */}
                    <div className='col-3 d-flex justify-content-center'>
                        <input className="form-control" type="search" placeholder="Search" value={txt} onChange={e => setTxt(e.target.value)} />
                    </div>
                    {/* For search button */}
                    <div className='col-2 d-flex justify-content-start'>
                        <button className="btn btn-outline-primary" onClick={() => {
                            isFirst = false;
                            fetch(apiUrl + "/search/" + txt).then(res => res.json()).then(res => { setData(res) })
                        }}><i className="bi bi-search"></i></button>
                    </div>
                </div>

                {/* display output */}
                <div>
                    {/* when data is not available  */}
                    {(!isFirst && formatted.length == 0) && <h2> No result Found</h2>}

                    {/* when data is available  */}
                    {formatted.length != 0 && <table className="table table-borderd text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-start">Task</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formatted}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </>
    );
}
export default Search;