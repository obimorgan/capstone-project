import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import Watitingroom from './components/Watitingroom';
import Scoreboard from './components/Scoreboard';
import Gameroom from './components/Gameroom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/waitingroom" element={<Watitingroom />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/gameroom" element={<Gameroom/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
