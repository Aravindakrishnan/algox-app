import "./Navbar.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import setTheme from "../../services/toggleMode";
export default function Navbar({title}) {

    const [toggle,setToggle] = useState(false);

    const setAlgoxTheme = () => {
        
        if(toggle) setTheme("dark");
        else setTheme("light");
        
        setToggle(!toggle);
    }

    return(
        <nav className="navbar">
            <div className="navbar__title">
                <Link to="/"> <h4 className="nav__title">{title}</h4></Link>
            </div>
            <div className="navbar__icon">
                <ion-icon onClick={setAlgoxTheme} className="icon" name="sunny-outline"></ion-icon>
            </div>
        </nav>
    )
}