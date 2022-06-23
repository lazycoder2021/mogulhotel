function Adminmenu() {

    function adminLogout() {

        localStorage.clear();
        alert('logout successful')
        window.location.href = '/';

    }

    return (
        <div className="usermenu">
            <div className="userprofile"><a href='/profile'>Profile</a></div>
            <div className="userprofile"><a href='/rooms'>Manage Rooms</a></div>
            
            <div className="logoutBtn" onClick={adminLogout}>Logout</div>
        </div>
    )
}

export default Adminmenu;
