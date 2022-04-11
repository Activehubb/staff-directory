import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Favorite, Share, ExpandMore } from '@material-ui/icons';
import { Box, Container } from '@material-ui/core';
import { getProfile } from '../../../context/profile/profileApiCall';
import { ProfileContext } from '../../../context/profile/profileContext';
import Animate from '../../../components/widget/animate/Animate';

const Expand = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function User() {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const { dispatch, profile } = useContext(ProfileContext);
	const location = useLocation();
	const path = location.pathname.split('/')[1];

	useEffect(() => {
		getProfile(path, dispatch);
	}, [path, dispatch]);

	if (profile === null || undefined) {
		return <Animate type='home' />;
	}

	console.log(path);

	return (
		<Box>
			<Container
				maxWidth='md'
				component={'div'}
				style={{ marginTop: '2rem', marginBottom: '2rem' }}
			>
				<Card>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						}
						title='John Doe Colsin'
						subheader='September 14, 2016'
					/>
					<CardMedia
						component='img'
						height='400'
						image='/image/pf.jpg'
						alt='avatar'
					/>
					<CardContent>
						<Typography variant='body2' color='text.secondary'>
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<Favorite />
						</IconButton>
						<IconButton aria-label='share'>
							<Share />
						</IconButton>
						<Expand
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'
						>
							<ExpandMore />
						</Expand>
					</CardActions>
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<CardContent>
							<Typography paragraph>Method:</Typography>
							<Typography paragraph>
								Heat 1/2 cup of the broth in a pot until simmering, add saffron
								and set aside for 10 minutes.
							</Typography>
							<Typography paragraph>
								Heat oil in a (14- to 16-inch) paella pan or a large, deep
								skillet over medium-high heat. Add chicken, shrimp and chorizo,
								and cook, stirring occasionally until lightly browned, 6 to 8
								minutes. Transfer shrimp to a large plate and set aside, leaving
								chicken and chorizo in the pan. Add pimentón, bay leaves,
								garlic, tomatoes, onion, salt and pepper, and cook, stirring
								often until thickened and fragrant, about 10 minutes. Add
								saffron broth and remaining 4 1/2 cups chicken broth; bring to a
								boil.
							</Typography>
							<Typography paragraph>
								Add rice and stir very gently to distribute. Top with artichokes
								and peppers, and cook without stirring, until most of the liquid
								is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
								reserved shrimp and mussels, tucking them down into the rice,
								and cook again without stirring, until mussels have opened and
								rice is just tender, 5 to 7 minutes more. (Discard any mussels
								that don’t open.)
							</Typography>
							<Typography>
								Set aside off of the heat to let rest for 10 minutes, and then
								serve.
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Container>
		</Box>
	);
}
