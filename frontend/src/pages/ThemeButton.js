import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function ThemeButton(props) {

    const navi = useNavigate();

    const [isDark, setDark] = props.theme; // getting state from Layout
    const loc = useLocation();

    useEffect(() => {
        navi(loc.pathname, { state: isDark }); // setting state at current location
    }, [isDark]);

    return (
        <>
            <input className="form-check-input m-2 fs-6" type="checkbox" id={"myTheme"} checked={isDark} onChange={(e) => { changeTheme(!isDark, setDark); }} />
            <label className="form-check-label me-5 my-0 fs-6" >{isDark ? <i className="bi bi-moon-stars-fill fs-5"></i> : <i className="bi bi-brightness-high-fill fs-5"></i>}</label>

        </>
    );
}
function changeTheme(isDark, setDark) {
    var body = document.body;
    if (isDark) {
        body.style.backgroundColor = "black"
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black";
    }
    localStorage.setItem("myTheme", isDark);
    
    // console.log("btn isDark = ",isDark);
    // console.log("btn = ",localStorage.getItem('myTheme'));
    
    setDark(isDark);

}

export default ThemeButton; 