import React from 'react';
import { makeStyles } from '@material-ui/core';
import Users from '../Users/Users';
import Loader from '../../utils/Loader';

const useStyles = makeStyles({
	divFlex: {
		flex: '4',
	},
});

export default function UserList({ profiles }) {
	const classes = useStyles();
	if (profiles === null) {
		return <Loader />;
	}
	return (
		<div className={classes.divFlex}>
			<div>
				<Users profiles={profiles}/>
			</div>
		</div>
	);
}
