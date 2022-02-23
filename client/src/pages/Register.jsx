import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Container,
	Box,
	makeStyles,
	Typography,
	TextField,
	CardActions,
	Button,
	Avatar,
} from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import SignUpAppBar from '../components/SignUpAppBar';

const useStyles = makeStyles({
	box: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh',
	},
	box1: {
		paddingTop: '1rem',
	},
	Avatar: {
		margin: 'auto',
	},
	Typography: {
		textAlign: 'center',
		display: 'block',
	},
	Btn: {
		width: '100%',
		textAlign: 'center',
		marginTop: '.5rem',
		marginBottom: '1rem',
		marginLeft: '.5rem',
		marginRight: '.5rem',
	},
	cAction: {
		display: 'block',
	},
	Btn_link: {
		textDecoration: 'none',
		color: 'inherit',
		textTransform: 'capitalize'
	}
});

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleConfirmPass = (e) => {
		setConfirmPass(e.target.value);
	};
	const handleLoading = () => {
		setLoading(true);
	};
	const classes = useStyles();

	// const onSubmit = () => {

	// }

	
	
	return (
		<>
		<SignUpAppBar/>
		<Box component='form' className={classes.box} >
			<Container maxWidth='sm'>
				<Card component='form'>
					<Box className={classes.box1}>
						<Stack direction='row'>
							<Avatar
								alt='oau logo'
								src='/image/oaulogo.png'
								className={classes.Avatar}
							/>
						</Stack>
						<Typography
							className={classes.Typography}
							variant='h3'
							color='textPrimary'
						>
							Sign Up
						</Typography>
					</Box>

					<CardContent>
						<TextField
							id='username'
							label='Username'
							value={name}
							onChange={handleName}
							required
							variant='outlined'
							fullWidth
							margin='normal'
						/>
						<TextField
							id='email'
							label='Email'
							value={email}
							onChange={handleEmail}
							required
							variant='outlined'
							fullWidth
							margin='normal'
						/>
						<TextField
							id='password'
							label='Password'
							type='password'
							value={password}
							onChange={handlePassword}
							required
							variant='outlined'
							fullWidth
							margin='normal'
						/>
						<TextField
							id='password'
							label='Confirm Password'
							type='password'
							value={confirmPass}
							onChange={handleConfirmPass}
							required
							variant='outlined'
							fullWidth
							margin='normal'
						/>
					</CardContent>
					<CardActions className={classes.cAction}>
						<LoadingButton
							onClick={handleLoading}
							variant='contained'
							color='primary'
							loading={loading}
							loadingPosition='center'
							endIcon={<SendOutlined />}
							type='submit'
							className={classes.Btn}
						>
							Submit
						</LoadingButton>
						<Typography color='initial' className={classes.Typography}>
							Already have account{' '}
							<Link to='/login' className={classes.Btn_link}>
								<Button variant='text' color='secondary'>
									Log In
								</Button>
							</Link>
						</Typography>
					</CardActions>
				</Card>
			</Container>
		</Box>
		</>
	);
};

export default Register;
