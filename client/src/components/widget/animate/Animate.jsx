import {
	Box,
	CardContent,
	makeStyles,
	Card,
} from '@material-ui/core';
import { Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function Animate({ type }) {
	const useStyles = makeStyles({
		wrap: {
			padding: '1rem',
			background: '#',
		},
		flex: {
			display: 'flex',
			alignItems: 'center',
		},
		root: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gap: '1rem',
			margin: '3rem ',
		},
	});

	// eslint-disable-next-line no-sparse-arrays
	const loop = [1, 2, 1, 2, 3, 4, 4, 55, 1];
	const classes = useStyles();
	const Home = () => (
		<Box className={classes.root}>
			{loop.map((l, idx) => (
				<Card className={classes.wrap} key={idx}>
					<Box className={classes.flex}>
						<Box>
							<Skeleton
								animation='wave'
								variant='circular'
								width={64}
								height={64}
							/>
						</Box>
						<Box style={{ marginLeft: '1.5rem' }}>
							<Skeleton
								animation='wave'
								height={40}
								width='220px'
								style={{ marginBottom: 6 }}
							/>
							<Skeleton
								animation='wave'
								height={30}
								width='190px'
								style={{ marginBottom: 6 }}
							/>
						</Box>
					</Box>
					<Box>
						<CardContent
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Stack direction='row' spacing={2}>
								<Skeleton
									animation='wave'
									height={40}
									width='180px'
									style={{ marginBottom: 6 }}
								/>
								<Skeleton
									animation='wave'
									height={40}
									width='100px'
									style={{ marginBottom: 6 }}
								/>
							</Stack>
						</CardContent>
					</Box>
				</Card>
			))}
		</Box>
	);
	if (type === 'home') return <Home />;
}
