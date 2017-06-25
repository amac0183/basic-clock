import { combineReducers } from 'redux';
import { ACTION_TYPES } from '../actions/constants';

const hour = (state = 12, action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_HOUR:
		return action.hour;
	default:
		return state;
	};
};

const min = (state = 0, action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_MIN:
		return action.min;
	default:
		return state;
	};
};

const sec = (state = 0, action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_SEC:
		return action.sec;
	default:
		return state;
	};
};

const amPm = (state = 'AM', action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_AMPM:
		return action.amPm;
	default:
		return state;
	};
};

const date = (state = 1, action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_DATE:
		return action.date;
	default:
		return state;
	};
};

const weekday = (state = 'Saturday', action) => {
	switch(action.type) {
	case ACTION_TYPES.SET_WEEKDAY:
		return action.weekday;
	default:
		return state;
	};
};

const rootReducers = combineReducers({
	hour,
	min,
	sec,
	amPm,
	date,
	weekday
});

export default rootReducers;