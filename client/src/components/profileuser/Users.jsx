import React from 'react';
import {
	makeStyles,
	Avatar,
	Box,
	Typography,
	Button,
} from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import { tableData } from '../../data/table';
import { ProfileContext } from '../../context/profile/profileContext';
import { getProfiles } from '../../context/profile/profileApiCall';

const table = [
	{
		th: 'Users Details',
	},
	{
		th: 'Categories',
	},
	{
		th: 'Date',
	},
	{
		th: 'Status',
	},
];

const useStyles = makeStyles({
	div: {
		flex: '2.5',
	},
	Box: {
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		padding: '.5rem',
		margin: '1rem 0 ',
		borderRadius: '.5rem',
	},
	Typo: {
		fontSize: '1.5rem',
		fontFamily: 'Quicksand',
		fontWeight: '500',
		padding: '.5rem',
	},
	TypoPrimary: {
		fontSize: '1.2rem',
		fontWeight: '900',
	},
	Badge: { paddingLeft: '.8rem' },
	TypoSec: {
		fontSize: '.8rem',
		fontFamily: 'Quicksand',
		color: 'rgba(0,0,0, .8)',
	},
	Stack: {
		display: 'flex',
		alignItems: 'center',
	},
	BoxStack: {
		border: '.5px solid rgba(0,0,0, .1)',
		borderRadius: '50px',
		padding: '.4rem',
		margin: '1rem 0',
	},
	Table: {
		width: '100%',
		borderSpacing: '15px',
	},
	tableHeadRow: {
		fontSize: '1.3rem',
		textAlign: 'start',
		fontFamily: 'Quicksand',
		color: 'rgba(0,0,0, .8)',
	},
	td: {
		display: 'flex',
		alignItems: 'center',
	},
	tr: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	unActivated: {
		backgroundColor: '#FFD2D2',
		color: '#D8000C',
	},
	activated: {
		backgroundColor: '#e5faf2',
		color: '#3bb077',
	},
	tableData: {
		padding: '1rem 0',
	},
	th: {
		textAlign: 'left',
	},
	dotSuccess: {
		backgroundColor: '#DFF2BF !important',
		paddingLeft: '.8rem',
	},
	dotWarn: {
		background: '#FEEFB3 !important',
		paddingLeft: '.8rem',
	},
	secondary: {
		backgroundColor: 'DFF2BF',
		color: '#fff',
	},
});

export default function Users({profiles}) {
	const classes = useStyles();
	return (
		<div className={classes.div}>
			<Box className={classes.Box}>
				<Typography variant='h3' className={classes.Typo}>
					All Users Details
				</Typography>
				<div>
					<table className={classes.Table}>
						<tr className={classes.tableHeadRow}>
							{table.map((tdata, idx) => (
								<th key={idx} className={classes.th}>
									{tdata.th}
								</th>
							))}
						</tr>
						{profiles.map((data) => (
							<tr key={data._id}>
								<td className={classes.td}>
									<Avatar alt='images' src={data.bio.avatar} />
									<Box component='div' style={{ paddingLeft: '1rem' }}>
										<Typography component='h6' className={classes.TypoPrimary}>
											{data.bio.fname + data.bio.lname}
										</Typography>
										<Typography className={classes.TypoSec}>
											{data.bio.rank}
										</Typography>
									</Box>
								</td>

								{data.faculty ? (
									<td>
										<Button
											variant='contained'
											style={{ backgroundColor: '#2a7ade' }}
											size='small'
										>
											<Typography className={classes.TypoSec}>
												{'Faculty'}
											</Typography>
										</Button>
									</td>
								) : data.college ? (
									<td>
										<Button
											variant='contained'
											style={{ backgroundColor: '#d95087' }}
											size='small'
										>
											<Typography className={classes.TypoSec}>
												{'College'}
											</Typography>
										</Button>
									</td>
								) : data.center ? (
									<td>
										<Button
											variant='contained'
											style={{ backgroundColor: '#e5fafb' }}
											size='small'
										>
											<Typography className={classes.TypoSec}>
												{'Center'}
											</Typography>
										</Button>
									</td>
								) : data.unit ? (
									<td>
										<Button
											variant='contained'
											style={{ backgroundColor: '#3bb077' }}
											size='small'
										>
											<Typography className={classes.TypoSec}>
												{'Unit'}
											</Typography>
										</Button>
									</td>
								) : (
									''
								)}

								<td>
									<Typography className={classes.TypoSec}>
										{new Date(data.createdAt).toDateString()}
									</Typography>
								</td>
								
							</tr>
						))}
					</table>
				</div>
			</Box>
		</div>
	);
}
