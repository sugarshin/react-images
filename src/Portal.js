import React, { Component, PropTypes } from 'react';
import Transition from 'react-addons-transition-group';
import { render } from 'react-dom';

export default class Portal extends Component {
	constructor () {
		super();
		this.portalElement = null;
	}
	componentDidMount () {
		const p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	}

	componentDidUpdate () {
		render(
			<Transition {...this.props} component="div">{this.props.children}</Transition>,
				this.portalElement
		);
	}

	componentWillUnmount () {
		document.body.removeChild(this.portalElement);
	}

	render () {
		return null;
	}
}

Portal.propTypes = {
	children: PropTypes.any,
};
