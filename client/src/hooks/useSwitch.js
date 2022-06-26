import React from 'react';

export function useSwitch(initVal, options) {
	const [state, setState] = React.useState(initVal);

	const toggle = (val) => {
		typeof val !== 'undefined'
			? setState(val)
			: setState((current) => {
					if (current === options[0]) return options[1];
					return options[0];
			  });
	};

	return [state, toggle];
}
