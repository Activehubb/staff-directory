import {
	Dashboard,
	HomeOutlined,
	PeopleOutlineRounded,
	PersonAddDisabledOutlined,
	TimelineOutlined,
	VerifiedUserOutlined,
} from '@material-ui/icons';
import { Box, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		background: 'rgb(13, 50, 80)',
		color: '#fff',
		height: 'calc(100vh - 64px)',
		position: 'sticky',
		top: '64px',
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		margin: 0,
		flexGrow: 1,
	},
});

export default function SideBar() {
	const classes = useStyles();
	const data = [
		{ icon: <HomeOutlined />, label: 'Home' },
		{ icon: <TimelineOutlined />, label: 'Analytics' },
		{ icon: <PeopleOutlineRounded />, label: 'Users', link: 'users' },
		{ icon: <VerifiedUserOutlined />, label: 'Activated Users' },
		{ icon: <PersonAddDisabledOutlined />, label: 'Unactivated Users' },
	];
	return (
		<div>
			<Box className={classes.root} component='div' sx={{ p: 0, m: 0 }}>
				<List sx={{ p: 0, m: 0 }}>
					<ListItemButton component='a' href='/dashboard' sx={{ my: 0 }}>
						<ListItem>
							<ListItemIcon sx={{ fontSize: 20 }}>
								<Dashboard sx={{ color: '#fff' }} />
							</ListItemIcon>
							<ListItemText
								className={classes.Typo}
								primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
							>
								Dashboard
							</ListItemText>
						</ListItem>
					</ListItemButton>
					<Divider />
					{data.map((item) => (
						<ListItemButton key={item.label} component='a' href={`/${item.link}`}>
							<ListItem>
								<ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
								<ListItemText>{item.label}</ListItemText>
							</ListItem>
						</ListItemButton>
					))}
				</List>
			</Box>
		</div>
	);
}