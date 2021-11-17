import React, { useState } from 'react';
import {
	Avatar,
	Card,
	CardContent,
	Container,
	Box,
	makeStyles,
	Typography,
	TextField,
	CardActions,
} from '@material-ui/core';
import { green } from '@mui/material/colors';
import { SendOutlined, VerifiedUserOutlined } from '@material-ui/icons';
import { LoadingButton } from '@mui/lab';

const useStyles = makeStyles({
	box: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	box1: {
		paddingTop: '1rem',
	},
	Avatar: {
		backgroundColor: green[500],
		textAlign: 'center',
		margin: 'auto',
	},
	Typography: {
		textAlign: 'center',
		display: 'block',
		fontWeight: '400',
		color: 'rgba(0,0,0,.7)',
	},
	Btn: {
		width: '100%',
		textAlign: 'center',
		marginTop: '.5rem',
		marginBottom: '1rem',
		marginLeft: '.5rem',
		marginRight: '.5rem',
	},
});

const SignUp = () => {
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
	return (
		<Box component='form' className={classes.box}>
			<Container maxWidth='sm'>
				<Card component='form'>
					<Box className={classes.box1}>
						<Avatar aria-label='login' className={classes.Avatar}>
							<VerifiedUserOutlined />
						</Avatar>
						<Typography
							className={classes.Typography}
							variant='h3'
							color='textPrimary'
						>
							Login
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
					<CardActions className={classes.Btn}>
						<LoadingButton
							onClick={handleLoading}
							variant='contained'
							color='secondary'
							loading={loading}
							loadingPosition='center'
							endIcon={<SendOutlined />}
							type='submit'
						>
							Login
						</LoadingButton>
					</CardActions>
				</Card>
			</Container>
		</Box>
	);
};

export default SignUp;
