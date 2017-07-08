import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTime } from '../actions';
import { AmPm } from '../components/digital/amPm';
import { Date } from '../components/digital/date';
import { Divider } from '../components/digital/divider';
import { HourMinSec } from '../components/digital/hourMinSec';



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
	
	render() {
		let styles = {
			fontFamily: 'Orbitron, sans-serif'
		};
		return (
			<div style={styles}>
				<HourMinSec time={this.props.hour} /><Divider sec={this.props.sec} /><HourMinSec time={this.props.min} /> <AmPm amPm={this.props.amPm} /><br/>
				<Date weekday={this.props.weekday} date={this.props.date} />
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		hour: state.hour,
		min: state.min,
		sec: state.sec,
		amPm: state.amPm,
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