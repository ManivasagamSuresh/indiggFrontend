
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Tournament from './components/Tournament/Tournament';

import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Editparticipant from './components/Editdetails/EditDetails';
import AddTournament from './components/AddTournament/AddTournament';
import EditTournament from './components/EditTournament/EditTournament';
import Mytournaments from './components/Mytournaments/Mytournaments';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/tournament/:id' element={<Tournament/>}/>
        <Route path='/mytournament' element={<Mytournaments/>}/>
        <Route path='/editParticipant/:id' element={<Editparticipant/>}/>
        <Route path='/AddTournament' element={<AddTournament/>}/>
        <Route path='/editTournament/:id' element={<EditTournament/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
