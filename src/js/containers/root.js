import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DigitalClock from './digital_clock';

const Root = ({store}) => {
	return (
		<Provider store={store}>
			<div className='container'>
				<DigitalClock/>
			</div>
		</Provider>
	);
};

export default Root;