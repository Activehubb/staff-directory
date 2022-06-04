import { Box, Divider, Typography } from '@material-ui/core';
import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	AreaChart,
	Area,
	linearGradient,
	Tooltip,
	CartesianGrid,
	Line,
	XAxis,
	Legend,
	YAxis,
} from 'recharts';
import { makeStyles } from '@material-ui/core';
import './chart.css';

const data = [
	{
		faculties: 'Admin',
		'Active Users': 4000,
	},
	{
		faculties: 'Arts',
		'Active Users': 3200,
	},
	{
		faculties: 'Agric',
		'Active Users': 2300,
	},
	{
		faculties: 'Education',
		'Active Users': 400,
	},
	{
		faculties: 'Environmental Design and Management',
		'Active Users': 400,
	},
	{
		faculties: 'Basic Medical Sciences',
		'Active Users': 3100,
	},
	{
		faculties: 'Clinical Sciences',
		'Active Users': 410,
	},
	{
		faculties: 'Pharmacy',
		'Active Users': 4000,
	},
	{
		faculties: 'Dentistry',
		'Active Users': 200,
	},
	{
		faculties: 'Sciences',
		'Active Users': 350,
	},
	{
		faculties: 'Law',
		'Active Users': 410,
	},
	{
		faculties: 'Technology',
		'Active Users': 230,
	},
	{
		faculties: 'Social Sciences',
		'Active Users': 340,
	},
];

const useStyles = makeStyles({
	Typo: {
		fontSize: '1.5rem',
		color: 'rgba(0,0,0, .8)',
		padding: '2px 0 2px, 0',
		fontFamily: 'Source Sans Pro',
	},
	Box: {
		flex: '4',
		marginTop: '1rem',
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		padding: '1rem ',
		borderRadius: '.5rem',
	},
});

export default function Chart() {
	const classes = useStyles();
	return (
		<div className='wrapper'>
			<Box className={classes.Box} component='div'>
				<Typography variant='h3' component='h3' className={classes.Typo}>
					Faculties Details
				</Typography>
				<ResponsiveContainer width='100%' aspect={4 / 1}>
					<LineChart data={data}>
						<XAxis dataKey='faculties' stroke='#5550df' />
						<YAxis dataKey='Active Users' />
						<CartesianGrid strokeDasharray='3 3' />
						<Tooltip />
						<Legend />
						<Line type='monotone' dataKey='Active Users' stroke='#5550df' />
					</LineChart>
				</ResponsiveContainer>
			</Box>
			<Divider />
		</div>
	);
}
