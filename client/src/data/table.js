import { Avatar } from '@material-ui/core';
import './table.css';

export const tableData = [
	{
		id: 1,
		avatarUrl:
			'https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0',
		name: 'Henry Pascal',
		rank: 'Doctorate',
		category: 'Faculty',
		date: '13 Jun 2011',
		status: 'Unactivated',
	},
	{
		id: 2,
		avatarUrl:
			'https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0',
		name: 'Traorey Tailor',
		rank: 'Lecturer',
		category: 'College',
		date: '12 Aug 2012',
		status: 'Activated',
	},
	{
		id: 3,
		avatarUrl:
			'https://th.bing.com/th/id/R.41d065dd908e7f3923e809c6f1aeb10f?rik=E3ljZdCtV43wEA&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f46%2f2015%2f12%2fiStock-000072270117-Medium-Output-1.jpg&ehk=ieDXHH9RA5OYsqNcCfXKaRW8%2bBAwIYf8tfx35tAr5fs%3d&risl=&pid=ImgRaw&r=0',
		name: 'John Doe',
		rank: 'IT practioner',
		category: 'Faculty',
		date: '22 Dec 2019',
		status: 'Activated',
	},
	{
		id: 4,
		avatarUrl:
			'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		name: 'Anne Flex',
		rank: 'Non-Staff',
		category: 'Centers',
		date: '23 Mar 2022',
		status: 'Unactivated',
	},
	{
		id: 5,
		avatarUrl:
			'https://th.bing.com/th/id/R.8bab8769f3e531904fba82f26cf054c5?rik=yoTUglluV0eGpw&riu=http%3a%2f%2fblogginggyan.com%2fwp-content%2fuploads%2f2017%2f03%2fCool-And-Stylish-Profile-Pictures-DP.jpg&ehk=n5V8ZXtFJDEerIZgiB9bPx7699C0xL8CvzvQBLDJwlo%3d&risl=&pid=ImgRaw&r=0',
		name: 'Cathry Geck',
		rank: 'Professor',
		category: 'Units',
		date: '11 Jun 2018',
		status: 'Unactivated',
	},
	{
		id: 6,
		avatarUrl:
			'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
		name: 'Sarah Conor',
		rank: 'Senior Scientist',
		category: 'Faculty',
		date: '21 Jan 2015',
		status: 'Activated',
	},
	{
		id: 7,
		avatarUrl:
			'https://th.bing.com/th/id/R.41d065dd908e7f3923e809c6f1aeb10f?rik=E3ljZdCtV43wEA&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f46%2f2015%2f12%2fiStock-000072270117-Medium-Output-1.jpg&ehk=ieDXHH9RA5OYsqNcCfXKaRW8%2bBAwIYf8tfx35tAr5fs%3d&risl=&pid=ImgRaw&r=0',
		name: 'John Doe',
		rank: 'IT practioner',
		category: 'Faculty',
		date: '22 Dec 2019',
		status: 'Activated',
	},
	{
		id: 8,
		avatarUrl:
			'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		name: 'Anne Flex',
		rank: 'Non-Staff',
		category: 'Centers',
		date: '23 Mar 2022',
		status: 'Unactivated',
	},
	{
		id: 9,
		avatarUrl:
			'https://th.bing.com/th/id/R.8bab8769f3e531904fba82f26cf054c5?rik=yoTUglluV0eGpw&riu=http%3a%2f%2fblogginggyan.com%2fwp-content%2fuploads%2f2017%2f03%2fCool-And-Stylish-Profile-Pictures-DP.jpg&ehk=n5V8ZXtFJDEerIZgiB9bPx7699C0xL8CvzvQBLDJwlo%3d&risl=&pid=ImgRaw&r=0',
		name: 'Cathry Geck',
		rank: 'Professor',
		category: 'Units',
		date: '11 Jun 2018',
		status: 'Unactivated',
	},
	{
		id: 10,
		avatarUrl:
			'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
		name: 'Sarah Conor',
		rank: 'Senior Scientist',
		category: 'Faculty',
		date: '21 Jan 2015',
		status: 'Activated',
	},
	{
		id: 11,
		avatarUrl:
			'https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0',
		name: 'Henry Pascal',
		rank: 'Doctorate',
		category: 'Faculty',
		date: '13 Jun 2011',
		status: 'Unactivated',
	},
	{
		id: 12,
		avatarUrl:
			'https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0',
		name: 'Traorey Tailor',
		rank: 'Lecturer',
		category: 'College',
		date: '12 Aug 2012',
		status: 'Activated',
	},
	{
		id: 13,
		avatarUrl:
			'https://th.bing.com/th/id/R.41d065dd908e7f3923e809c6f1aeb10f?rik=E3ljZdCtV43wEA&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f46%2f2015%2f12%2fiStock-000072270117-Medium-Output-1.jpg&ehk=ieDXHH9RA5OYsqNcCfXKaRW8%2bBAwIYf8tfx35tAr5fs%3d&risl=&pid=ImgRaw&r=0',
		name: 'John Doe',
		rank: 'IT practioner',
		category: 'Faculty',
		date: '22 Dec 2019',
		status: 'Activated',
	},
	{
		id: 14,
		avatarUrl:
			'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		name: 'Anne Flex',
		rank: 'Non-Staff',
		category: 'Centers',
		date: '23 Mar 2022',
		status: 'Unactivated',
	},
];

export const dataColumns = [
	// {
	// 	field: 'id', headerName: 'ID', width: 60, renderCell: (params) => {
	// 		<div>{params.row._id}</div>
	// 	}
	// },
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
];
