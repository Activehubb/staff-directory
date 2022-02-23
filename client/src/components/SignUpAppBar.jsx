import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import { Button, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	appNavBar: {
		backgroundColor: '#fff',
		color: '#1976d2',
	},
	Link: {
		textDecoration: 'none',
		color: '#fff',
	},
});

export default function SignUpAppBar() {
	const classes = useStyles();
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
						<Button color='inherit' variant='outlined'>
							<Link to='/login' className={classes.Link}>
								Login
							</Link>
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
