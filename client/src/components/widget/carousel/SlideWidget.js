import { Box } from '@material-ui/core';
import React from 'react';
import './carousel.css';

export default function SlideWidget({ data, activeIndex }) {
	return (
		<div>
			{data.map((d, idx) => (
				<Box
					key={idx}
					component={'div'}
					className={idx === activeIndex ? 'wrapper active' : 'inactive'}
				>
					<img src={d.url} alt='' className='avatar' />
					<Box className='overlayy'></Box>
				</Box>
			))}
		</div>
	);
}
