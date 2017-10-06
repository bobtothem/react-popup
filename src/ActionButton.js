import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	onClick: function () {},
	className: 'btn',
	url: null,
};

const propTypes = {
	children: PropTypes.node,
};

class Component extends React.Component {

	constructor(props) {
		super(props);
	}

	handleClick() {
		return this.props.onClick();
	}

	render() {
		let className = this.props.className;
		let url = false;

		if (this.props.url) {
			if (this.props.url !== '#') {
				url = true;
			}

			if (!url) {
				return (<a target="_blank" className={className}>{this.props.children}</a>);
			}

			return (<a href={this.props.url} target="_blank" className={className}>{this.props.children}</a>);
		}

		return (
			<button onClick={() => this.handleClick()} className={className} dangerouslySetInnerHTML={this.props.html ? { __html: this.props.html } : null}>
				{this.props.html ? null : this.props.children}
			</button>
		);
	}

}

Component.displayName = 'PopupAction';
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
