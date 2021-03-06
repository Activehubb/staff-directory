import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../data/table.css';
import { Link } from 'react-router-dom';
import { Box, Typography, makeStyles, Avatar } from '@material-ui/core';


const useStyles = makeStyles({
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
});

export default function Users({ profiles }) {
	

	const classes = useStyles();

	const actionColumns = [
		{
			field: 'User',
			headerName: 'User',
			width: 230,
			renderCell: (params) => {
				return (
					<>
						<div className='cellwithimg'>
							<Avatar
								src={params.row.user.profilePic}
								alt='avatar'
								className='cellimg'
							/>
							{params.row.bio.fname + ' ' + params.row.bio.lname}
						</div>
					</>
				);
			},
		},
		{
			field: 'Rank',
			headerName: 'Rank',
			width: 200,
			renderCell: (params) => {
				return <div>{params.row.bio.rank}</div>;
			},
		},

		{
			field: 'status',
			headerName: 'Status',
			width: 100,
			renderCell: (params) => {
				return (
					<div
						className={`cellwithstatus ${
							params.row.status ? 'Activated' : 'Unactivated'
						}`}
					>
						{params.row.status ? 'Activated' : 'Unactivated'}
					</div>
				);
			},
		},
		{
			field: 'date',
			headerName: 'Date',
			width: 140,
			renderCell: (params) => {
				return <div>{new Date(params.row.createdAt).toDateString()}</div>;
			},
		},
		{
			field: 'directory',
			headerName: 'Directory',
			width: 100,
			renderCell: (params) => {
				return (
					<div className={`cellwithcat ${params.row.dir.directory}`}>
						{params.row.dir.directory}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 100,
			renderCell: (params) => {
				return (
					<div className='cellAction'>
						<Link to={`/users/${params.row._id}`} className='viewAction'>
							View
						</Link>
					</div>
				);
			},
		},
	];
	return (
		<Box className={classes.Box}>
			<Typography variant='h3' className={classes.Typo}>
				All Users Details
			</Typography>
			<div style={{ height: 500, width: '100%' }}>
				<DataGrid
					rows={profiles}
					getRowId={(row) => row._id}
					columns={actionColumns}
					pageSize={7}
					rowsPerPageOptions={[7]}
					checkboxSelection
				/>
			</div>
		</Box>
	);
}
