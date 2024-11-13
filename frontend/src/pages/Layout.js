import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container p-3">
                <div className='row px-2 justify-content-center'>
                    <div className='col-2'>
                        <label className='form-lable'>Add Note : </label>
                        <Link className='btn btn-outline-warning m-3 ' to={'/add'}> + </Link>

                    </div>
                    <div className='col-2 d-flex  justify-content-center py-3'>
                        <Link to={"/search"} className='btn btn-outline-primary'>Search</Link>
                    </div>
                </div>

                <div className='row my-4'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}


export default Layout;