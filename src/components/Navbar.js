import { Link } from "react-router-dom";
import Register from "../pages/Register";
import Welcomeuser from "./Welcomeuser";
//import { Register } from '../pages/Register';

function Navbar() {

    console.log(localStorage.getItem('currentUser'))

    if (localStorage.getItem('currentUser')) {

    }

    return (
        <div className="navbar">
            <div className="logoo"><a href="/">Moghul</a></div>
            <div className="navitems">

                {(!localStorage.getItem('currentUser') ? <div className="navlinks">
                    <p><a href="/register">Register</a></p>
                    <p><a href="/login">Login</a></p>
                </div> : <Welcomeuser/>)}
                
                    
            </div>
        </div>
   )
}

export default Navbar;
