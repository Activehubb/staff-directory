import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../data/table.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Loader from '../../utils/Loader';
import UserDelete from '../user/UserDelete';

export default function DataTable({ status, profiles }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
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
								src={params.row.bio.avatar}
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
			field: 'phoneNumber',
			headerName: 'Phone Number',
			width: 200,
			renderCell: (params) => {
				return <div>{params.row.bio.phoneNumber}</div>;
			},
		},

		{
			field: 'status',
			headerName: 'Status',
			width: 100,
			renderCell: (params) => {
				return (
					<div
						className={`cellwithstatus ${status ? 'Activated' : 'Unactivated'}`}
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
					<div
						className={`cellwithcat ${
							params.row.faculty
								? 'Faculty'
								: params.row.college
								? 'College'
								: params.row.center
								? 'Center'
								: params.row.unit
								? 'Unit'
								: ''
						}`}
					>
						{params.row.faculty
							? 'Faculty'
							: params.row.college
							? 'College'
							: params.row.center
							? 'Center'
							: params.row.unit
							? 'Unit'
							: ''}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 170,
			renderCell: (params) => {
				return (
					<div className='cellAction'>
						<Link to={`/users/${params.row._id}`} className='viewAction'>
							View
						</Link>
						<Link
							Link
							to={`/users/${params.row.id}`}
							div
							className='deleteAction'
							handleOpen={handleOpen}
						>
							Delete
						</Link>
					</div>
				);
			},
		},
	];

	if (profiles === null) {
		return <Loader />;
	}
	return (
		<>
			<UserDelete open={open} handleClose={handleClose} profiles={profiles}/>
			<div style={{ height: 530, width: '100%' }}>
				<DataGrid
					rows={profiles}
					getRowId={(row) => row._id}
					columns={actionColumns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
				/>
			</div>
		</>
	);
}
