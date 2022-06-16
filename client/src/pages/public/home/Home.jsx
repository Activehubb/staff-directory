import { Box, Container } from '@material-ui/core';
import Profile from '../../../components/profile/Profile';
import Animate from '../../../components/widget/animate/Animate';
import SideBar from '../../../components/sidebar/SideBar'

export default function Home({ profiles }) {

	if (profiles === null) {
		return <Animate type={'home'} />;
	}

	return (
		<div style={{display: 'flex'}}>
				{/* <SideBar/> */}
			<Container maxWidth='lg' component={'main'}>
				<Box style={{ margin: '1.5rem 0' }}>
					<Profile profiles={profiles} />
				</Box>
			</Container>
		</div>
	);
}
