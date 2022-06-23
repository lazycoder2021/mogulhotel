import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Rooms from './components/Rooms';
import Addroom from './pages/Addroom';
import Editroom from './pages/Editroom';
import Releasenotes from './pages/Releasenotes';



function App() {
  return (
      <div>
          <Navbar />

          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Landingpage />} />
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/rooms' element={<Rooms />} />
                  <Route path='/addnewroom' element={<Addroom />} />
                  <Route path='/editroom/:id' element={<Editroom />} />
                  <Route path='/releasenotes' element={<Releasenotes />} />
              </Routes>
           </BrowserRouter>
     
      </div>
  );
}

export default App;
