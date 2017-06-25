import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Clock from '../components/clock';

const Root = ({store}) => {
	return (
		<Provider store={store}>
			<div className='container'>
				<Clock/>
			</div>
		</Provider>
	);
};

export default Root;