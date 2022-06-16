import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ProfileContext } from '../../../context/profile/profileContext';
import { Button, DialogActions } from '@material-ui/core';

export default function ResponsiveDialog() {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
	const { profile, isProfile } = React.useContext(ProfileContext);

	return (
		<div>
			{profile && (
				<Dialog fullScreen={fullScreen} open={isProfile}>
					<DialogTitle>
						Congratulations, Profile Created Successfully
					</DialogTitle>
					<DialogContent>
						<DialogContentText>{profile.msg}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button component={'a'} href={'/profile'}>
							View Profile
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</div>
	);
}
