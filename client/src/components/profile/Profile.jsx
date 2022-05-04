import { Box, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import ProfileWid from '../widget/profileWid/ProfileWid';

export default function Profile({ profiles }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'grid',

			gridTemplateColumns: 'repeat(3, 1fr)',
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
			<Box className={classes.root}>
				{profiles.map((profile, index) => (
					<ProfileWid profile={profile} key={index} />
				))}
			</Box>
		</Fragment>
	);
}
