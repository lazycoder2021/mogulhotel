function Releasenotes() {
    return (
        <div className="releaseNotesContainer">
            <h2>Release Notes</h2>


            <h3>Application Workflow Related</h3>
            <p className="para">1. Application Video Demo Link: <a href="https://vimeo.com/723264363" target="_blank" className="baba">https://vimeo.com/723264363</a> </p>
            <p>2. User/Admin differences have been handled, mostly on the frontend side using a 'isAdmin' db object variable.</p>
            <p>3. As user, you can only login and book rooms</p>
            <p>4. As admin, you can modify room details (add, update and delete) and also book rooms too.</p>
            <p>5. You can decide whether you want to be normal user or admin while registering for the app</p>
            <p>6. IMPORTANT: Your user token will expire every 4 mins after login for security reasons ;) So if you are not able to see what you are requesting for, then this generally means your user token has expired and that you need to login again.</p>
            <p>7. VERY IMPORTANT: For now, you cannot provide dates for booking rooms. This may come in the next release :) </p>
            <p>8. Upon successful payment/booking, the status of the booked room is modified to 'booked' and stays so until the admin logs in and modifies it :) </p>
            <div className="gap"></div>

            <h3>Backend Related Learnings [express, nodejs and mongodb] [MEN of MERN]</h3>
            <p className="para">1. Built the backend (both server/db) logic entirely from scratch for learning purpose. </p>
            <p>2. User passwords get hashed, jwt tokens are generated (and are stored in local storage for now) to authorize user sessions</p>
            <p>3. A simple middleware is used to verify those jwt tokens and authorize user sessions.</p>
            <p>4. Another middleware (for authorizing admin actions from backend) was implemented, but it failed. We are in the process of rectifying it ;) [So we ended up handling it in the frontend using react].</p>


            <div className="gap"></div>
            <h3>Backend Roadmap ;)</h3>
            <p className="para">1. To handle user sessions from the backend, instead of local storage, for enhancing user security.</p>
            <p>2. To automate refreshment of jwt tokens (for every 15 mins or so) to beef up user security.</p>
            <p>3. To handle booking related logic (from date, to date, overlapping of dates) which is not available at the moment ;)</p>

            <div className="gap"></div>

            <h3>Frontend Learnings [React] [R of MERN]</h3>
            <p className="para">1. Learned how dynamic routing works in react. Know how to handle path parameters (and not query params) for now. </p>
            <p>2. Learned how to compartmentalize the web app into components and pages.</p>
            <p>3. Learned how to store an object using react useState variable (previously knowledge was limited to strings, numbers, boolean and array of objects) </p>
            <p>4. Learned how to execute update operations (put or patch). But still have issues when it comes to handling the data using input field (as you can see in the profile page. That is the reason why a prompt box was used when handling room related updates.)</p>
            <p>5. Learned how to integrate razopay payment gateway with react</p>
            <p>6. Learned how to use ternary operator to hide/show components. For example, the menu component will be different for user and admin. As admin you will get a 'manage rooms' link too.</p>

            <div className="gap"></div>
            <h3>Frontend Roadmap</h3>
            <p className="para">1. To learn handling of query parameters</p>
            <p>2. To learn how to handle input fields properly during update operations, so that they can display and update data at the same time.</p>

            <p>If you are not happy with our 'ithu pona app', you can very well write to us. Feedbacks are most welcome! :)</p>
        </div>
   )
}

export default Releasenotes;
