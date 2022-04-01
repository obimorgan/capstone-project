/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Hole1 from './components/Holes/Hole1'
import Hole18 from './components/Holes/Hole18'
import Hole2 from './components/Holes/Hole2'
import Hole3 from './components/Holes/Hole3'
import Hole4 from './components/Holes/Hole4'
import Home from './components/Home.tsx/Home'
import Alltime from './components/Leaderboards/Alltime'
import LeaderBoard from './components/Leaderboards/Alltime'
import Todays from './components/Leaderboards/Todays'
import Lobby from './components/Lobby'
import Login from './components/Login'
import Profile from './components/Profile'
import Registration from './components/Registration'
import Scoreboard from './components/Scoreboard'
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
				<Route path='/leaderboard' element={<Alltime />} />
				<Route path='/todays' element={<Todays />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/hole1' element={<Hole1 />} />
				<Route path='/hole2' element={<Hole2 />} />
				<Route path='/hole3' element={<Hole3 />} />
				<Route path='/hole4' element={<Hole4 />} />
				<Route path='/hole18' element={<Hole18 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
