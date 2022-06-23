import { useState, useEffect } from 'react'; 

import axios from 'axios';



function Home() {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay(rentperday, id) {
        console.log(rentperday, id)

        

        if (!localStorage.getItem('currentUser')){
            return alert('register/login to book room')
        }

        
        
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("https://moghulhotel.herokuapp.com/order");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_obMCtlKp3EEqKX", // Enter the Key ID generated from the Dashboard
            amount: rentperday.toString(),
            currency: currency,
            name: "Mogul Hotels",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

               // const result = await axios.post("http://localhost:5000/payment/success", data);

                fetch(`https://moghulhotel.herokuapp.com/api/v1/editroom/${id}`, {
                    'method': 'PUT',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'token': 'Bearer ' + localStorage.getItem('currentUserToken')
                    },
                    'body': JSON.stringify({
                        bookingstatus: 'booked'
                    })
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data)
                }).catch((e) => {
                    console.log(e)
                })

                alert('room booked successfully');

                

                window.location.reload(); 
   
                
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }







    const [rooms, setRooms] = useState([]);

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
                        <div className="card">
                            <div className="cardLeft">
                                <img src={room.imageurls[0]} />
                            </div>
                            <div className="cardRight">
                                <h2>{room.name}</h2>
                                <p>{room.description}</p>
                                <p>Max Persons: {room.maxcount}</p>
                                <p>Rent Per Day: {room.rentperday}</p>
                                <p>Room Status: {room.bookingstatus}</p>
                                <p>Type: {room.type}</p>
                                <div>
                                    
                                    <button className="bookNow" onClick={() => displayRazorpay(room.rentperday, room._id)}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
        )
   
}

export default Home;