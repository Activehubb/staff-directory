import React, { useContext } from 'react';
import { Box, Container } from '@material-ui/core';
import Profile from '../../../components/profile/Profile';
import { ProfileContext } from '../../../context/profile/profileContext';
import Animate from '../../../components/widget/animate/Animate';

export default function Home({ profiles }) {
	const { isFetching } = useContext(ProfileContext);

	
	if (profiles === null) {
		return <Animate type={'home'} />;
	}

	return (
		<div>
			<Container maxWidth='lg' component={'main'}>
				<Box style={{ margin: '1.5rem 0' }}>
					{isFetching ? (
						<Animate type='home' />
					) : (
						<Profile profiles={profiles} />
					)}
				</Box>
			</Container>
		</div>
	);
}
