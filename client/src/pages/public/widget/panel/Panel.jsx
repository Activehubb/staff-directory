import React, { useState } from 'react';
import './panel.css';
import {
	Avatar,
	Button,
	Checkbox,
	TextareaAutosize,
	TextField,
	Typography,
} from '@material-ui/core';
import { AccountCircleOutlined, ArrowLeft, Check } from '@material-ui/icons';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Fragment } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function Panel() {
	const num = 130.2625;
	const [currentStage, setCurrentStage] = useState(1);
	const [progress, setProgress] = useState(0);
	const circles = [1, 2, 3, 4];
	const handleNext = () => {
		setCurrentStage(currentStage + 1);
		setProgress(progress + num);
	};

	const handlePrev = () => {
		setCurrentStage(currentStage - 1);
		setProgress(progress - parseInt(num));
	};

	const [avatar, setAvatar] = useState(false);
	const [faculty, setFaculty] = useState(false);
	const [college, setCollege] = useState(false);
	const [unit, setUnit] = useState(false);
	const [center, setCenter] = useState(false);

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
					'Social Sciences',
					'Technology',
				],
				collLabel: 'College',
				collOption: ['Health Sciences', 'Postgraduate'],
				unitLabel: 'Unit',
				unitOption: ['Units'],
				centerLabel: 'Center',
				centerOption: ['Center'],
			},
			Profile: {
				profileText: 'Step Two',
				firstName: 'Surname/Firstname',
				lastName: 'Middlename/Lastname',
				email: 'Email',
				Residence: {
					state: [
						' Abia',
						'Adamawa',
						'Akwa Ibom',
						'Anambra',
						'Bauchi',
						'Bayelsa',
						'Benue',
						'Borno',
						'Cross River',
						'Delta',
						'Ebonyi',
						'Edo',
						'Ekiti',
						'Enugu',
						'Gombe',
						'Imo',
						'Jigawa',
						'Kaduna',
						'Kano',
						'Katsina',
						'Kebbi',
						'Kogi',
						'Kwara',
						'Lagos',
						'Nasarawa',
						'Niger',
						'Ogun',
						'Ondo',
						'Osun',
						'Oyo',
						'Plateau',
						'Rivers',
						'Sokoto',
						'Taraba',
						'Yobe',
						'Zamfara',
					],
					city: 'city',
				},
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
	return (
		<div>
			<div className='container'>
				<div className='panel-container'>
					{panels.map((pan, index) => (
						<>
							<div
								key={index}
								className={`panel ${currentStage === 1 ? 'pActive' : ''} `}
							>
								<div className='text'>
									<div className='main-text'>{pan.formOne.mText}</div>
									{college && faculty && unit && center === false ? (
										<h3 className='sub-text'>{pan.formOne.sText}</h3>
									) : ''}
								</div>
								<form>
									<div className='flex'>
										<div
											className='form-group'
											style={
												college || unit || center === true
													? { display: 'none' }
													: { flex: 1 }
											}
										>
											<label
												for=''
												style={{ cursor: 'pointer', fontSize: '1.2rem' }}
												onClick={() => setFaculty(!faculty)}
											>
												{faculty && (<h3 style={{textAlign: 'left', fontSize: '2rem', }} ><ArrowLeft/></h3>)}
												{pan.formOne.facLabel}
											</label>
											{faculty && (
												<select name='' id='' className='form-control'>
													{pan.formOne.facOption.map((option, index) => (
														<option value={option}>{option}</option>
													))}
												</select>
												
											)}
										</div>
										<div
											className='form-group'
											style={
												faculty || unit || center === true
													? { display: 'none' }
													: { flex: 1 }
											}
										>
											<label
												for=''
												style={{ cursor: 'pointer', fontSize: '1.2rem' }}
												onClick={() => setCollege(!college)}
											>
												{college && (<h3 style={{textAlign: 'left', fontSize: '2rem', }} ><ArrowLeft/></h3>)}
												{pan.formOne.collLabel}
											</label>
											{college && (
												<select name='' id='' className='form-control'>
													{pan.formOne.collOption.map((option, index) => (
														<option key={index} value={option}>
															{option}
														</option>
													))}
												</select>
											)}
											<small id='helpId' className='text-muted'>
												Please select a service
											</small>
										</div>
										<div
											className='form-group'
											style={
												college || faculty || center === true
													? { display: 'none' }
													: { flex: 1 }
											}
										>
											<label
												for=''
												style={{ cursor: 'pointer', fontSize: '1.2rem' }}
												onClick={() => setUnit(!unit)}
											>
												{unit && (<h3 style={{textAlign: 'left', fontSize: '2rem', }} ><ArrowLeft/></h3>)}
												{pan.formOne.unitLabel}
											</label>
											{unit && (
												<select name='' id='' className='form-control'>
													{pan.formOne.unitOption.map((option, index) => (
														<option key={index} value={option}>
															{option}
														</option>
													))}
												</select>
											)}
											<small id='helpId' className='text-muted'>
												24hrs agent accessibility
											</small>
										</div>
										<div
											className='form-group'
											style={
												college || unit || faculty === true
													? { display: 'none' }
													: { flex: 1 }
											}
										>
											<label
												for=''
												style={{ cursor: 'pointer', fontSize: '1.2rem' }}
												onClick={() => setCenter(!center)}
											>
												{center && (<h3 style={{textAlign: 'left', fontSize: '2rem', }} ><ArrowLeft/></h3>)}
												{pan.formOne.centerLabel}
											</label>
											{center && (
												<select name='' id='' className='form-control'>
													{pan.formOne.centerOption.map((option, index) => (
														<option key={index} value={option}>
															{option}
														</option>
													))}
												</select>
											)}
											<small id='helpId' className='text-muted'>
												24hrs agent accessibility
											</small>
										</div>
									</div>
								</form>
							</div>
							<div
								key={index}
								className={`panel ${currentStage === 2 ? 'pActive' : ''} `}
							>
								{}
								<div className='text'>
									<h3>Please complete your Bio details... </h3>
								</div>
								<form>
									<div className='form-group'>
										<label for=''>I'm available on or after</label>
										<TextareaAutosize
											type='text'
											value='current date by default'
											id='date'
											className='form-control'
										/>
									</div>

									<hr />

									<div className='form-group'>
										<label for=''>Availability</label>
										<div className='flex'>
											<div className='day'>
												<h3>Mon</h3>
												<div className='icon'>
													<Check />
												</div>
											</div>
											<div className='day'>
												<h3>Tue</h3>
												<div className='icon'>
													<Check />
												</div>
											</div>
											<div className='day'>
												<h3>Wed</h3>
												<div className='icon'>
													<Check />
												</div>
											</div>
											<div className='day'>
												<h3>Thur</h3>
												<div className='icon'>
													<Check />
												</div>
											</div>
											<div className='day'>
												<h3>Fri</h3>
												<div className='icon'>
													<Check />
												</div>
											</div>
										</div>
									</div>

									<hr />

									<div className='flex'>
										<div className='form-group'>
											<label for=''>Starts From</label>
											<input
												type='time'
												name=''
												id='time'
												className='form-control'
											/>
											<small id='helpId' className='text-muted'>
												24hrs agent accessibility
											</small>
										</div>
										<div className='form-group'>
											<label for=''>Ends By</label>
											<input
												type='time'
												name=''
												id='time'
												className='form-control'
											/>
											<small id='helpId' className='text-muted'>
												24hrs agent accessibility
											</small>
										</div>
									</div>
								</form>
							</div>
							<div
								key={index}
								className={`panel ${currentStage === 3 ? 'pActive' : ''} `}
							>
								<div className='text'>
									<label id='text'>Profile</label>
								</div>
								<div className='gridContainer'>
									<div className='avatar'>
										<label htmlFor='avatar' className='avatarLabel'>
											{avatar === true ? (
												<Avatar
													alt='Remy Sharp'
													src='/static/images/avatar/1.jpg'
												/>
											) : (
												<AccountCircleOutlined
													style={{
														width: '56px',
														height: '56px',
														display: 'block',
														margin: '1.2rem 0',
														textAlign: 'center',
														color: '#ddd',
													}}
												/>
											)}

											<small>For profile image only</small>
										</label>
										<input
											type='file'
											name='avatar'
											id='avatar'
											style={{ display: 'none' }}
										/>
									</div>
									<form className='gridLayout'>
										<div className='form-group'>
											<label for=''>Surname</label>
											<input
												type='text'
												value=''
												id='date'
												className='form-control'
											/>
										</div>
										<div style={{ display: 'flex' }}>
											<div className='form-group'>
												<label for=''>Phone</label>
												<input
													type='text'
													name=''
													id=''
													className='form-control'
												/>
											</div>
											<div className='form-group'>
												<label for=''>Email</label>
												<input
													type='email'
													name=''
													id='time'
													className='form-control'
												/>
												<small id='helpId' className='text-muted'>
													support@shoppinglist.com
												</small>
											</div>
										</div>
										{/* <div className='form-group'>
											<label for=''>Ranks</label>
											<input
												type='text'
												name=''
												id=''
												className='form-control'
											/>
										</div>
										<div className='form-group'>
											<label for=''>Qualification</label>
											<input
												type='text'
												name=''
												id=''
												className='form-control'
											/>
										</div> */}
									</form>
								</div>
								<hr />
								{}
								<div className='card'>
									<div className='cardBody'>
										<div className='wrapper'>
											<div>
												<Typography component='h3' color='initial'>
													Ranks
												</Typography>{' '}
												<Autocomplete
													multiple
													id='checkboxes-tags-demo'
													options={pan.Ranks.rankOption}
													renderOption={(option, { selected }) => (
														<Fragment>
															<Checkbox
																icon={icon}
																checkedIcon={checkedIcon}
																style={{ marginRight: 8 }}
																checked={selected}
															/>
															{option}
														</Fragment>
													)}
													style={{ width: 450 }}
													renderInput={(params) => (
														<TextField
															{...params}
															variant='outlined'
															label='Ranks'
															placeholder='Favorites'
														/>
													)}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								key={index}
								className={`panel ${currentStage === 4 ? 'pActive' : ''} `}
							>
								<div className='text'>
									<h3 id='text'>Profile Picture</h3>
								</div>
								<form>
									<div className='form-group'>
										<label for=''>
											<AccountCircleOutlined />
										</label>
										<input
											type='text'
											value=''
											id='date'
											className='form-control'
										/>
									</div>
								</form>
							</div>
						</>
					))}

					<hr />

					<div className='sub-container'>
						<div
							className='progress'
							id='progress'
							style={{ width: `${progress}px` }}
						></div>

						<div className='wrapper'>
							{circles.map((circle, idx) => (
								<div
									key={idx}
									className={`circle ${idx < currentStage ? 'active' : ''}`}
								>
									{circle}
								</div>
							))}
						</div>
					</div>
					<div className='button'>
						<input
							type='button'
							value='Back'
							className='btn'
							id='prev'
							onClick={handlePrev}
							disabled={currentStage === 1 ? true : false}
						/>
						<input
							type='button'
							value='Next'
							className='btn'
							id='next'
							onClick={handleNext}
							disabled={currentStage === 4 ? true : false}
						/>
					</div>
					{currentStage === 4 ? (
						<Button variant='contained' color='success'>
							Success
						</Button>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}
