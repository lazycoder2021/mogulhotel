import { useState } from 'react'; 



function Addroom() {

    let user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user.isAdmin)

    if (!user.isAdmin) {
        alert('you are not admin, you are not authorised to access this page');
        window.location.href = '/';
    }

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [maxcount, setMaxcount] = useState(0);
    const [phoneno, setPhoneno] = useState(0);
    
    const [rentperday, setRentperday] = useState(0);
    const [imageurl, setImageurl] = useState('');
    const [roomtype, setRoomtype] = useState('');
    const [bookingstatus, setBookingstatus] = useState('');

    function addRoom(e) {
        //alert(name + desc + maxcount + phoneno + rentperday + imageurl + roomtype + bookingstatus)
        e.preventDefault();

        fetch('https://moghulhotel.herokuapp.com/api/v1/addrooms', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')
            },
            body: JSON.stringify({
                name: name,
                description: desc,
                maxcount: maxcount,
                phonenumber: phoneno,
                rentperday: rentperday,
                type: roomtype,
            })
        }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data)
                alert('room added successfully')
                
                window.location.href = '/rooms';
            }).catch((e) => {
                console.log(e)
            })
        
    }



    return (
        <>
        <p className="backtorooms"><a href='/rooms' style={{ color: 'black' }}>Back to Rooms Page</a></p>
        <div className="addRoomContainer">
             <div className="addRoomControl">
                Name<span>*</span>: <input type="text" onChange={(e) => { setName(e.target.value) }} />
            </div>
                <div className="addRoomControl">
                    Description<span>*</span>: <input type="text" onChange={(e) => { setDesc(e.target.value) }} />
            </div>
                <div className="addRoomControl">
                    Maxcount<span>*</span>: <input type="number" onChange={(e) => { setMaxcount(e.target.value) }} />
            </div>
                <div className="addRoomControl">
                    Phonenumber<span>*</span>: <input type="number" onChange={(e) => { setPhoneno(e.target.value) }} />
            </div>
                <div className="addRoomControl">
                    Rent per day<span>*</span>: <input type="number" onChange={(e) => { setRentperday(e.target.value) }} />
            </div>
            <div className="addRoomControl">
                    Room Type<span>*</span>:
                <select onChange={(e) => { setRoomtype(e.target.value) }}>
                    <option value="deluxe">--Room Type--</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="non deluxe">Non Deluxe</option>
                </select>
                </div>
                <div className="addRoomControl" onChange={(e) => { setImageurl(e.target.value) }}>
                Imageurl: <input type="text" />
            </div>
            <div className="addRoomControl">
                    Booking Status:
                <select onChange={(e) => { setBookingstatus(e.target.value) }}>
                    <option>--booking status--</option>
                    <option>Available</option>
                    <option>Booked</option>
                </select>
            </div>
            <div className="addRoomControl">
                    <button onClick={addRoom}>Save Room</button>
            </div>
            </div>
         </>
    )
}

export default Addroom; 
