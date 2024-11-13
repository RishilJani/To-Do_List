import { Link } from "react-router-dom";

function Search() {
    
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start m-4">
                    <Link className="btn btn-outline-info mx-3" to={"/"}>Back</Link>
                </div>
                <div className="row m-4 px-2 justify-content-center">
                    <div className='col-2 d-flex justify-content-center'>
                        <input class="form-control" type="search" placeholder="Search" />
                    </div>
                    <div className='col-2 d-flex justify-content-start'>
                        <button className="btn btn-outline-primary"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Search;