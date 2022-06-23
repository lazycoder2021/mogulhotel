import { useEffect } from 'react'; 
import { useState } from 'react';


// COULDN'T SET AN OBJECT INTO A STATE VARIABLE, SHOULD FIND OUT HOW THIS IS DONE

function Profile() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 
    const [userDetails, setUserDetails] = useState({
        id: '', 
        email: '', 
        password:''
    });

    var user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user._id)
    var userId = user._id;


    function updateEmail() {
        console.log(email)
        fetch(`https://moghulhotel.herokuapp.com/api/v1/profile/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')

                //'token': 'Bearer ' + localStorage.getItem('token')
            },
            "body": JSON.stringify({
                "email": email
            })
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
    }).catch((e) => {
        console.log(e)
    })
  }

    

    
    useEffect(() => {
        fetch(`https://moghulhotel.herokuapp.com/api/v1/profile/${userId}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')

                //'token': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
            console.log((data.user));
            let userObject = data.user;
            console.log(userObject._id)
            console.log(userObject.email)
            setUserDetails({ id: userObject._id, email: userObject.email, password: userObject.password });
            console.log(userDetails)

         
            setMessage(JSON.stringify(data.msg))
        }).catch((e) => {
            console.log(e)
        })

    },[])

    
    //console.log(usersDetails)


    return (
        
        <>
            
            
                <div className="profileCard">
                    <div className="profileTitle">
                        <h3>Please Note: Your token is valid only for 2 mins, after which you will have to login again to view your profile.</h3>
                        <h3><b>Server Message:</b> {message}</h3>
                    </div>
                    <div className="profileContents">
                       User ID <input type="text" readOnly value={userDetails.id} />
                       Email <input type="text" defaultValue={userDetails.email} onClick={(e) => {setEmail(e.target.value)}}/>
                       Your Password (Encrypted) <input type="text" value={userDetails.password} readOnly />
                    <button style={{ background: 'red' }} onClick={updateEmail}>Update Your Email</button>
                    </div>
                
                </div>
            

        
        
        </>
   )
}

export default Profile;
