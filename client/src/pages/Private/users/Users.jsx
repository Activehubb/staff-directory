import '../../../data/table.css';
import { makeStyles, Typography } from '@material-ui/core';
import SideBar from '../../../components/sidebar/SideBar';
import Data from './data';
import './user.css';

const useStyles = makeStyles({
	Typo: {
		fontSize: '1.5rem',
		fontFamily: 'Quicksand',
		fontWeight: '500',
		padding: '.5rem',
	},
});

export default function Users() {
	const classes = useStyles();
	return (
		<>
			<div className='main'>
				<SideBar className='bar' />
				<div className='user'>
					<div className='box'>
						<Typography variant='h3' className={classes.Typo}>
							Users Details
						</Typography>
						<Data />
					</div>
				</div>
			</div>
		</>
	);
}
