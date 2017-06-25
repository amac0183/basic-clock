import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTime } from '../actions';


class Clock extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.timer = setInterval(this.props.setTime, 1000);
	}

	componentWillUnmount() {
    	clearInterval(this.timer);
    }

    formatNumber(number) {
    	if(number < 10) {
    		return `0${_.toString(number)}`;
    	}

    	return _.toString(number);
    }
	
	render() {
		return (
			<div>
				<span>{this.formatNumber(this.props.hour)}</span>:<span>{this.formatNumber(this.props.min)}</span>:<span>{this.formatNumber(this.props.sec)}</span>
				<div><span>{this.props.weekday}</span> <span>{moment(this.props.date, 'YYYYMMDD').format('MMM D, YYYY')}</span></div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		hour: state.hour,
		min: state.min,
		sec: state.sec,
		date: state.date,
		weekday: state.weekday
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTime: () => {
			dispatch(setTime());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);