import React, { useEffect, useContext } from 'react';
import {
	Avatar,
	Box,
	Card,
	Chip,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	ListItem,
	ListItemText,
	Paper,
	Switch,
	Typography,
} from '@material-ui/core';
import { Stack, IconButton } from '@mui/material';
import { Done, Edit, LocationOn } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { getProfile, updateProfileStatus } from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';
import Loader from '../../utils/Loader';
import './user.css';
import SideBar from '../sidebar/SideBar';

export default function User({ handleStatus, status }) {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const { profile, dispatch } = useContext(ProfileContext);
	const handleUpdateProfileStatus = (e) => {
		e.preventDefault();
		updateProfileStatus(status, path, dispatch);
	};

	// useEffect(() => {
	// 	getProfile(path, dispatch);
	// }, [path, dispatch]);


	// if (profile === null) {
	// 	return <Loader />;
	// }
	return (
		<>
			<Container maxWidth={'md'}>
				<Card style={{ background: 'rgb(13, 50, 80)' }}>
					<Box className={`userstatus ${status ? 'Activated' : 'Unactivate'}`}>
						{status ? 'Activated' : 'Unactivated'}
					</Box>

					<Box>
						<Box>
							<Container maxWidth={'md'} className=' m-2'>
								<Card
									style={{
										background: 'rgb(0, 30, 60)',
										border: '1px solid rgb(15, 80, 133)',
									}}
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
													src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
													alt='avatar'
													variant={'rounded'}
													className='avatar'
													style={{ width: '72px', height: '72px' }}
												/>
												<Box component={'div'} style={{ paddingLeft: '1rem' }}>
													<Stack spacing={1}>
														<Typography
															style={{ fontWeight: '700', color: '#fff' }}
														>
															John Doe Coulsin
														</Typography>
														<Typography
															variant='body2'
															style={{ display: 'flex', color: '#fff' }}
														>
															<LocationOn /> Osun State
														</Typography>
													</Stack>
												</Box>
											</Box>
											<Box>
												<IconButton aria-label='' onClick>
													<Edit
														sx={{ fontSize: 14 }}
														style={{
															border: '1px solid rgb(13, 50, 80)',
															borderRadius: '5px',
															color: '#f7f7f7',
															padding: '5px',
														}}
													/>
												</IconButton>
											</Box>
										</Box>
									</Box>
									<Divider style={{ background: 'rgb(13, 50, 80)' }} />
									<Stack
										direction='row'
										alignItems='center'
										justifyContent='space-between'
										sx={{ px: 2, py: 1 }}
										style={{ background: 'rgb(0, 26, 53)' }}
									>
										<Box>
											<Chip
												label={status ? 'Activated' : 'Unactivate'}
												className={`status ${
													status ? 'Activated' : 'Unactivate'
												}`}
											/>
										</Box>
										<form onSubmit={handleUpdateProfileStatus}>
											<FormGroup>
												<FormControlLabel
													control={
														<Switch
															checked={status}
															defaultChecked
															onChange={handleStatus}
														/>
													}
												/>
											</FormGroup>
										</form>
									</Stack>
								</Card>
							</Container>
						</Box>

						<Container maxWidth={'md'} className=' m-2'>
							<Card
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
												Faculty
												{' — Clinical Sciences'}
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
												Professor
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
												+123 4567 8910
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
												Male
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
												Lorem ipsum dolor sit, amet consectetur adipisicing
												elit. Repudiandae minus eum enim hic laborum sint quidem
												consectetur optio architecto id?
											</Typography>
										}
									/>
								</ListItem>
							</Card>
						</Container>

						<Container maxWidth={'md'} className=' m-2'>
							<Paper
								elevation={3}
								style={{
									background: 'rgb(0, 30, 60)',
									border: '1px solid rgb(15, 80, 133)',
								}}
							>
								<Chip label='Custom delete icon' icon={<Done />} />
							</Paper>
						</Container>
					</Box>
				</Card>
			</Container>
		</>
	);
}
