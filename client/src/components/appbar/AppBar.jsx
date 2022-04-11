import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/More';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, Chip, Tooltip } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { Button, Container, Stack } from '@mui/material';
import { AuthContext } from '../../context/auth/AuthContext';
import './appbar.css';
import { ArrowDropDown } from '@material-ui/icons';
import { getCurrentUserProfile } from '../../context/profile/profileApiCall';
import { ProfileContext } from '../../context/profile/profileContext';
import Loader from '../../utils/Loader';
// import { ArrowDropDown } from '@material-ui/icons';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: '300px',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		flexGrow: '2',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const PrimarySearchAppBar = ({ HandleQuery, avatar }) => {
	const { dispatch, profile } = React.useContext(ProfileContext);
	// React.useEffect(() => {
	// 	getCurrentUserProfile(dispatch);
	// }, [dispatch]);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircleIcon />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	const { user } = React.useContext(AuthContext);

	const location = useLocation();
	const path = location.pathname.split('/')[1];

	return (
		<>
			<AppBar
				className='appBg'
				style={{
					background: 'rgb(13, 50, 80)',
					position: 'sticky',
					top: 0,
					left: 0,
					zIndex: '10',
					color: '#fff',
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar>
						<Avatar alt='oau logo' src='/image/oaulogo.png' />{' '}
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ display: { xs: 'none', sm: 'block' } }}
						>
							Staff Directory
						</Typography>
						<Box sx={{ flexGrow: 1 }} />
						{path.includes('signup') ? (
							<Box
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '10px',
								}}
							>
								{avatar && (
									<Stack direction='row'>
										<Chip
											avatar={
												<Avatar
													alt='avatar'
													src={URL.createObjectURL(avatar)}
												/>
											}
											label='Avatar'
											style={{ cursor: 'pointer' }}
										/>
									</Stack>
								)}
								<Button
									LinkComponent={'a'}
									href='/signin'
									variant='outlined'
									style={{
										border: '1px solid rgba(255, 255, 255, .5)',
										color: '#fff',
									}}
									size='large'
								>
									Sign In
								</Button>
							</Box>
						) : path.includes('signin') ? (
							<Button
								LinkComponent={'a'}
								href='/signup'
								variant='outlined'
								style={{
									border: '1px solid rgba(255, 255, 255, .5)',
									color: '#fff',
								}}
								size='large'
							>
								Sign Up
							</Button>
						) : (
							<>
								<Search style={path.includes('create') ? { display: 'none' } : {display: 'block'}}>
									<SearchIconWrapper>
										<SearchIcon />
									</SearchIconWrapper>

									<StyledInputBase
										placeholder='Search…'
										inputProps={{ 'aria-label': 'search' }}
										onChange={HandleQuery}
										style={{ width: '150px' }}
									/>
								</Search>
								<Box sx={{ flexGrow: 1 }} />
								{user ? (
									<>
										<Box
											sx={{
												display: { xs: 'none', md: 'flex' },
												alignItems: { md: 'center' },
											}}
										>
											<Stack direction='row'>
												<Chip
													avatar={<Avatar alt='avatar' src={user.profilePic} />}
													label={user.username}
												/>
											</Stack>
											<IconButton
												size='large'
												edge='end'
												aria-label='account of current user'
												aria-controls={menuId}
												aria-haspopup='true'
												onClick={handleProfileMenuOpen}
												color='inherit'
											>
												<AccountCircleIcon />
											</IconButton>
										</Box>
										<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
											<IconButton
												size='large'
												aria-label='show more'
												aria-controls={mobileMenuId}
												aria-haspopup='true'
												onClick={handleMobileMenuOpen}
												color='inherit'
											>
												<MoreIcon />
											</IconButton>
										</Box>
									</>
								) : (
									<>
										<Box>
											<Button
												LinkComponent={'a'}
												href='signin'
												variant='filled'
												style={{
													background: 'rgb(13, 50, 80)',
													color: '#fff',
													fontSize: '1rem',
													boxShadow: '0 0 10px 2px rgba(0,0,0, .3)',
												}}
												size='large'
											>
												Sign In
											</Button>
										</Box>
									</>
								)}
							</>
						)}
					</Toolbar>
				</Container>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</>
	);
};

export default PrimarySearchAppBar;
