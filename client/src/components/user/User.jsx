import React, { useEffect, useContext } from 'react';
import {
	Avatar,
	Box,
	Card,
	Chip,
	Container,
	Divider,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from '@material-ui/core';
import { Stack } from '@mui/material';
import { LocationOn } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { getUserProfile } from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';
import Loader from '../../utils/Loader';
import './user.css';

export default function User() {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const { getProfile, dispatch } = useContext(ProfileContext);

	useEffect(() => {
		getUserProfile(path, dispatch);
	}, [path, dispatch]);

	if (getProfile === null) {
		return <Loader />;
	}

	return (
		<>
			<Container maxWidth={'md'}>
				<Card style={{ background: 'rgb(13, 50, 80)' }}>
					<Box
						className={`userstatus ${
							getProfile.profile.status ? 'Activated' : 'Unactivate'
						}`}
					>
						{getProfile.profile.status ? 'Activated' : 'Unactivated'}
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
													src={getProfile.profile.user.profilePic}
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
															{getProfile.profile.bio.fname +
																' ' +
																getProfile.profile.bio.lname}
														</Typography>
														<Typography
															variant='body2'
															style={{ display: 'flex', color: '#fff' }}
														>
															<LocationOn /> {getProfile.profile.bio.residence}
														</Typography>
													</Stack>
												</Box>
											</Box>

											<Box>
												<ListItemText
													className='textColor'
													secondary={
														<Typography
															sx={{ display: 'inline' }}
															component='span'
														>
															{getProfile.profile.user.email &&
																`Email: ${getProfile.profile.user.email}`}
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
															{getProfile.profile.createdAt &&
																`Created On: ${new Date(
																	getProfile.profile.createdAt
																).toDateString()}`}
														</Typography>
													}
												/>
											</Box>
										</Box>
									</Box>
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
										primary='Entry'
										secondary={
											<Typography
												style={{
													display: 'inline',
													textTransform: 'capitalize',
												}}
												component='span'
											>
												{getProfile.profile.dir.entry}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Directory'
										secondary={
											<Typography sx={{ display: 'inline' }} component='span'>
												{getProfile.profile.dir.directory}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								{getProfile.profile.dir.mainEntry && (
									<ListItem alignItems='flex-start' className='p-2 textColor'>
										<ListItemText
											primary='Category'
											secondary={
												<Typography sx={{ display: 'inline' }} component='span'>
													{getProfile.profile.dir.mainEntry}
												</Typography>
											}
										/>
									</ListItem>
								)}
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								{getProfile.profile.dir.subEntry && (
									<ListItem alignItems='flex-start' className='p-2 textColor'>
										<ListItemText
											primary='Sub Category'
											secondary={
												<Typography sx={{ display: 'inline' }} component='span'>
													{getProfile.profile.dir.subEntry}
												</Typography>
											}
										/>
									</ListItem>
								)}
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
												{getProfile.profile.bio.rank}
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
											>
												{getProfile.profile.bio.phoneNumber}
											</Typography>
										}
									/>
								</ListItem>
								<Divider style={{ background: 'rgb(13, 50, 80)' }} />
								<ListItem alignItems='flex-start' className='p-2 textColor'>
									<ListItemText
										primary='Gender'
										secondary={
											<Typography sx={{ display: 'inline' }} component='span'>
												{getProfile.profile.bio.gender}
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
											<Typography sx={{ display: 'inline' }} component='span'>
												{getProfile.profile.bio.desc}
											</Typography>
										}
									/>
								</ListItem>
							</Card>
						</Container>
						{getProfile.profile.bio.qualification && (
							<Container maxWidth={'md'} className=' m-2'>
								<Typography className='p-2 textColor' component='span'>
									Qualifications
								</Typography>
								<Paper
									elevation={3}
									style={{
										background: 'rgb(0, 30, 60)',
										border: '1px solid rgb(15, 80, 133)',
										padding: '5px',
									}}
								>
									{getProfile.profile.bio.qualification.map((item, idx) => (
										<Chip
											label={item}
											key={idx}
											style={{ margin: ' 0 10px' }}
										/>
									))}
								</Paper>
							</Container>
						)}
						{getProfile.profile.bio.research && (
							<Container maxWidth={'md'} className=' m-2'>
								<Typography className='p-2 textColor' component='span'>
									Areas of Specialization
								</Typography>
								<Paper
									elevation={3}
									style={{
										background: 'rgb(0, 30, 60)',
										border: '1px solid rgb(15, 80, 133)',
										padding: '5px',
									}}
								>
									{getProfile.profile.bio.research.map((item, idx) => (
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
				</Card>
			</Container>
		</>
	);
}
