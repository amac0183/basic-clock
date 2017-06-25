import React from 'react';
import ReactDom from 'react-dom';

import Root from './containers/root';
import configureStore from './store';
import { setTime } from './actions/';


const store = configureStore();
store.dispatch(setTime());

ReactDom.render(
	<Root store={store} />,
	document.getElementById('root')
);
