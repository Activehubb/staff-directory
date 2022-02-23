import {
	makeStyles,
	Avatar,
	Box,
	Typography,
	Chip,
	Button,
} from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import { tableData } from '../../data/table';


const tableHead = [
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
		flex: '2.3',
	},
	Box: {
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		padding: '1rem',
		margin: '1rem 0 ',
		borderRadius: '.5rem',
	},
	Typo: {
		fontSize: '1.5rem',
		fontFamily: 'Quicksand',
		fontWeight: '500',
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

export default function Users() {
	const classes = useStyles();
	console.log(classes.dotSuccess);
	return (
		<div className={classes.div}>
			<Box className={classes.Box}>
				<Typography variant='h3' className={classes.Typo}>
					All Users Details
				</Typography>
				<div>
					<table className={classes.Table}>
						<tr className={classes.tableHeadRow}>
							{tableHead.map((th) => (
								<th className={classes.th}>{th.th}</th>
							))}
						</tr>
						{tableData.map((data) => (
							<tr>
								<td className={classes.td}>
									<Avatar alt='images' src={data.avatarUrl} />
									<Box component='div' style={{ paddingLeft: '1rem' }}>
										<Typography component='h6' className={classes.TypoPrimary}>
											{data.name}
										</Typography>
										<Typography className={classes.TypoSec}>
											{data.rank}
										</Typography>
									</Box>
								</td>

								<td>
									<Button
										variant='contained'
										style={
											data.category.includes('Faculty')
												? { backgroundColor: '#2a7ade' }
												: data.category.includes('Units')
												? { backgroundColor: '#3bb077' }
												: data.category.includes('Centers')
												? { backgroundColor: '#e5fafb' }
												: data.category.includes('College')
												? { backgroundColor: '#d95087' }
												: {}
										}
										size='small'
									>
										<Typography className={classes.TypoSec}>
											{data.category}
										</Typography>
									</Button>
								</td>
								<td>
									<Typography className={classes.TypoSec}>
										{data.date}
									</Typography>
								</td>
								<td>
									<Chip
										icon={<VisibilityOffOutlined />}
										label={data.status}
										className={
											data.status.includes('Unactivated')
												? classes.unActivated
												: classes.activated
										}
										variant='outlined'
										size='medium'
									/>
								</td>
							</tr>
						))}
					</table>
				</div>
			</Box>
		</div>
	);
}
