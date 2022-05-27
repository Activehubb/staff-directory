import React, { Fragment, useState } from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	makeStyles,
	Typography,
	Chip,
	CardMedia,
	Paper,
	CardActions,
	Button,
} from '@material-ui/core';
import { LocationOnOutlined, Email, More, Grade } from '@material-ui/icons';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function ProfileWid({ profile }) {
	const [isHovered, setHovered] = useState(false);

	const useStyles = makeStyles((theme) => ({
		rt: {
			position: 'relative',
			[theme.breakpoints.down('md')]: {
				marginBottom: '1rem',
			},
		},
		flex: {
			display: 'flex',
			alignItems: 'center',
		},
		wrap: {
			padding: '1rem',
			background: '#E2E9F9',
		},
		desc: {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			lineClamp: 3,
			WebkitBoxOrient: 'vertical',
		},
	}));

	const classes = useStyles();
	return (
		<Fragment>
			{profile && (
				<Box className={classes.rt}>
					<Card
						className={classes.wrap}
						onMouseEnter={() => {
							setHovered(true);
						}}
						onMouseLeave={() => {
							setHovered(false);
						}}
					>
						<Box className={classes.flex}>
							<Box>
								<Avatar
									src={profile.user.profilePic}
									alt='avatar'
									style={{ width: 72, height: 72 }}
								/>
							</Box>
							<Box style={{ marginLeft: '1.5rem' }}>
								<Typography component='div' style={{ fontWeight: 700 }}>
									{profile.bio.fname} {profile.bio.lname.charAt(0) + '.'}
								</Typography>
								{profile.dir && (
									<Box component='div'>
										<Typography component=''>{`${profile.dir.directory} of ${profile.dir.mainEntry}`}</Typography>
										{profile.dir.subEntry && (
											<Typography component=''>{`${profile.dir.subEntry}`}</Typography>
										)}
									</Box>
								)}
							</Box>
						</Box>
						<Box>
							<CardContent>
								<Stack direction='row' spacing={1}>
									<Chip
										variant='outlined'
										label={profile.user.email}
										icon={<Email />}
									/>
									{/* {profile.bio.residence && (
										<Chip
											label={profile.bio.residence}
											icon={<LocationOnOutlined />}
										/>
									)} */}
								</Stack>
							</CardContent>
						</Box>
						{isHovered && (
							<Paper
								variant='outlined'
								elevation={6}
								style={{
									position: 'absolute',
									top: '0',
									zIndex: '10',
									left: 0,
									maxWidth: '100%',
								}}
							>
								<CardMedia
									component='img'
									height='140'
									src={profile.user.profilePic}
									alt='Avatar'
								/>
								<CardContent>
									<Box
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											paddingBottom: '.5rem',
										}}
									>
										<Typography gutterBottom variant='h5' component='div'>
											{profile.bio.fname} {profile.bio.lname}
										</Typography>
										<Chip
											label={profile.bio.rank}
											icon={<Grade />}
											variant='fill'
										/>
									</Box>
									<Typography
										variant='body2'
										color='text.secondary'
										className={classes.desc}
									>
										{profile.bio.desc}
									</Typography>
								</CardContent>
								<CardActions>
									<Button size='medium' variant='outlined'>
										<Link
											to={`/users/${profile._id}`}
											style={{
												textDecoration: 'none',
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<More style={{ paddingRight: '2px' }} />
											View Profile
										</Link>
									</Button>
								</CardActions>
							</Paper>
						)}
					</Card>
				</Box>
			)}
		</Fragment>
	);
}
