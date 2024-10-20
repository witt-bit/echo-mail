import './App.css';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';

function App() {
	return (
		<div className="container">
			<div className="header-container">
				<div className="menu-container">1</div>
				<div className="search-container">search</div>
				<div className="profile-container">Profile</div>
			</div>
			<div className="main-container">
				<Grid container spacing={3} sx={{ flexGrow: 1 }}>
					<Grid size="auto">
						<Button variant="plain">收件箱</Button>
						<Button variant="plain">QQ邮箱</Button>
						<Button variant="plain">Gmail邮箱</Button>
						<Button variant="plain">outlook邮箱</Button>
					</Grid>
					<Grid size={2}>1</Grid>
					<Grid size={8}>1</Grid>
				</Grid>
			</div>
			<div className="footer-container">
				<Button variant="plain">+</Button>
			</div>
		</div>
	);
}

export default App;
