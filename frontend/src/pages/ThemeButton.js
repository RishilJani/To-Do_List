import { useState } from 'react';
function ThemeButton() {
    const [dark, setDark] = useState(false);
    localStorage.setItem("myTheme", false);
    return (
        <>
            <input className="form-check-input mx-2" type="checkbox" id={"myTheme"} checked={dark} onChange={(e) => { changeTheme(!dark,setDark);  }} />
            <label className="form-check-label me-5" >{dark ? "Light" : "Dark"} Mode</label>

        </>
    );
}
function changeTheme(dark,setDark) {
    var body = document.body;
    if (dark) {
        body.style.backgroundColor = "black"
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black";
    }
    localStorage.setItem("myTheme", dark);
    setDark(dark);
    // console.log(localStorage);

}

export default ThemeButton; 