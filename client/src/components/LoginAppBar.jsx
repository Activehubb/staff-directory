import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	appNavBar: {
		backgroundColor: '#fff',
		color: '#1976d2',
	},
});

export default function LoginAppBar() {
	const classes = useStyles()
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' className={classes.appNavBar}>
				<Container maxWidth='md'>
					<Toolbar>
						<Avatar alt='oau logo' src='/image/oaulogo.png' sx={{ mr: 2 }} />
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ display: { sm: 'block' }, flexGrow: '1' }}
						>
							Staff Directory
						</Typography>

						<Button color='inherit'>
							<Link to='/register'>Sign Up</Link>
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
