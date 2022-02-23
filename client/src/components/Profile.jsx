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
	Button,
} from '@material-ui/core';
import { SendOutlined } from '@material-ui/icons';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import LoginAppBar from '../layouts/LoginAppBar';

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
		textAlign: 'center',
		margin: 'auto',
	},
	Typography: {
		textAlign: 'center',
		display: 'block',
	},
	Btn: {
		width: '100%',
		textAlign: 'center',
		display: 'block',
		marginTop: '.5rem',
		marginBottom: '1rem',
		margin: 'auto',
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

const CreateProfile = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleLoading = () => {
		setLoading(true);
	};
	const classes = useStyles();

	return (
		<>
			<LoginAppBar />
			<Box component='form' className={classes.box}>
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
						</CardContent>
						<CardActions className={classes.cAction}>
							<LoadingButton
								onClick={handleLoading}
								variant='contained'
								color='secondary'
								loading={loading}
								loadingPosition='center'
								endIcon={<SendOutlined />}
								type='submit'
								fullWidth
								className={classes.Btn}
							>
								Login
							</LoadingButton>
							<Typography color='initial' className={classes.Typography}>
								Don't have an account yet{' '}
								<Link to='/register' className={classes.Btn_link}>
									<Button variant='text' color='primary'>
										Sign Up
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

export default CreateProfile;
