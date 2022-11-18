import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PageDashboard } from './pages/PageDashboard';
import { PageJobs } from './pages/PageJobs';
import { PageSkills } from './pages/PageSkills';

function App() {
	return (
		<div className="App">
			<AppBar className="appBar">
				<Toolbar>
					<Typography variant="h6" color="inherit" component="div">
						<nav>
							<span className="navHeader">Get a Job</span>
							<NavLink to="/dashboard">Dashboard</NavLink>
							<NavLink to="/jobs">Jobs</NavLink>
							<NavLink to="/skills">Skills</NavLink>
						</nav>
					</Typography>
				</Toolbar>
			</AppBar>

			<Routes>
				<Route path="/dashboard" element={<PageDashboard />} />
				<Route path="/jobs" element={<PageJobs />} />
				<Route path="/skills" element={<PageSkills />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
			</Routes>
		</div>
	);
}

export default App;
