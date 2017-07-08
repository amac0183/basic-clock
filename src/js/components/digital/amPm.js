import _ from 'lodash';
import React, { Component } from 'react';


export class AmPm extends Component {
	render() {
		let styles = {
			fontSize: '18pt'
		}
		return <span style={styles}>{this.props.amPm}</span>;
	}
}
 