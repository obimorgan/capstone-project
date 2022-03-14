/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import Lobby from './components/Lobby'
import Scoreboard from './components/Scoreboard'
import Gameroom from './components/Holes/Hole1'
import UserProvider from './components/UserProvider'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<UserProvider>
							<Home />
						</UserProvider>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/lobby' element={<Lobby />} />
				<Route path='/scoreboard' element={<Scoreboard />} />
				<Route path='/hole1' element={<Gameroom />} />
				<Route path='/hole2' element={<Gameroom />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
