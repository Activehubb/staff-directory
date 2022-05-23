/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from 'react';
import Container from '@mui/material/Container';
import {
	Alert,
	Box,
	DialogActions,
	MenuItem,
	Select,
	Snackbar,
	Stack,
} from '@mui/material';
import {
	makeStyles,
	TextField,
	Typography,
	FormControl,
	FormLabel,
	FormHelperText,
	Button,
	CardActions,
	Card,
	TextareaAutosize,
	Radio,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	RadioGroup,
	FormControlLabel,
	FormGroup,
} from '@material-ui/core';
import { CloudUpload, LockOutlined } from '@material-ui/icons';
import './panel.css';
import { LoadingButton } from '@mui/lab';
import { createProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth/AuthContext';

export default function Profile() {
	const { isProfile, dispatch, error, isError } = useContext(ProfileContext);
	const { user } = useContext(AuthContext);
	const [fname, setFirstName] = useState('');
	const [lname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhone] = useState('');
	const [research, setResearch] = useState('');
	const [desc, setDesc] = useState('');
	const [gender, setGender] = useState('');
	const [qualification, setQual] = useState('');
	const [residence, setResidence] = useState('');
	const [rank, setRank] = useState('');
	const [department, setDepartment] = useState('');
	const [faculty, setFaculty] = useState('');
	const [facultyValue, setFacultyValue] = useState('');
	const [college, setCollege] = useState('');
	const [center, setCenter] = useState('');
	const [unit, setUnit] = useState('');
	const [entry, setEntry] = useState('');

	const [load, setLoad] = useState(false);
	const [fac, setFac] = useState(false);
	const [coll, setColl] = useState(false);
	const [centers, setCenters] = useState(false);
	const [units, setUnits] = useState(false);
	const [isErr, setErr] = useState(error);

	const rankOption = [
		'Senior Staff',
		'Director',
		'Junior Staff',
		'Receptionist',
		'Vice-Chancellor',
		'Academics',
		'Officer',
		'Other',
	];
	const qual = [
		'M.Sc',
		'B.Sc',
		'Doctorate',
		'Professor',
		'PhD',
		'M.Art',
		'Other',
	];
	const gend = ['Male', 'Female', 'Other'];
	const tab = [
		{ step: '1', title: 'Personal Info' },
		{ step: '2', title: 'Directory Info' },
		{ step: '3', title: 'Description Info' },
	];

	const handleRadioChange = (event) => {
		setEntry(event.target.value);
	};

	const [activeNav, setActiveNav] = useState(0);

	const handleNext = () => {
		setActiveNav(activeNav + 1);
	};
	const handlePrev = () => {
		setActiveNav(activeNav - 1);
	};

	const panels = [
		{
			formOne: {
				mText: 'Step One',
				sText: 'Please make a selection that suits your entries...',
				facLabel: 'Faculty',
				facOption: [
					'Administration',
					'Agricultural',
					'Arts',
					'Education',
					'Environmental Designs and Management',
					'Basic Health Sciences',
					'Clinical Sciences',
					'Dentistry',
					'Pharmacy',
					'Sciences',
					'Law',
					'Technology',
					'Social Sciences',
				],
				dept: [
					[
						'International relations',
						'Local government and developmental studies',
						'Management and Accounting',
						'Public Administration',
					],
					[
						'Agricultural Economics',
						'Agricultural Extension and Rural development',
						'Animal Sciences',
						'Crop production and protection',
						'Family, Nutrition and Consumer Sciences',
						'Plant Sciences',
						'Soil Sciences',
					],
					[
						'Linguistics and African Language',
						'Dramatic  Arts',
						'English',
						'History',
						'Music',
						'Philosophy',
						'Religious Studies',
					],
					[
						'Adult Education and Lifelong Learning',
						'Arts and Social Sciences Education',
						'Educational Foundation and Counselling',
						'Educational Management',
						'Sciences and Technology Education',
						'Physical and Health Education',
					],
					[
						'Achitecture',
						'Building',
						'Estate Management',
						'Fine and Applied Arts',
						'Quantity Surveying',
						'Urban and Regional planning',
					],
					[
						'Anatomy and Cell Biology',
						'Chemical Pathology',
						'Haematology and Immunology',
						'Medical Microbiology and Parasitology',
						'Medical Rehabilitation',
						'Medical Biochemistry',
						'Medical Pharmacology and Therapeutics',
						'Nursing Sciences',
						'Physiological Sciences',
					],
					[
						'Community Health and Nutrition',
						'Dermatology and Venerology',
						'Medicine',
						'Mental Health',
						'Obstetrics Gynaecology and Permatology',
						'Opthalmology',
						'Orthopaedics and Traumatology',
						'Paediatrics and Child Health',
						'Radiology',
						'Surgery',
					],
					[
						'Child Dental Health',
						'Oral and Maxillofacial',
						'Surgery and Oral  Pathology',
						'Preventive and community Dentistry',
						'Restorative Dentistry',
					],
					[
						'Clinical Pharmacy and Pharmacy Administration',
						'Drug Research and Production Unit',
						'Pharmaceutical Chemistry',
						'Pharmaceutics',
						'Pharmacognosy',
						'Pharmacology',
					],

					[
						'Biochemistry',
						'Botany',
						'Chemistry',
						'Geology',
						'Mathematics',
						'Microbiology',
						'Physics',
						'Zoology',
					],
					[
						'Business Law ',
						'International Law',
						'Jurisprudence and Private Law',
						'Public Law',
					],

					[
						'Chemical Engieneering',
						'Civil Engineering',
						'Computer Science and Engineering',
						'Electronic and Electrical Engineering',
						'Food Science and Technology',
						'Mechanical Engineering',
						'Materials Science and Engineering',
						'Agricultural and Environmental Engineering',
					],
					[
						'Demography and Social Statistics',
						'Economics',
						'Geography',
						'Political Science',
						'Psychology',
						'Sociology and Arthropology',
					],
				],
				collLabel: 'College',
				collOption: ['Health Sciences', 'Postgraduate'],
				unitLabel: 'Unit',
				unitOption: ['Units'],
				centerLabel: 'Center',
				centerOption: ['Center'],
			},
			Bio: {
				mText: 'Experience',
				subText: 'Write a concise bio of your work experience',
			},
			Ranks: {
				mText: 'Qualifications',
				rankOption: ['M.A', 'M.Sc', 'MBA'],
				field: 'Field of Study',
				research: 'Research Publications',
			},
		},
	];

	const useStyles = makeStyles({
		wrapper: {
			display: 'flex',
			flex: 3,
		},
		flexBox1: {
			flex: 1,
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		flexBox3: {
			flex: 2,
		},
		textField: {
			margin: '1rem 0 1rem 0',
		},
		align: {
			display: 'flex',
			flexGrow: '2.5',
			justifyContent: 'center',
		},
		bg: {
			background: '#fff',
			boxShadow: '0 0 7px 1px rgba(0,0,0,.2)',
			borderRadius: '5px',
			padding: '.5rem 2rem',
			border: '.5px solid rgba(13, 50, 80, .1)',
		},
		text: {
			fontSize: '1.4rem',
			fontWeight: '700',
			fontFamily: 'Source Sans Pro',
			color: '#555',
		},
		icon: {
			fontSize: '2rem',
			height: '3rem',
			width: '3rem',
			color: '#fff',
		},
		TextareaAutosize: {
			outline: 'none',
			border: 'none',
			borderRadius: '5px',
			boxShadow: '0 0 7px 1px rgba(0,0,0,.2)',
			fontSize: '1.1rem',
			width: 700,
			margin: 'auto',
			padding: '1rem',
		},
		iconWrapper: {
			height: '4rem',
			width: '4rem',
			background: '#777',
			boxShadow: '0 0 10px 2px rgba(0,0,0,.2)',
			borderRadius: '100px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
		},
		avatar: {
			borderRadius: '100px',
			boxShadow: '0 0 10px 2px rgba(0,0,0,.3)',
			cursor: 'pointer',
		},
		transition: {
			transition: 'all .2s ease-in-out',
		},
		nFlex: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'start',
			padding: '.8rem 1.5rem',
			textAlign: 'center',
			background: 'rgba(13, 50, 80, .6)',
			borderBottom: '1px dashed rgba(255,255,255,.2)',
			cursor: 'pointer',
		},
	});
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);
	const [openAlert, setOpenAlert] = useState(true);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setOpenAlert(false);
		setOpenProfile(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (faculty) {
			createProfile(
				{
					fname,
					lname,
					email,
					phoneNumber,
					research,
					rank,
					entry,
					faculty,
					department,
					qualification,
					desc,
					residence,
					gender,
				},
				dispatch
			);
		} else if (college) {
			createProfile(
				{
					fname,
					lname,
					email,
					phoneNumber,
					research,
					rank,
					entry,
					college,
					qualification,
					desc,
					residence,
					gender,
				},
				dispatch
			);
		} else if (center) {
			createProfile(
				{
					fname,
					lname,
					email,
					phoneNumber,
					research,
					rank,
					center,
					entry,
					qualification,
					desc,
					residence,
					gender,
				},
				dispatch
			);
		} else if (unit) {
			createProfile(
				{
					fname,
					lname,
					email,
					phoneNumber,
					research,
					rank,
					entry,
					unit,
					qualification,
					desc,
					residence,
					gender,
				},
				dispatch
			);
		} else if (error) {
			setLoad(false);
			setOpen(true);
		}
		setLoad(true);
	};

	console.log(isError, error, entry);

	const navigate = useNavigate();

	if (user === null) {
		return (
			<Alert
				variant='outlined'
				severity='warning'
				action={
					<Button
						variant='outlined'
						color='info'
						size='small'
						onClick={handleClickOpen}
					>
						Create Profile
					</Button>
				}
			>
				This page is for users only to create profile
			</Alert>
		);
	}

	if (isProfile) {
		navigate('/profile');
	}

	return (
		<Fragment>
			{openAlert && (
				<Box
					component={'div'}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '80vh',
					}}
				>
					<Alert
						variant='outlined'
						severity='info'
						action={
							<Button
								variant='outlined'
								color='info'
								size='small'
								onClick={handleClickOpen}
							>
								Create Profile
							</Button>
						}
					>
						Welcome to profile page
					</Alert>
				</Box>
			)}
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby='responsive-dialog-title'
				>
					<DialogTitle id='responsive-dialog-title'>
						{`Welcome ${user.username}`}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Take your time to set up your profile page as this will be your
							diectory, Let people know who you are
							<br />
							<Typography gutterBottom>
								Note: Make selection base on your entry, you are not allow to
								select more than one field
								<p>All fields are required to create profile</p>
							</Typography>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							variant='outlined'
							color='info'
							size='small'
							onClick={handleClose}
						>
							Create Profile
						</Button>
					</DialogActions>
				</Dialog>
			</div>
			{openProfile && (
				<Box
					component={'div'}
					style={{
						display: 'flex',
						flex: '4',
						justifyContent: 'center',
						margin: '1rem 0',
						position: 'relative',
					}}
				>
					<Box component='div'>
						<Container maxWidth='lg'>
							<Card
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 2.5fr',
								}}
							>
								<Box component={'nav'} className='navBg'>
									<div className='over'>
										{tab.map((t, idx) => (
											<>
												<Box className={classes.nFlex}>
													<div
														onClick={() => idx}
														className={idx === activeNav ? 'tab active' : 'tab'}
													>
														{t.step}
													</div>
													<Typography
														style={{
															color: '#fff',
															fontWeight: '500',
															fontSize: '1.2rem',
														}}
													>
														{t.title}
													</Typography>
												</Box>
											</>
										))}
									</div>
								</Box>
								{isError && (
									<Snackbar
										open={error}
										autoHideDuration={6000}
										onClose={handleClose}
									>
										<Alert
											onClose={handleClose}
											severity='error'
											sx={{ width: '100%' }}
										>
											{isError.data}
										</Alert>
									</Snackbar>
								)}
								<Card>
									<form onSubmit={handleSubmit}>
										<div className={classes.align}>
											<Container maxWidth='md'>
												{activeNav === 0 && (
													<>
														<div
															className={classes.bg}
															style={{
																margin: '1rem 0',
																textAlign: 'center',
																cursor: 'pointer',
															}}
														>
															<Typography
																component='h2'
																className={classes.text}
															>
																Profile Information One
															</Typography>
														</div>
														<div
															className={`${classes.bg} ${classes.transition}`}
														>
															<Box className={classes.wrapper}>
																<Box
																	component='div'
																	className={classes.flexBox3}
																>
																	<div>
																		<TextField
																			id='firstName'
																			label={'First name'}
																			value={fname}
																			onChange={(e) =>
																				setFirstName(e.target.value)
																			}
																			required
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Surname'
																		/>
																		<TextField
																			id='lastName'
																			label='Last name'
																			value={lname}
																			onChange={(e) =>
																				setLastName(e.target.value)
																			}
																			required
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Other Names such as middle name or last name'
																		/>
																		<TextField
																			id='email'
																			label='Email'
																			value={user.email}
																			onChange={(e) => setEmail(e.target.value)}
																			required
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Alternative Email for recovery of credentials'
																		/>
																		<TextField
																			id='phone'
																			label='Phone'
																			value={phoneNumber}
																			onChange={(e) => setPhone(e.target.value)}
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Optional'
																		/>
																	</div>
																</Box>
															</Box>
														</div>
													</>
												)}
												<Box
													component={'div'}
													style={{
														marginBottom: '1rem',
													}}
												>
													{activeNav === 1 ? (
														<>
															<div
																className={classes.bg}
																style={{
																	margin: '1rem 0',
																	textAlign: 'center',
																	cursor: 'pointer',
																}}
															>
																<Typography
																	variant='h3'
																	component={'h3'}
																	style={{
																		textAlign: 'center',
																		color: '#555',
																		fontFamily: 'Source sans pro',
																		fontWeight: 'bold',
																		fontSize: '1.5rem',
																	}}
																	color='initial'
																>
																	Directory
																</Typography>
															</div>

															<div
																className={classes.bg}
																style={{
																	margin: '1rem 0',
																}}
															>
																<FormControl component='fieldset'>
																	<FormLabel component='legend'>
																		Make Selection base on your entry
																	</FormLabel>
																	<FormGroup>
																		<RadioGroup
																			aria-labelledby='entry'
																			name='entry'
																			value={entry}
																			onChange={handleRadioChange}
																			style={{
																				display: 'flex',
																				justifyContent: 'space-between',
																			}}
																		>
																			<FormControlLabel
																				value='Teaching Staff'
																				control={<Radio />}
																				label='Teaching Staff'
																			/>
																			<FormControlLabel
																				value='Non-teaching Staff'
																				control={<Radio />}
																				label='Non-teaching Staff'
																			/>
																		</RadioGroup>
																	</FormGroup>
																	<FormHelperText></FormHelperText>
																</FormControl>
															</div>

															{entry && (
																<Box component={'div'} className={classes.bg}>
																	{panels.map((panel) => (
																		<>
																			<Box
																				style={{
																					display: 'flex',
																					justifyContent: 'space-between',
																					alignItems: 'center',
																					flex: '1',
																				}}
																			>
																				<FormControl
																					style={
																						coll || centers || units === true
																							? { display: 'none' }
																							: {
																									flex: '1',
																									marginRight: '1rem',
																							  }
																					}
																				>
																					<FormHelperText>
																						<Button
																							variant='text'
																							color='default'
																							onClick={() => setFac(!fac)}
																						>
																							Faculty
																						</Button>
																					</FormHelperText>
																				</FormControl>
																				<FormControl
																					style={
																						fac || centers || units === true
																							? { display: 'none' }
																							: { flex: '1' }
																					}
																				>
																					<FormHelperText>
																						<Button
																							variant='text'
																							color='default'
																							onClick={() => setColl(!coll)}
																						>
																							College
																						</Button>
																					</FormHelperText>
																				</FormControl>
																				<FormControl
																					style={
																						fac || coll || units === true
																							? { display: 'none' }
																							: { flex: '1', margin: '0 1rem' }
																					}
																				>
																					<FormHelperText>
																						<Button
																							variant='text'
																							color='default'
																							onClick={() =>
																								setCenters(!centers)
																							}
																						>
																							Center
																						</Button>
																					</FormHelperText>
																				</FormControl>
																				<FormControl
																					style={
																						fac || coll || centers === true
																							? { display: 'none' }
																							: { flex: '1' }
																					}
																				>
																					<FormHelperText>
																						<Button
																							variant='text'
																							color='default'
																							onClick={() => setUnits(!units)}
																						>
																							Unit
																						</Button>
																					</FormHelperText>
																				</FormControl>
																			</Box>
																			<div>
																				<Box>
																					{fac && (
																						<>
																							<FormLabel
																								style={{ padding: '.5rem 0' }}
																							>
																								Faculty
																							</FormLabel>
																							<Select
																								id='faculty'
																								label='Faculty'
																								value={faculty}
																								onChange={(e) =>
																									setFaculty(e.target.value)
																								}
																							
																								required
																								fullWidth
																							>
																								{panel.formOne.facOption.map(
																									(fac, idx) => (
																										<MenuItem
																											style={{
																												display: 'block',
																											}}
																											value={fac}
																											key={idx}
																											onClick={() => {
																												setFacultyValue(idx);
																												setDepartment('');
																											}}
																										>
																											{fac}
																										</MenuItem>
																									)
																								)}
																							</Select>

																							<FormHelperText>
																								Please make selection base on
																								your entries categories
																							</FormHelperText>

																							<FormLabel
																								style={{ padding: '.5rem 0' }}
																							>
																								Department
																							</FormLabel>
																							<Select
																								id='department'
																								label='Department'
																								value={department}
																								onChange={(e) =>
																									setDepartment(e.target.value)
																								}
																								// disabled={
																								// 	department === ''
																								// 		? false
																								// 		: true
																								// }
																								required
																								fullWidth
																							>
																								{panel.formOne.dept.map(
																									(depts, idx) =>
																										idx === facultyValue
																											? depts.map(
																													(dept, idx) => (
																														<MenuItem
																															style={{
																																display:
																																	'block',
																															}}
																															value={dept}
																															key={idx}
																														>
																															{dept}
																														</MenuItem>
																													)
																											  )
																											: ''
																								)}
																							</Select>

																							<FormHelperText>
																								Please make selection base on
																								your entries categories
																							</FormHelperText>
																						</>
																					)}
																				</Box>
																				<Box>
																					{coll && (
																						<>
																							<FormLabel
																								style={{ padding: '.5rem 0' }}
																							>
																								College
																							</FormLabel>
																							<Select
																								labelId='college'
																								label='College'
																								value={college}
																								onChange={(e) =>
																									setCollege(e.target.value)
																								}
																								required
																								fullWidth
																							>
																								{panel.formOne.collOption.map(
																									(coll, idx) => (
																										<MenuItem
																											style={{
																												display: 'block',
																											}}
																											value={coll}
																											key={idx}
																										>
																											{coll}
																										</MenuItem>
																									)
																								)}
																							</Select>

																							<FormHelperText>
																								Please make selection base on
																								your entries categories
																							</FormHelperText>
																						</>
																					)}
																				</Box>
																			</div>
																			<div
																				style={{
																					flex: '4',
																				}}
																			>
																				<Box>
																					{centers && (
																						<>
																							<FormLabel
																								style={{ padding: '.5rem 0' }}
																							>
																								Centers
																							</FormLabel>
																							<Select
																								id='center'
																								value={center}
																								onChange={(e) =>
																									setCenter(e.target.value)
																								}
																								fullWidth
																								required
																							>
																								{panel.formOne.centerOption.map(
																									(center, idx) => (
																										<MenuItem
																											style={{
																												display: 'block',
																											}}
																											value={center}
																											key={idx}
																										>
																											{center}
																										</MenuItem>
																									)
																								)}
																							</Select>

																							<FormHelperText>
																								Please make selection base on
																								your entries categories
																							</FormHelperText>
																						</>
																					)}
																				</Box>
																				<Box>
																					{units && (
																						<>
																							<FormLabel
																								style={{ padding: '.5rem 0' }}
																							>
																								Unit
																							</FormLabel>
																							<Select
																								id='unit'
																								value={unit}
																								onChange={(e) =>
																									setUnit(e.target.value)
																								}
																								fullWidth
																								required
																							>
																								{panel.formOne.unitOption.map(
																									(unit, idx) => (
																										<MenuItem
																											style={{
																												display: 'block',
																											}}
																											value={unit}
																											key={idx}
																										>
																											{unit}
																										</MenuItem>
																									)
																								)}
																							</Select>

																							<FormHelperText>
																								Please make selection base on
																								your entries categories
																							</FormHelperText>
																						</>
																					)}
																				</Box>
																			</div>
																		</>
																	))}
																</Box>
															)}
														</>
													) : activeNav === 2 ? (
														<>
															<Box
																component={'div'}
																style={{
																	display: 'flex',
																	flex: 3,
																	flexDirection: 'column',
																}}
															>
																<div
																	className={classes.bg}
																	style={{
																		margin: '1rem 0',
																		textAlign: 'center',
																		cursor: 'pointer',
																	}}
																>
																	<Typography
																		component='h2'
																		className={classes.text}
																	>
																		Description
																	</Typography>
																</div>
																<>
																	<Box component={'div'}>
																		<FormControl fullWidth>
																			<TextareaAutosize
																				className={classes.TextareaAutosize}
																				maxRows={6}
																				variant='outlined'
																				aria-label='biography'
																				placeholder='Description'
																				value={desc}
																				color={'secondary'}
																				multiline='true'
																				onChange={(e) =>
																					setDesc(e.target.value)
																				}
																				style={{
																					height: 200,
																				}}
																				required
																			/>
																			<FormHelperText>
																				Write a concise description about who
																				you are
																			</FormHelperText>
																		</FormControl>
																	</Box>
																	<Box
																		component={'div'}
																		style={{
																			margin: '1rem 0',
																		}}
																	>
																		<Box
																			style={{
																				display: 'flex',
																				justifyContent: 'space-between',
																			}}
																		>
																			<FormControl>
																				<FormLabel id='demo-controlled-radio-buttons-group'>
																					<Typography
																						components={'h5'}
																						color='initial'
																					>
																						Gender
																					</Typography>
																				</FormLabel>
																				<RadioGroup
																					aria-labelledby='demo-controlled-radio-buttons-group'
																					name='controlled-radio-buttons-group'
																					value={gender}
																					onChange={(e) =>
																						setGender(e.target.value)
																					}
																				>
																					{gend.map((q, idx) => (
																						<FormControlLabel
																							key={idx}
																							value={q}
																							control={<Radio />}
																							label={q}
																						/>
																					))}
																				</RadioGroup>
																			</FormControl>
																			<FormControl>
																				<FormLabel id='demo-controlled-radio-buttons-group'>
																					<Typography
																						components={'h5'}
																						color='initial'
																					>
																						Qualification
																					</Typography>
																				</FormLabel>
																				<RadioGroup
																					aria-labelledby='demo-controlled-radio-buttons-group'
																					name='controlled-radio-buttons-group'
																					value={qualification}
																					onChange={(e) =>
																						setQual(e.target.value)
																					}
																				>
																					{qual.map((q, idx) => (
																						<FormControlLabel
																							key={idx}
																							value={q}
																							control={<Radio />}
																							label={q}
																						/>
																					))}
																				</RadioGroup>
																			</FormControl>

																			<FormControl>
																				<FormLabel id='demo-controlled-radio-buttons-group'>
																					<Typography
																						components={'h5'}
																						color='initial'
																					>
																						Rank
																					</Typography>
																				</FormLabel>
																				<RadioGroup
																					aria-labelledby='demo-controlled-radio-buttons-group'
																					name='controlled-radio-buttons-group'
																					value={rank}
																					onChange={(e) =>
																						setRank(e.target.value)
																					}
																				>
																					{rankOption.map((q, idx) => (
																						<FormControlLabel
																							key={idx}
																							value={q}
																							control={<Radio />}
																							label={q}
																						/>
																					))}
																				</RadioGroup>
																			</FormControl>
																		</Box>

																		<TextField
																			id='residence'
																			label='Residence'
																			value={residence}
																			onChange={(e) =>
																				setResidence(e.target.value)
																			}
																			required
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Full details of place of residence'
																		/>
																		<TextField
																			id='research'
																			label='Research Publications Topic'
																			value={research}
																			onChange={(e) =>
																				setResearch(e.target.value)
																			}
																			required
																			variant='outlined'
																			fullWidth
																			className={classes.textField}
																			placeholder='Please separate research topic out by comma'
																		/>
																	</Box>
																</>
															</Box>
														</>
													) : (
														''
													)}

													{activeNav === 2 && (
														<>
															{!load ? (
																<input
																	type='submit'
																	value={'Submit Profile'}
																	style={{
																		border: 'none',
																		outline: 'none',
																		display: 'block',
																		textAlign: 'center',
																		color: '#fff',
																		background: '#1976d2',
																		width: '100%',
																		padding: '10px 20px',
																		borderRadius: '5px',
																		boxShadow:
																			'0px 3px 1px -2px rgb(0 0 0 / 20%)',
																		fontSize: '18px',
																		fontWeight: 500,
																		margin: '1rem 0',
																		cursor: 'pointer',
																	}}
																/>
															) : (
																<CardActions className={classes.cAction}>
																	<LoadingButton
																		variant='contained'
																		color='primary'
																		loading={load}
																		loadingPosition='center'
																		endIcon={<CloudUpload />}
																		type='submit'
																		fullWidth
																	>
																		Upload Profile
																	</LoadingButton>
																</CardActions>
															)}
														</>
													)}
													<Container maxWidth='sm'>
														<Box
															style={{
																display: 'flex',
																justifyContent: 'space-around',
																margin: '1rem 0',
															}}
														>
															<Button
																variant='outlined'
																color='info'
																onClick={handlePrev}
																style={
																	activeNav === 0
																		? { cursor: 'not-allowed' }
																		: { color: 'GrayText' }
																}
																disabled={activeNav === 0}
															>
																Prev
															</Button>
															<Button
																variant='outlined'
																color='success'
																onClick={handleNext}
																className={activeNav === 2 ? 'notAllow' : ''}
																style={
																	activeNav === 2
																		? { cursor: 'not-allowed' }
																		: { color: 'GrayText' }
																}
																disabled={activeNav === 2}
															>
																Next
															</Button>
														</Box>
													</Container>
												</Box>
											</Container>
										</div>
									</form>
								</Card>
							</Card>
						</Container>
					</Box>
				</Box>
			)}
		</Fragment>
	);
}
