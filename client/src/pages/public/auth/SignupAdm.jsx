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
	Chip,
	FormGroup,
	FormControlLabel,
	Switch,
} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { CloudUpload, SupervisorAccount } from '@material-ui/icons';
import { LoadingButton } from '@mui/lab';
import { Link, useNavigate } from 'react-router-dom';
import { Snackbar, Stack } from '@mui/material';
import { AuthContext } from '../../../context/auth/AuthContext';
import validator from 'validator';
import { signupAdmin } from '../../../context/auth/apiCall';
import storage from '../../../fireStorage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles({
	box: {
		margin: '1rem 0',
	},
	box1: {
		paddingTop: '1rem',
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
	Wrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
	},
	flex: {
		display: 'flex',
		width: '100%',
	},
});

const Register = ({ handleAvatar, userAvatar }) => {
	const { dispatch, admin, error } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [load, setLoad] = useState(0);
	const [progress, setProgress] = useState(0);
	const [username, setName] = useState('');
	const [profilePic, setProfilePic] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [progErr, setProgErr] = useState('');
	const [isAdmin, setIsAdmin] = useState(true);
	const [confirmPass, setConfirmPass] = useState('');
	const [alert, setAlert] = useState('');
	const [alertType, setAlertType] = useState('');
	const [alertState, setAlertState] = useState(false);

	const uploadFile = (file) => {
		if (!file) return;

		const fileName = new Date().getTime() + file.name;

		const storageRef = ref(storage, `/files/${fileName}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				console.log(prog);
				setProgress(prog);
			},
			(err) => {
				console.log(err);
				setProgErr(err);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setProfilePic(url);
					setLoad((data) => data + 1);
				});
			}
		);
	};

	const handleUpload = (e) => {
		e.preventDefault();

		uploadFile(userAvatar);
		setLoading(true);
	};

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

	const handleIsAdmin = (event) => {
		setIsAdmin(event.target.checked);
	};

	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPass) {
			setAlert('Password do not match!!!');
			setAlertState(true);
			setAlertType('warning');
		} else if (
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
			setAlertType('error');
		} else if (validator.isEmail(email)) {
			if (!email.includes('@oauife.edu.ng')) {
				setAlert("Enter a valid email with the '@oauife.edu.ng'");
				setAlertState(true);
				setAlertType('error');
			} else {
				signupAdmin({ username, email, password, profilePic, isAdmin }, dispatch);
				setAlert('Account successfully created');
				setAlertState(true);
				setAlertType('success');
				setLoading(true);
				setLoad(0);
			}
		}
		setTimeout(() => {
			setAlertState(false);
			setLoading(false);
		}, 4000);
	};

	const navigate = useNavigate();

	if (admin) {
		navigate('/dashboard');
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Box component='div' className={classes.box}>
					<Container maxWidth='lg'>
						<Box>
							<Container maxWidth='sm'>
								{error.status === 400
									? error.data.errors.map((data) => (
											<Box sx={{ margin: '1rem 0' }}>
												<Snackbar open={error} autoHideDuration={6000}>
													<Alert severity={'error'} sx={{ width: '100%' }}>
														{data.msg}
													</Alert>
												</Snackbar>
											</Box>
									  ))
									: error.status === 500 && (
											<Box sx={{ margin: '1rem 0' }}>
												<Snackbar open={error} autoHideDuration={6000}>
													<Alert severity={'error'} sx={{ width: '100%' }}>
														{`${error.statusText} You have ${error.headers.connection} network connection`}
													</Alert>
												</Snackbar>
											</Box>
									  )}
								<Card component={'div'} style={{ position: 'relative' }}>
									<Box className={classes.mbox}>
										<Card component='div'>
											<Box>
												<Avatar
													alt='oau logo'
													src='/image/oaulogo.png'
													className={classes.Avatar}
												/>
												<Typography
													className={classes.Typography}
													variant='h3'
													style={{ color: 'rgb(13, 50, 80)' }}
												>
													Sign Up
												</Typography>
											</Box>

											<Box>
												<Box className={classes.flex}>
													<CardContent>
														<TextField
															id='username'
															label='Username'
															value={username}
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
													</CardContent>
													<CardContent>
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
												</Box>
												<CardContent>
													<Stack
														direction='row'
														alignItems='center'
														justifyContent='space-between'
														sx={{ px: 2, py: 1 }}
														style={{
															background: 'rgba(13, 50, 80, .05)',
															margin: '0 0 .5rem 0',
															borderRadius: '5px',
														}}
													>
														<Box>
															<Chip
																label={isAdmin ? 'Admin' : 'User'}
																className={`status ${
																	isAdmin ? 'Activated' : 'Unactivate'
																}`}
															/>
														</Box>
														<FormGroup>
															<FormControlLabel
																control={
																	<Switch
																		checked={isAdmin}
																		onChange={handleIsAdmin}
																		value={isAdmin}
																	/>
																}
															/>
														</FormGroup>
													</Stack>

													<label htmlFor='file'>
														<div>
															<Button
																style={{
																	width: '100%',
																	height: '32px',
																	padding: '5px 0',
																	background: 'rgba(13, 50, 80, .05)',
																}}
																component={'a'}
															>
																<SupervisorAccount
																	style={{
																		width: '32px',
																		height: '32px',
																	}}
																/>
																{progress
																	? `Upload Progress ${progress}%`
																	: 'Upload profile picture'}
															</Button>
														</div>
													</label>
													<input
														type='file'
														id='file'
														onChange={(e) => handleAvatar(e)}
														hidden
														required
													/>
													{progress ? (
														<Box
															sx={{ width: '100%' }}
															style={{ margin: '1rem 0' }}
														>
															<LinearProgress
																variant='determinate'
																value={progress}
															/>
														</Box>
													) : (
														''
													)}
													{progErr && (
														<Button
															style={{
																width: '100%',
																height: '32px',
																padding: '5px 0',
																background: 'rgba(13, 50, 80, .05)',
															}}
															component={'a'}
														>
															{progErr}
														</Button>
													)}
												</CardContent>
											</Box>

											<CardContent>
												<Box>
													<Snackbar open={alertState} autoHideDuration={6000}>
														<Alert severity={alertType} sx={{ width: '100%' }}>
															{alert}
														</Alert>
													</Snackbar>
												</Box>

												{load === 0 ? (
													<CardActions>
														<LoadingButton
															variant='contained'
															color='primary'
															loading={loading}
															loadingPosition='center'
															endIcon={<CloudUpload />}
															type='submit'
															disabled={userAvatar === false}
															onClick={handleUpload}
															fullWidth
														>
															Upload
														</LoadingButton>
													</CardActions>
												) : (
													<input
														type='submit'
														value={'Sign Up'}
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
															cursor: 'pointer',
															position: 'relative',
														}}
													/>
												)}

												<Box style={{ margin: '1rem 0 0 0' }}>
													<Typography
														color='initial'
														className={classes.Typography}
													>
														Already have account{' '}
														<Link to='/signin' className={classes.Btn_link}>
															<Button variant='outlined'>Log In</Button>
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

export default Register;
