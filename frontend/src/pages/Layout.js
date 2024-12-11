import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import ThemeButton from './ThemeButton';

function Layout() {
    const [isDark, setDark] = useState(false); // state for dark mode
    // localStorage.removeItem('myTheme');
    return (
        <>
            <div className="container p-2">
                <div className="form-check form-switch d-flex justify-content-end mx-5 my-3">
                    <ThemeButton theme = {[isDark,setDark]} /> {/* passing state as promps to ThemeButton */}
                </div>

                <div className='row my-3'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Layout;