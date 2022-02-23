import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react';
import Navbar from './components/SignUpAppBar';
import SideBar from './components/sidebar/SideBar';
import Login from './pages/Login';
import Register from './pages/Register';
import PrimarySearchAppBar from './components/AppBar';
import './app.css';
import Dashboard from './pages/Private/dashboard/Dashboard';
import UserData from './pages/Private/userData/UserData';
import Profile from './pages/public/profile/Profile'
import Panel from './pages/public/widget/panel/Panel';

function App() {
	const [user, setUser] = useState(false);
	const [admin, setAdmin] = useState(false);
	return (
		<Router>
			<Fragment>
				{/* <Profile /> */}
				<Panel />
				{user && (
					<>
						<PrimarySearchAppBar />
						<div className='container'>
							<SideBar />
							<Routes>
								<Route path='/dashboard' element={<Dashboard />} />
								<Route path='/signin' element={<Login />} />
								<Route path='/signup' element={<Register />} />
								<Route path='/usersdata' element={<UserData />} />
							</Routes>
						</div>
					</>
				)}
			</Fragment>
		</Router>
	);
}

export default App;
