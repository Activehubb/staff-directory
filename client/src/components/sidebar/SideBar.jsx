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
		height: 'calc(100vh - 56px)',
		position: 'sticky',
		top: '56px',
		left: '0',
		boxShadow: '0px 0px 10px 0px rgba(50, 50, 50, 0.4)',
		margin: 0,
		zIndex: '1100',
	},
});

export default function SideBar({ isOpen }) {
	const classes = useStyles();
	const admin = [
		{ icon: <HomeOutlined />, label: 'Home', link: '' },
		{
			icon: <TimelineOutlined />,
			label: 'Analytics',
			analytics: 'analytics',
			links: 'analytics',
		},
		{ icon: <PeopleOutlineRounded />, label: 'Users', link: 'users' },
		{
			icon: <VerifiedUserOutlined />,
			label: 'Activated Users',
			link: 'users/activated',
		},
		{
			icon: <PersonAddDisabledOutlined />,
			label: 'Unactivated Users',
			link: 'users/unactivated',
		},
	];
	const user = [
		{ icon: <HomeOutlined />, label: 'Home', link: '' },
		// { icon: <TimelineOutlined />, label: 'Users', users: 'Users', links: 'analytics' },
		{ icon: <PeopleOutlineRounded />, label: 'Users', link: 'users' },
		{
			icon: <VerifiedUserOutlined />,
			label: 'Profiles',
			link: 'users/activated',
		},
		// {
		// 	icon: <PersonAddDisabledOutlined />,
		// 	label: 'Unactivated Users',
		// 	link: 'users/unactivated',
		// },
	];
	return (
		<div>
			<Box className={classes.root} component='div' sx={{ p: 0, m: 0 }}>
				<List sx={{ p: 0, m: 0 }}>
					<ListItem sx={{ p: 0, m: 0 }}>
						<ListItemButton component='a' href='/dashboard' sx={{ my: 0 }}>
							{isOpen ? (
								<>
									<ListItemIcon sx={{ fontSize: 20 }}>
										<Dashboard style={{ color: '#fff' }} />
									</ListItemIcon>
									<ListItemText
										primaryTypographyProps={{
											fontSize: 20,
											fontWeight: 'medium',
										}}
									>
										Dashboard
									</ListItemText>
								</>
							) : (
								<span sx={{ fontSize: 20 }}>
									<Dashboard style={{ color: '#fff' }} />
								</span>
							)}
						</ListItemButton>
					</ListItem>
					<Divider />
					{admin.map((item) => (
						<>
							<ListItem
								key={item}
								style={{
									paddingRight: 'none',
									paddingLeft: 'none',
								}}
							>
								<ListItemButton
									component='a'
									href={item.link ? `/${item.link}` : '/'}
								>
									{isOpen ? (
										<>
											<ListItemIcon sx={{ color: '#fff' }}>
												{item.icon}
											</ListItemIcon>
											<ListItemText>{item.label}</ListItemText>
										</>
									) : (
										<span style={{ color: '#fff' }}>{item.icon}</span>
									)}
								</ListItemButton>
							</ListItem>
							<Divider />
						</>
					))}
				</List>
			</Box>
		</div>
	);
}
