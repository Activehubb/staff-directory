import { Fragment } from 'react';
import Container from '@mui/material/Container';
import { Box, Typography } from '@material-ui/core';
// import { LightModeOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

export default function Footer() {
	const useStyles = makeStyles((theme) => ({
		footer: {
			padding: '1rem',
			background: '#0d3250',
			position: 'fixed',
			bottom: '0',
			display: 'block',
			width: '100%',
			zIndex: "2000"
		},
		box: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		Typography: {
			paddingRight: '1rem',
			textDecoration: 'none',
			color: '#f5f5f5',
		},
	}));

	const classes = useStyles();
	return (
		<Fragment>
			<footer className={classes.footer}>
				<Container maxWidth='lg'>
					<Box className={classes.box}>
						<Box className={classes.box}>
							<Typography component='p' className={classes.Typography}>
								Copyright &copy; {new Date().getFullYear()} OAU Staff Directory
							</Typography>
							<Typography component='a' href='/' className={classes.Typography}>
								Privacy
							</Typography>
							<Typography component='a' href='/' className={classes.Typography}>
								Accessible Links
							</Typography>
						</Box>
						<Box>
							<Box component='div'>
								{/* <LightModeOutlined/> */}
								<Typography component='a' href='/' className={classes.Typography}>
									Turn on dark mode
								</Typography>
							</Box>
						</Box>
					</Box>
				</Container>
			</footer>
		</Fragment>
	);
}
