import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

export default function Loader() {
	const useStyles = makeStyles({
		align: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		},
	});

	const classes = useStyles();
	return (
		<div className={classes.align}>
			<Box>
				<img src='/image/heart.gif' alt='loader' />
			</Box>
		</div>
	);
}
