import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container p-3">
                <div className='row px-2 justify-content-center'>
                    <div className='col-2 border border-danger'>
                        <label className='form-lable'>Add Note : </label>
                        <Link className='btn btn-outline-warning m-3 ' to={'/add'}> + </Link>

                    </div>
                    <div className='col-3 d-flex border border-info justify-content-end py-3'>
                        <input class="form-control" type="search" placeholder="Search" />
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