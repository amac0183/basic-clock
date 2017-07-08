import moment from 'moment';
import React, {Component} from 'react';


export class HourMinSec extends Component {
    formatNumber(number) {
    	if(number < 10) {
    		return `0${_.toString(number)}`;
    	}

    	return _.toString(number);
    }
	render() {
		let styles = {
			fontSize: '32pt'
		};
		
		return <span style={styles}>{this.formatNumber(this.props.time)}</span>;

	}
}
 