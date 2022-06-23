import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';




function Editroom() {
    let updatedname, updateddesc, updatedcount, updatedrent, updatedphone, updatedurl, updatedstatus;

    function newName() {
        updatedname = prompt('enter new name');
    }

    function newDesc() {
        updateddesc = prompt('enter new desc');
    }

    function newMaxCount() {
        updatedcount = Number(prompt('enter new max count'));
    }

    function newRentPerDay() {
        updatedrent = Number(prompt('enter new rent per day'));
    }

    function newPhoneNumber() {
        updatedphone = Number(prompt('enter new phone number'));
    }

    function newImageUrl() {
        updatedurl = prompt('enter new image url');
    }

    function newBookingStatus() {
        updatedstatus = prompt('enter either booked or available');
    }


    function updateRoom(e) {
        e.preventDefault();
        //alert(updatedname + updateddesc + updatedcount + updatedphone + updatedrent + updatedurl)

        fetch(`https://moghulhotel.herokuapp.com/api/v1/editroom/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')
            },
            body: JSON.stringify({
                name: updatedname,
                description: updateddesc,
                maxcount: updatedcount,
                phonenumber: updatedphone,
                rentperday: updatedrent,
                imageurls: updatedurl,
                bookingstatus: updatedstatus
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            window.location.reload(); 
            window.location.href = '/rooms';
        }).catch((e) => {
            console.log(e)
        })
    }


    

    const [room, setRoom] = useState({
        name: '', 
        desc: '', 
        maxcount: '',
        phonenumber: '', 
        rentperday: '',
        type: '',
        bookingstatus: '',
        imageurls: [], 
        id: ''

    });



    const { id } = useParams();

    console.log(id)



    useEffect(() => {
        fetch(`https://moghulhotel.herokuapp.com/api/v1/getroom/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'token': 'Bearer ' + localStorage.getItem('currentUserToken')
            }

        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data.room)
            let temp = data.room;
            console.log(temp.name)
            setRoom({ id: temp._id, name: temp.name, desc: temp.description, maxcount: temp.maxcount, phonenumber: temp.phonenumber, rentperday: temp.rentperday, type: temp.type, bookingstatus: temp.bookingstatus, imageurls:temp.imageurls[0] })
            console.log(room)
        }).catch((e) => {
            console.log(e)
        })
},[])
    

    





    return (
        <>
            <div className="editcard">
                <p><b>Note:</b> Click <b>Modify</b>, enter new value, and then click '<b>Update Room Details</b>' button for successful update.</p>
                <p>Room Name: {room.name} <button className="mod" onClick={newName}>Modify</button></p>
                <p>Room Description: {room.desc} <button className="mod" onClick={newDesc}>Modify</button></p>
                <p>Room Image Url: {room.imageurls}<button className="mod" onClick={newImageUrl}>Modify</button></p>
                <p>Maxcount: {room.maxcount}<button className="mod" onClick={newMaxCount}>Modify</button></p>
                <p>Rent Per Day: {room.rentperday}<button className="mod" onClick={newRentPerDay}>Modify</button></p>
                <p>Phone Number: {room.phonenumber}<button className="mod" onClick={newPhoneNumber}>Modify</button></p>
                <p>Booking Status: {room.bookingstatus}<button className="mod" onClick={newBookingStatus}>Modify</button></p>

                <button className="updateroom" onClick={updateRoom}>Update Room Details</button>
            </div>
        </>        
    )
}

export default Editroom;
