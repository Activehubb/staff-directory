import React, { useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../../data/table.css';
import { Link } from 'react-router-dom';
import { Box, Avatar,} from '@material-ui/core';
import { getAllProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import './user.css';



export default function Data() {
	const { dispatch, getAllProfileUsers } = useContext(ProfileContext);
	useEffect(() => {
		getAllProfile(dispatch);
	}, [dispatch]);

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
						<Link
							to={`/admin/user/${params.row._id}`}
							className='viewAction'
						>
							View
						</Link>
					</div>
				);
			},
		},
	];
	return (
		<>
			<Box>
				<div style={{ height: 450, width: '100%' }}>
					<DataGrid
						rows={getAllProfileUsers}
						getRowId={(row) => row._id}
						columns={actionColumns}
						pageSize={6}
						rowsPerPageOptions={[6]}
						checkboxSelection
					/>
				</div>
			</Box>
		</>
	);
}
