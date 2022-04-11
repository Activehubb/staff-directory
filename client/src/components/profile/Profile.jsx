import { Box, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import ProfileWid from '../widget/profileWid/ProfileWid';

export default function Profile({ profiles }) {
	const useStyles = makeStyles({
		root: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gap: '1rem',
		},
	});

	const classes = useStyles();
	return (
		<Fragment>
			<Box
				className={classes.root}
				sx={{ display: { sm: 'block', md: 'block' } }}
			>
				{profiles.map((profile, index) => (
					<ProfileWid profile={profile} key={index} />
				))}
			</Box>
		</Fragment>
	);
}
