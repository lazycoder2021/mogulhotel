import { useState } from 'react';







function Register() {

    const [registerEmail, setRegisterEmail] = useState(''); 
    const [registerPassword, setRegisterPassword] = useState(''); 
    const [isAdmin, setIsAdmin] = useState(false);
    

    function registerUser(e) {
        e.preventDefault();
        console.log(registerEmail, registerPassword, isAdmin)

        if (registerEmail == '' || registerPassword == '') {
            return alert('provide email and password')
        }


        fetch('https://moghulhotel.herokuapp.com/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: registerEmail,
                password: registerPassword,
                isAdmin: isAdmin
            })

        }).then((res) => {
                return res.json();
        }).then((data) => {
                console.log(JSON.stringify(data.msg))
                alert(JSON.stringify(data.msg))
            }).catch((e) => {
                console.log(e)
            })
      
       

        console.log('registering user....')
        
       
    }



    return (
        <div class="formContainer">
            <form className="loginForm" onSubmit={registerUser}>
                <h2>Register</h2>
                <div className="form-control">
                    <input type="text" placeholder="enter email" onChange={(e) => { setRegisterEmail(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="enter password" onChange={(e) => { setRegisterPassword(e.target.value) }} />
                </div>

                <div className="form-control">
                    <select onChange={(e) => { setIsAdmin(e.target.value) }}>
                        <option value="false">--admin or not?--</option>
                        <option value="true">Admin</option>
                        <option value="false">Not Admin</option>
                    </select>
                </div>

                <div className="form-control">
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;