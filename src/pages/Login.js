import { useState } from 'react'; 




function Login() {

    

    const [loginEmail, setLoginEmail] = useState(''); 
    const [loginPassword, setLoginPassword] = useState(''); 


    function loginUser(e) {
        e.preventDefault();
        console.log(loginEmail, loginPassword)
        if (loginEmail == '' || loginPassword == '') {
            return alert('provide login credentials')
        }

        fetch('https://moghulhotel.herokuapp.com/api/v1/login', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            })
        }).then((res) => {
            return res.json(); 
        }).then((data) => {
            console.log(data)
            
            if (data.msg == 'passwords do not match') {
                return alert(JSON.stringify(data));
            }

            if (data.msg == 'no such user exists') {
                return alert(JSON.stringify(data));
            }
            
            alert(data.msg)
            localStorage.setItem('currentUser', JSON.stringify(data.otherdetails))
            localStorage.setItem('currentUserToken', data.accessToken)
            window.location.href = '/home';
        }).catch((e) => {
            console.log(e)
        })

    }



    return (
        <div class="formContainer" onSubmit={loginUser}>
            <form className="loginForm">
                <h2>Login</h2>
                <div className="form-control">
                    <input type="text" placeholder="enter email" onChange={(e) => { setLoginEmail(e.target.value) }} />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="enter password" onChange={(e) => { setLoginPassword(e.target.value) }} />
                </div>

                

                <div className="form-control">
                    <button>Login</button>
                </div>
             </form>
        </div>
    )
}

export default Login;
