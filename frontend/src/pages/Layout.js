
import { Outlet } from 'react-router-dom';
import ThemeButton from './ThemeButton';

function Layout() {
    
    return (
        <>
            <div className="container p-3">
                <div className="form-check form-switch d-flex justify-content-end mx-3">
                    <ThemeButton/>
                </div>

                <div className='row my-4'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;