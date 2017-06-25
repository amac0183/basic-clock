import moment from 'moment';
import { ACTION_TYPES } from './constants';


const setHour = (hour) => {
	return {
		type: ACTION_TYPES.SET_HOUR,
		hour
	};
};

const setMin = (min) => {
	return {
		type: ACTION_TYPES.SET_MIN,
		min
	};
};

const setSec = (sec) => {
	return {
		type: ACTION_TYPES.SET_SEC,
		sec
	};
};

const setAMPM = (amPm) => {
	return {
		type: ACTION_TYPES.SET_AMPM,
		amPm
	};
};

const setDate = (date) => {
	return {
		type: ACTION_TYPES.SET_DATE,
		date
	};
};

const setWeekday = (weekday) => {
	return {
		type: ACTION_TYPES.SET_WEEKDAY,
		weekday
	};
};

const setTime = () => {
	return (dispatch) => {
		const time = moment();
		let militaryTimeHour = time.hour();
		let hour;
		let amPm;
		if(militaryTimeHour > 12) {
			hour = militaryTimeHour - 12;
			amPm = 'PM';
		}
		else if (militaryTimeHour === 0) {
			hour = 12;
			amPm = 'AM'
		}
		else {
			hour = militaryTimeHour;
			amPm = militaryTimeHour === 12 ? 'PM' : 'AM';
		}
		dispatch(setHour(hour));
		dispatch(setAMPM(amPm));
		dispatch(setMin(time.minute()));
		dispatch(setSec(time.second()));
		dispatch(setDate(time.format('YYYYMMDD')));
		dispatch(setWeekday(time.format('dddd')));
	};
};

export {
	setTime,
	setHour,
	setMin,
	setSec,
	setAMPM,
	setDate,
	setWeekday
};
