import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import Lobby from './components/Lobby';
import Scoreboard from './components/Scoreboard';
import Gameroom from './components/Lobby';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/gameroom" element={<Gameroom/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
