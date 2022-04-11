import React, { useEffect, useState } from 'react';
import './carousel.css';
import SlideWidget from './SlideWidget';
import data from './data';

let len = data.length - 1;

const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div>
			<SlideWidget data={data} activeIndex={activeIndex} />
		</div>
	);
};

export default Carousel;
