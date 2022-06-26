import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/More';
import { Avatar, Chip, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { Button, Container, Stack } from '@mui/material';
import { AuthContext } from '../../context/auth/AuthContext';
import { ExitToAppRounded, MenuRounded } from '@material-ui/icons';
import { ProfileContext } from '../../context/profile/profileContext';
import { Link } from 'react-router-dom';
import { userLogout } from '../../context/auth/apiCall';

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
	[theme.breakpoints.up('md')]: {
		marginLeft: theme.spacing(3),
		width: '500px',
	},
	[theme.breakpoints.down('md')]: {
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
		[theme.breakpoints.up('md')]: {
			width: '45ch',
		},
		[theme.breakpoints.down('md')]: {
			width: '20ch',
		},
	},
}));

const Navbar = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	[theme.breakpoints.down('md')]: {
		display: 'flex',
		padding: '.5rem 0',
	},
}));

const PrimarySearchAppBar = ({ HandleQuery, avatar, handleToggle }) => {
	const { user, dispatch, admin } = React.useContext(AuthContext);
	const handleLogout = () => {
		userLogout(dispatch);
	};
	const useStyles = makeStyles((theme) => ({
		Box: {
			display: 'flex',
			alignItems: 'center',
		},
		Auth: {
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.down('md')]: {
				display: 'none',
			},
		},
	}));

	const classes = useStyles();

	const { isProfile } = React.useContext(ProfileContext);
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
			<MenuItem onClick={handleLogout}>
				<Button
					component={'a'}
					href='/signin'
					style={{
						padding: '.2rem 0',
						marginLeft: '1rem',
						color: '#fff',
					}}
				>
					<ExitToAppRounded style={{ paddingRight: '.2rem' }} />
					Logout
				</Button>
			</MenuItem>
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

	const location = useLocation();
	const path = location.pathname;

	return (
		<>
			<header>
				<AppBar
					style={{
						background: 'rgb(13, 50, 80)',
						position: 'sticky',
						top: '0',
						padding: '.5rem 0',
						zIndex: '1000',
						color: '#fff',
					}}
				>
					<Container maxwidth='lg'>
						<Navbar>
							<MenuRounded
								style={{
									fontSize: '2.5rem',
									color: '#f4f4f4',
									cursor: 'pointer',
								}}
								onClick={handleToggle}
							/>
							<Box component={'div'} style={{ display: 'flex' }}>
								<Link
									to='/'
									style={{
										display: 'flex',
										textDecoration: 'none',
										gap: '0 .5rem',
										color: '#fff',
										alignItems: 'center',
									}}
								>
									<Avatar
										alt='oau logo'
										variant={'rounded'}
										src='/image/oaulogo.png'
									/>{' '}
									<Typography
										variant='h6'
										noWrap
										component='div'
										sx={{ display: { xs: 'none', sm: 'block' } }}
									>
										Staff Directory
									</Typography>
								</Link>
							</Box>
							<Box>
								{path.includes('signin') ? (
									''
								) : path.includes('signup') ? (
									''
								) : path.includes('create') ? (
									''
								) : (
									<Search>
										<SearchIconWrapper>
											<SearchIcon />
										</SearchIconWrapper>

										<StyledInputBase
											placeholder='Search…'
											inputProps={{ 'aria-label': 'search' }}
											onChange={HandleQuery}
										/>
									</Search>
								)}
							</Box>
							<Box className={classes.Box}>
								{admin && (
									<Box className={classes.Auth}>
										{admin && (
											<Stack direction='row'>
												<Chip
													avatar={
														<Avatar alt='avatar' src={admin.profilePic} />
													}
													label={admin.username}
												/>
											</Stack>
										)}

										<Button
											component={'a'}
											href='/signin'
											onClick={handleLogout}
											style={{
												padding: '.2rem 0',
												marginLeft: '1rem',
												color: '#fff',
												textTransform: 'capitalize',
											}}
										>
											Logout
											<ExitToAppRounded style={{ paddingLeft: '.2rem' }} />
										</Button>
									</Box>
								)}
								{user && (
									<Box className={classes.Auth}>
										{path.includes('create') ? (
											''
										) : path.includes('signin') ? (
											''
										) : path.includes('signup') ? (
											''
										) : (
											<>
												{!isProfile && (
													<Link
														to='/create/profile'
														style={{
															textDecoration: 'none',
															color: 'white',
															padding: '0 10px',
														}}
													>
														Create Profile
													</Link>
												)}
											</>
										)}

										<IconButton
											size='large'
											edge='end'
											aria-label='account of current user'
											aria-controls={menuId}
											aria-haspopup='true'
											// onClick={handleProfileMenuOpen}
											color='inherit'
										>
											<Link
												to='/profile'
												style={{
													textDecoration: 'none',
													color: 'white',
													padding: '0 10px',
													margin: '0 .5rem',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
											>
												<AccountCircleIcon />
											</Link>
										</IconButton>
										{user && (
											<Stack direction='row'>
												<Chip
													avatar={<Avatar alt='avatar' src={user.profilePic} />}
													label={user.username}
												/>
											</Stack>
										)}
										<Button
											component={'a'}
											href='/signin'
											onClick={handleLogout}
											style={{
												padding: '.2rem 0',
												marginLeft: '1rem',
												color: '#fff',
												textTransform: 'capitalize',
											}}
										>
											Logout
											<ExitToAppRounded style={{ paddingLeft: '.2rem' }} />
										</Button>
									</Box>
								)}
								{!user && !admin && (
									<Box className={classes.Auth}>
										{path.includes('signin') ? (
											<Button
												LinkComponent={'a'}
												href='/signup'
												style={{
													color: '#fff',
													textTransform: 'capitalize',
												}}
												size='large'
											>
												Create Account
											</Button>
										) : path.includes('signup') ? (
											<Button
												LinkComponent={'a'}
												href='/signin'
												variant='outlined'
												style={{
													border: '1px solid rgba(255, 255, 255, .5)',
													color: '#fff',
													textTransform: 'capitalize',
													margin: '0 .5rem',
												}}
												size='large'
											>
												Log In
											</Button>
										) : (
											<Box>
												<Button
													LinkComponent={'a'}
													href={!user || !admin ? '/signin' : '/users/profiles'}
													style={{
														color: '#fff',
														textTransform: 'capitalize',
													}}
													size='large'
												>
													Users
												</Button>
												<Button
													LinkComponent={'a'}
													href='/signup'
													style={{
														color: '#fff',
														textTransform: 'capitalize',
													}}
													size='large'
												>
													Create Account
												</Button>
												<Button
													LinkComponent={'a'}
													href='/signin'
													variant='outlined'
													style={{
														border: '1px solid rgba(255, 255, 255, .5)',
														color: '#fff',
														textTransform: 'capitalize',
														margin: '0 .5rem',
													}}
													size='large'
												>
													Log In
												</Button>
											</Box>
										)}
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
									</Box>
								)}
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
							</Box>
						</Navbar>
					</Container>

					{/* {renderMobileMenu}
			{renderMenu} */}
				</AppBar>
			</header>
		</>
	);
};

export default PrimarySearchAppBar;
