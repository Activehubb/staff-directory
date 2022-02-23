import {
	Avatar,
	Badge,
	Box,
	Chip,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { VisibilityOutlined } from '@material-ui/icons';
import Stack from '@mui/material/Stack';
import Users from '../Users/Users';

const useStyles = makeStyles({
	div: {
		display: 'flex',
		flex: '1',
	},
	divFlex: {
		display: 'flex',
    flex: '4',
    margin: '1rem 0 '
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
		paddingBottom: '1rem ',
	},
	TypoPrimary: {
		fontSize: '1.2rem',
		fontWeight: '900',
	},
	Badge: { paddingLeft: '.8rem' },
	TypoSec: {
		fontSize: '.8rem',
		fontFamily: 'Source Sans Pro',
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
});

export default function UserList() {
	const classes = useStyles();
  return (
		<div className={classes.divFlex}>
			<div className={classes.div}>
				<Box className={classes.Box}>
					<Typography variant='h3' className={classes.Typo}>
						New Join Members
					</Typography>
					<Box className={classes.BoxStack}>
						<Stack direction='row' spacing={2} className={classes.Stack}>
							<Avatar
								alt='images'
								src='https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0'
							/>
							<Box component='div'>
								<Typography component='h6' className={classes.TypoPrimary}>
									John Doe{' '}
									<Badge
										color='primary'
										variant='dot'
										className={classes.Badge}
									/>
								</Typography>
								<Typography className={classes.TypoSec}>
									Software Developer
								</Typography>
							</Box>
							<Chip
								icon={<VisibilityOutlined />}
								label='Activated'
								variant='outlined'
								size='medium'
							/>
						</Stack>
					</Box>
					<Box className={classes.BoxStack}>
						<Stack direction='row' spacing={2} className={classes.Stack}>
							<Avatar
								alt='images'
								src='https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0'
							/>
							<Box component='div'>
								<Typography component='h6' className={classes.TypoPrimary}>
									John Doe{' '}
									<Badge
										color='primary'
										variant='dot'
										className={classes.Badge}
									/>
								</Typography>
								<Typography className={classes.TypoSec}>
									Software Developer
								</Typography>
							</Box>
							<Chip
								icon={<VisibilityOutlined />}
								label='Activated'
								variant='outlined'
								size='medium'
							/>
						</Stack>
					</Box>
					<Box className={classes.BoxStack}>
						<Stack direction='row' spacing={2} className={classes.Stack}>
							<Avatar
								alt='images'
								src='https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0'
							/>
							<Box component='div'>
								<Typography component='h6' className={classes.TypoPrimary}>
									John Doe{' '}
									<Badge
										color='primary'
										variant='dot'
										className={classes.Badge}
									/>
								</Typography>
								<Typography className={classes.TypoSec}>
									Software Developer
								</Typography>
							</Box>
							<Chip
								icon={<VisibilityOutlined />}
								label='Activated'
								variant='outlined'
								size='medium'
							/>
						</Stack>
					</Box>
					<Box className={classes.BoxStack}>
						<Stack direction='row' spacing={2} className={classes.Stack}>
							<Avatar
								alt='images'
								src='https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0'
							/>
							<Box component='div'>
								<Typography component='h6' className={classes.TypoPrimary}>
									John Doe{' '}
									<Badge
										color='primary'
										variant='dot'
										className={classes.Badge}
									/>
								</Typography>
								<Typography className={classes.TypoSec}>
									Software Developer
								</Typography>
							</Box>
							<Chip
								icon={<VisibilityOutlined />}
								label='Activated'
								variant='outlined'
								size='medium'
							/>
						</Stack>
					</Box>
					<Box className={classes.BoxStack}>
						<Stack direction='row' spacing={2} className={classes.Stack}>
							<Avatar
								alt='images'
								src='https://th.bing.com/th/id/R.ef481e67bc98f12a264252e42fc9c371?rik=GAbdVQUDKQFo6Q&pid=ImgRaw&r=0'
							/>
							<Box component='div'>
								<Typography component='h6' className={classes.TypoPrimary}>
									John Doe{' '}
									<Badge
										color='primary'
										variant='dot'
										className={classes.Badge}
									/>
								</Typography>
								<Typography className={classes.TypoSec}>
									Software Developer
								</Typography>
							</Box>
							<Chip
								icon={<VisibilityOutlined />}
								label='Activated'
								variant='outlined'
								size='medium'
							/>
						</Stack>
					</Box>
				</Box>
      </div>
      <Users />
		</div>
	);
}
