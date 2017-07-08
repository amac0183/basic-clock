import _ from 'lodash';
import React, { Component } from 'react';


export class Divider extends Component {
	alternateShowHide() {
		return this.props.sec%2 ? 'visible' : 'hidden';
	}
	render() {
		let styles = {
			fontSize: '32pt',
			visibility: this.alternateShowHide()
		};

		return <span style={styles}>:</span>;
	}
}
 