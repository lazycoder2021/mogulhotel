import { useState, useEffect } from 'react';



function Rooms() {

    let user = JSON.parse(localStorage.getItem('currentUser')); 
    console.log(user.isAdmin)

    if (!user.isAdmin) {
        alert('you are not admin, you are not authorised to access this page');
        window.location.href = '/';
    }

    const [rooms, setRooms] = useState([]);

    function editRoom(id) {
        console.log(id)
        window.location.href = `/editroom/${id}`
    }

    function deleteRoom(id) {
        console.log(id)

        fetch(`https://moghulhotel.herokuapp.com/api/v1/deleteroom/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')
            }
        }).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                alert('room deleted successfully')
                window.location.href = '/rooms';
            }).catch((e) => {
                console.log(e)
            })

        
    }

    useEffect(() => {
        fetch('https://moghulhotel.herokuapp.com/api/v1/rooms')
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data.msg)
                setRooms(data.msg)
                console.log(rooms)
            })
    }, [])

    return (
    <>
        {
            rooms.map((room) => {
                return (
                    <div className="container">
                        <div className="card" key={room._id}>
                            <div className="cardLeft">
                                <img src={room.imageurls[0]} />
                            </div>
                            <div className="cardRight">
                                <h2>{room.name}</h2>
                                <p>{room.description}</p>
                         
                                <p>Rent Per Day: {room.rentperday}</p>
                                <p>Phone No:{room.phonenumber}</p>
                                <p>Type: {room.type}</p>
                                <p>Booking status:{room.bookingstatus}</p>
                                <div>
                                    <button className="addroom"><a href='/addnewroom'>Add Room</a></button>
                                    <button className="editroom" onClick={() => { editRoom(room._id) }}>Edit Room</button>
                                    <button className="deleteroom" onClick={() => { deleteRoom(room._id) }}>Delete Room</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }  
            </>
   )
}

export default Rooms;
