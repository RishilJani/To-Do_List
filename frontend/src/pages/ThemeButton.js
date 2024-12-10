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
            <input className="form-check-input mx-2" type="checkbox" id={"myTheme"} checked={isDark} onChange={(e) => { changeTheme(!isDark, setDark); }} />
            <label className="form-check-label me-5" >{isDark ? "Light" : "Dark"} Mode</label>


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
    setDark(isDark);

}

export default ThemeButton; 