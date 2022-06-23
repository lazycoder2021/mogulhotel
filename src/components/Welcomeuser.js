import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { useState } from 'react';
import Usermenu from './Usermenu';
import Adminmenu from './Adminmenu';


function Welcomeuser() {

    const [show, setShow] = useState(false);
    const [showAdminMenu, setAdminMenu] = useState(false);

    var user = JSON.parse(localStorage.getItem('currentUser')); 
    console.log(user.email)

    if (user.isAdmin) {
        console.log('user is admin also, show separate component')
    }

    /*
    function removeUser() {
        localStorage.removeItem('currentUser');
        window.location.reload(); 
    }
    */
    



    return (
        <>
        <div className="welcomeuser">
                <p>Welcome {user.email}</p>
                {user.isAdmin ? <MdOutlineArrowDropDownCircle onClick={() => { setAdminMenu(!showAdminMenu); }} className="dropdown" /> : <MdOutlineArrowDropDownCircle onClick={() => { setShow(!show); }} className="dropdown" />}
            
        </div> 
            <div>
                {show ? <Usermenu /> : ' '}
                {showAdminMenu ? <Adminmenu/> : ''}
            </div>
        </>
    )
}

export default Welcomeuser; 
