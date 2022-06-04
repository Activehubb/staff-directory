import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { CategoryOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import './cat.css';

const data = [
	{ cat: 'Faculties', totalCat: 203, text: 'From Department' },
	{ cat: 'College', totalCat: 133, text: 'From College' },
	{ cat: 'Centers', totalCat: 30, text: 'From Centres' },
	{ cat: 'Units', totalCat: 132, text: 'From Units' },
];

const useStyles = makeStyles({
	span: {
		display: 'flex',
	},
	div: {
		margin: '1rem',
		padding: '1rem',
		width: '100%',
		flex: '1',
		border: '.5px solid rgba(0,0,0,.1)',
		borderRadius: '.3rem',
	},
	Typo: {
		fontFamily: 'Source Sans',
	},
});

export default function Category() {
	const classes = useStyles();
	return (
		<Fragment>
			<Box component='div'>
				<List>
					<ListItem>
						<ListItemText className={classes.span} component='div'>
							<CategoryOutlined /> Category
						</ListItemText>
					</ListItem>
				</List>
				<Divider />
				<div className='wrapper'>
					{data.map((item, idx) => (
						<Box
							component='div'
							style={{
								margin: '1rem',
								padding: '1rem',
								width: '100%',
								flex: '1',
								border: '.5px solid rgba(0,0,0,.1)',
								borderRadius: '.3rem',
							}}
							className={`cat cat${idx}`}
						>
							<Typography
								component='h3'
								sx={{ padding: '1rem', fontWeight: 'bold' }}
							>
								{item.cat}
							</Typography>
							<Typography
								component='p'
								sx={{ padding: '1rem', fontWeight: 'bold' }}
							>
								Total Users: {item.totalCat}
							</Typography>
							<Typography
								component='small'
								sx={{ padding: '1rem', fontWeight: 'bold' }}
							>
								{item.text}
							</Typography>
						</Box>
					))}
				</div>
				<Divider />
			</Box>
		</Fragment>
	);
}
