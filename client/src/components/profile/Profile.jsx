import { Box, Container, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import ProfileWid from '../widget/profileWid/ProfileWid';

export default function Profile({ profiles }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'grid',
			width: "100%",
			gridTemplateColumns: 'repeat(auto-fill, minmax(186px, 1fr))',
			gap: '1rem',
			[theme.breakpoints.down('md')]: {
				display: 'block',
				width: '100%',
			},
		},
	}));

	const classes = useStyles();
	return (
		<Fragment>
			<Container maxWidth='lg'>
				<Box className={classes.root}>
					{profiles.map((profile, index) => (
						<ProfileWid profile={profile} key={index} />
					))}
				</Box>
			</Container>
		</Fragment>
	);
}
