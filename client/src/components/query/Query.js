import { Box, Container, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import ProfileWid from '../widget/profileWid/ProfileWid';
import Animate from '../widget/animate/Animate';

export default function Query({ query, profiles }) {
	const useStyles = makeStyles({
		root: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gap: '1rem',
		},
	});

	const classes = useStyles();

	if (profiles === null) {
		return <Animate type={'home'} />;
	}
	console.log(profiles);
	return (
		<Fragment>
			<Container maxWidth='lg' component={'main'}>
				<Box style={{ margin: '1.5rem 0' }}>
					<Box className={classes.root}>
						{profiles
							.filter((prof) => prof.bio.fname.toLowerCase().includes(query))
							.map((profile) => (
								<ProfileWid profile={profile} />
							))}
					</Box>
				</Box>
			</Container>
		</Fragment>
	);
}
