function Usermenu() {

    function removeUser() {

        localStorage.clear(); 
        alert('logout successful')
        window.location.href = '/';
        
    }

    return (
        <div className="usermenu">
            <div className="userprofile"><a href='/profile'>Profile</a></div>
            <div className="logoutBtn" onClick={removeUser}>Logout</div>
        </div>
    )
}

export default Usermenu;