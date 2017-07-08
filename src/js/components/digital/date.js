import _ from 'lodash';
import moment from 'moment';
import React, {Component} from 'react';



class Date extends Component {
	_formatString(str) {
		return _.toUpper(str);
	}

	formatWeekday() {
		return this._formatString(this.props.weekday)
	}

	formatDate() {
		return this._formatString(moment(this.props.date, 'YYYYMMDD').format('MMM D, YYYY'))
	}
	
	render() {
		let styles = {
			fontSize: '12pt'
		};
		return <span style={styles}><span>{this.formatWeekday()}</span> <span>{this.formatDate()}</span></span>;
	}
};

export { Date };
