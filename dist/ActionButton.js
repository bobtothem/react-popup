'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
	onClick: function onClick() {},
	className: 'btn',
	url: null
};

var propTypes = {
	children: _propTypes2.default.node
};

var Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component(props) {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));
	}

	_createClass(Component, [{
		key: 'handleClick',
		value: function handleClick() {
			return this.props.onClick();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var className = this.props.className;
			var url = false;

			if (this.props.url) {
				if (this.props.url !== '#') {
					url = true;
				}

				if (!url) {
					return _react2.default.createElement(
						'a',
						{ target: '_blank', className: className },
						this.props.children
					);
				}

				return _react2.default.createElement(
					'a',
					{ href: this.props.url, target: '_blank', className: className },
					this.props.children
				);
			}

			return _react2.default.createElement(
				'button',
				{ onClick: function onClick() {
						return _this2.handleClick();
					}, className: className, dangerouslySetInnerHTML: this.props.html ? { __html: this.props.html } : null },
				this.props.html ? null : this.props.children
			);
		}
	}]);

	return Component;
}(_react2.default.Component);

Component.displayName = 'PopupAction';
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

exports.default = Component;
