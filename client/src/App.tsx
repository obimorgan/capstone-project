/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import Lobby from './components/Lobby'
import Scoreboard from './components/Scoreboard'
import UserProvider from './components/UserProvider'
import Hole1 from './components/Holes/Hole1'
import Hole2 from './components/Holes/Hole2'
import Hole3 from './components/Holes/Hole3'
import Hole4 from './components/Holes/Hole4'

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
				<Route path='/scoreboard' element={<Scoreboard data={[]} />} />
				<Route path='/hole1' element={<Hole1 />} />
				<Route path='/hole2' element={<Hole2 />} />
				<Route path='/hole3' element={<Hole3 />} />
				<Route path='/hole4' element={<Hole4 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
