import React, { useEffect, useContext } from 'react';
import {
	Avatar,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	ListItem,
	ListItemText,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import { Stack, IconButton } from '@mui/material';
import { Edit, LocationOn } from '@material-ui/icons';
import { getCurrentUserProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import { AuthContext } from '../../../context/auth/AuthContext';
import Loader from '../../../utils/Loader';

export default function User() {
	const { getCurrentProfile, dispatch, error, isError } =
		useContext(ProfileContext);

	const { admin } = useContext(AuthContext);

	useEffect(() => {
		getCurrentUserProfile(dispatch);
	}, [dispatch]);

	console.log(getCurrentProfile, error, isError);

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	if (getCurrentProfile === null) {
		return <Loader />;
	}

	return (
		<>
			<Container maxWidth={'md'}>
				{!isError ? (
					<>
						{admin && (
							<Card
								style={{
									background: 'rgb(0, 30, 60)',
									border: '1px solid rgb(15, 80, 133)',
									margin: '1rem 2rem',
								}}
							>
								<Box style={{ display: 'flex', padding: '5px 10px' }}>
									<ListItemText
										className='textColor'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{getCurrentProfile._id &&
													`ID: ${getCurrentProfile._id}`}
											</Typography>
										}
									/>
									<ListItemText
										className='textColor'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{getCurrentProfile.createdAt &&
													`Created At: ${new Date(
														getCurrentProfile.createdAt
													).toDateString()}`}
											</Typography>
										}
									/>
									<ListItemText
										className='textColor'
										secondary={
											<Typography
												sx={{ display: 'inline' }}
												component='span'
												variant='body2'
												color='text.primary'
											>
												{getCurrentProfile.user.email &&
													`Email: ${getCurrentProfile.user.email}`}
											</Typography>
										}
									/>
								</Box>
							</Card>
						)}
						<Box>
							<Box>
								<Box>
									<Container maxWidth={'md'} className=' m-2'>
										<Card
											style={{
												background: 'rgb(0, 30, 60)',
												border: '1px solid rgb(15, 80, 133)',
											}}
											elevation={3}
										>
											<Box style={{ padding: '0 2rem' }}>
												<Box className='card'>
													<Box
														style={{
															display: 'flex',
															alignItems: 'center',
														}}
													>
														<Avatar
															src={getCurrentProfile.user.profilePic}
															alt='avatar'
															variant={'rounded'}
															className='avatar'
															style={{ width: '72px', height: '72px' }}
														/>
														<Box
															component={'div'}
															style={{ paddingLeft: '1rem' }}
														>
															<Stack spacing={1}>
																<Typography
																	style={{ fontWeight: '700', color: '#fff' }}
																>
																	{getCurrentProfile.bio.fname +
																		' ' +
																		getCurrentProfile.bio.lname}
																</Typography>
																<Typography
																	variant='body2'
																	style={{ display: 'flex', color: '#fff' }}
																>
																	<LocationOn />{' '}
																	{getCurrentProfile.bio.residence}
																</Typography>
															</Stack>
														</Box>
													</Box>
													<Box>
														<IconButton aria-label=''>
															<Edit
																sx={{ fontSize: 14 }}
																style={{
																	border: '1px solid rgb(13, 50, 80)',
																	borderRadius: '5px',
																	color: '#f7f7f7',
																	padding: '5px',
																	marginRight: '.5rem',
																}}
															/>
														</IconButton>
													</Box>
												</Box>
											</Box>
										</Card>
									</Container>
								</Box>

								<Container maxWidth={'md'} className=' m-2'>
									<Card
										elevation={3}
										style={{
											background: 'rgb(0, 30, 60)',
											border: '1px solid rgb(15, 80, 133)',
										}}
									>
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Directory'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.dir
															? `Faculty — ${getCurrentProfile.faculty}`
															: getCurrentProfile.college
															? `College — ${getCurrentProfile.college}`
															: getCurrentProfile.center
															? `Center — ${getCurrentProfile.center}`
															: getCurrentProfile.unit
															? `Unit — ${getCurrentProfile.unit}`
															: ''}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Rank'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.bio.rank}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Rank'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.bio.qualification}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Contact'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.bio.phoneNumber}
													</Typography>
												}
											/>
										</ListItem>
										<Divider style={{ background: 'rgb(13, 50, 80)' }} />
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Gender'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.bio.gender}
													</Typography>
												}
											/>
										</ListItem>
									</Card>
								</Container>

								<Container maxWidth={'md'} className=' m-2'>
									<Card
										elevation={3}
										style={{
											background: 'rgb(0, 30, 60)',
											border: '1px solid rgb(15, 80, 133)',
										}}
									>
										<ListItem alignItems='flex-start' className='p-2 textColor'>
											<ListItemText
												primary='Description'
												secondary={
													<Typography
														sx={{ display: 'inline' }}
														component='span'
														variant='body2'
														color='text.primary'
													>
														{getCurrentProfile.bio.desc}
													</Typography>
												}
											/>
										</ListItem>
									</Card>
								</Container>
								{getCurrentProfile.bio.research && (
									<Container maxWidth={'md'} className=' m-2'>
										<Paper
											elevation={3}
											style={{
												background: 'rgb(0, 30, 60)',
												border: '1px solid rgb(15, 80, 133)',
												padding: '5px',
											}}
										>
											{getCurrentProfile.bio.research.map((item, idx) => (
												<Chip
													label={item}
													key={idx}
													style={{ margin: ' 0 10px' }}
												/>
											))}
										</Paper>
									</Container>
								)}
							</Box>
						</Box>
					</>
				) : isError.status === 403 ? (
					<Dialog
						fullScreen={fullScreen}
						open={error}
						style={{ color: '#333' }}
					>
						<DialogTitle>{`Your access is ${isError.statusText}`}</DialogTitle>
						<DialogContent>
							<DialogContentText>{`${isError.data} through the next 24hrs your profile will be activated`}</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button component={'a'} href={'/'}>
								See more profile
							</Button>
						</DialogActions>
					</Dialog>
				) : (
					isError.status === 500 && (
						<Dialog
							fullScreen={fullScreen}
							open={error}
							style={{ color: '#333' }}
						>
							<DialogContent>
								<DialogContentText>{`${isError.statusText} check your connection`}</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button component={'a'} href={'/profile'}>
									Refresh Page
								</Button>
							</DialogActions>
						</Dialog>
					)
				)}
			</Container>
		</>
	);
}
