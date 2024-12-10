import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import ThemeButton from './ThemeButton';

function Layout() {
    const [isDark, setDark] = useState(false); // state for dark mode
    return (
        <>
            <div className="container p-3">
                <div className="form-check form-switch d-flex justify-content-end mx-3">
                    <ThemeButton theme = {[isDark,setDark]} /> {/* passing state as promps to ThemeButton */}
                </div>

                <div className='row my-4'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;