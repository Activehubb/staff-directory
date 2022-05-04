import React, { useContext, useState } from 'react';
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
	InputAdornment,
} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { EmailOutlined, Lock, Person, SendOutlined } from '@material-ui/icons';
import { LoadingButton } from '@mui/lab';
import { Link, useNavigate } from 'react-router-dom';
import { Snackbar, FormControl, FormHelperText } from '@mui/material';
import { AuthContext } from '../../../context/auth/AuthContext';
import validator from 'validator';
import { emailSigninAdmin, usernameSigninAdmin } from '../../../context/auth/apiCall';
import './auth.css';

const useStyles = makeStyles({
	box: {
		display: 'flex',
		justifyContent: 'center',
		margin: '1rem 0',
	},

	mbox: {
		padding: '1rem',
		background: '#fff',
	},
	Avatar: {
		margin: 'auto',
		width: 72,
		height: 72,
	},
	Typography: {
		textAlign: 'center',
		display: 'block',
		fontWeight: '300',
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
		textTransform: 'capitalize',
	},
});

const Login = () => {
	const { dispatch, admin, error } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [username, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState('');
	const [alertType, setAlertType] = useState('');
	const [alertState, setAlertState] = useState(false);
	const [logState, setLogState] = useState(false);
	const navigate = useNavigate();

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleLogstate = () => {
		setLogState(!logState);
	};

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!validator.isStrongPassword(password, {
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
		) {
			setAlert('Strong password is required');
			setAlertState(true);
			setAlertType('info');
		} else if (logState === true && validator.isEmail(email)) {
			if (email.includes('@oauife.edu.ng')) {
				emailSigninAdmin({ email, password }, dispatch);
				setAlert('You are logged in successfully');
				setAlertState(true);
				setAlertType('success');
				setLoading(true);
			} else {
				setAlert('Log in with "@oauife.edu.ng"');
				setAlertState(true);
				setAlertType('info');
			}
		} else if (logState === false) {
			usernameSigninAdmin({ username, password }, dispatch);
			setLoading(true);
		}
		setTimeout(() => {
			setAlertState(false);
		}, 5000);
	};

	if (admin) {
		navigate('/dashboard');
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Box component='div' className={classes.box}>
					<Container maxWidth='lg'>
						<Box component={'div'} className={classes.wrapper}>
							<Container maxWidth='sm'>
								{error &&
									error.data.errors.map((data) => (
										<Box sx={{ margin: '1rem 0' }} >
											<Snackbar open={error} autoHideDuration={6000}>
												<Alert
													severity={'error'}
													sx={{ width: '100%' }}
												>
													{data.msg}
												</Alert>
											</Snackbar>
										</Box>
									))}

								<Card>
									<Box className={classes.mbox}>
										<Card component='div'>
											<Box className='head'>
												<Avatar
													alt='oau logo'
													src='/image/oaulogo.png'
													className={classes.Avatar}
													sx={{ width: 64, height: 64, margin: 'auto' }}
												/>
												<Typography
													className={classes.Typography}
													variant='h3'
													style={{ color: 'rgb(13, 50, 80)' }}
												>
													Log In
												</Typography>
											</Box>

											<CardContent>
												{logState ? (
													<TextField
														id='email'
														label='Email'
														InputProps={{
															startAdornment: (
																<InputAdornment position='start'>
																	<EmailOutlined />
																</InputAdornment>
															),
														}}
														value={email}
														onChange={handleEmail}
														required
														variant='outlined'
														fullWidth
														margin='normal'
													/>
												) : (
													<TextField
														id='username'
														label='Username'
														InputProps={{
															startAdornment: (
																<InputAdornment position='start'>
																	<Person />
																</InputAdornment>
															),
														}}
														value={username}
														onChange={handleName}
														required
														variant='outlined'
														fullWidth
														margin='normal'
													/>
												)}
												<FormControl>
													<FormHelperText>
														<Button
															variant='text'
															color='default'
															onClick={handleLogstate}
														>
															{logState
																? 'Log in with Username'
																: 'Log in with Email'}
														</Button>
													</FormHelperText>
												</FormControl>

												<TextField
													id='password'
													label='Password'
													InputProps={{
														startAdornment: (
															<InputAdornment position='start'>
																<Lock />
															</InputAdornment>
														),
													}}
													type='password'
													value={password}
													onChange={handlePassword}
													required
													variant='outlined'
													fullWidth
													margin='normal'
												/>

												<Box sx={{ margin: '1rem 0' }}>
													<Snackbar open={alertState} autoHideDuration={6000}>
														<Alert severity={alertType} sx={{ width: '100%' }}>
															{alert}
														</Alert>
													</Snackbar>
												</Box>

												{loading ? (
													<CardActions className={classes.cAction}>
														<LoadingButton
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
													</CardActions>
												) : (
													<input
														type='submit'
														value={'Sign In'}
														style={{
															border: 'none',
															outline: 'none',
															display: 'block',
															textAlign: 'center',
															color: '#fff',
															background: 'rgb(13, 50, 80)',
															width: '100%',
															padding: '10px 20px',
															borderRadius: '5px',
															boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%)',
															fontSize: '18px',
															fontWeight: 500,
															margin: '1rem 0',
															cursor: 'pointer',
														}}
													/>
												)}

												<Box style={{ margin: '1rem 0 0 0' }}>
													<Typography
														color='initial'
														className={classes.Typography}
													>
														{"Don't have account yet  "}
														<Link to='/signup' className={classes.Btn_link}>
															<Button variant='outlined'>Sign Up</Button>
														</Link>
													</Typography>
												</Box>
											</CardContent>
										</Card>
									</Box>
								</Card>
							</Container>
						</Box>
					</Container>
				</Box>
			</form>
		</>
	);
};

export default Login;
