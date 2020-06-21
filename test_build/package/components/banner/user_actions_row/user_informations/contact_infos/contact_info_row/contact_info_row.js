'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.ContactInfoRow = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _contact_info_row_styles = require('./contact_info_row_styles');

var useStyles = (0, _reactJss.createUseStyles)(_contact_info_row_styles.styles);

var ContactInfoRow = function ContactInfoRow(_ref) {
    var Icon = _ref.icon,
        translation = _ref.translation,
        value = _ref.value;
    var classes = useStyles();

    var _useIntl = (0, _reactIntl.useIntl)(),
        formatMessage = _useIntl.formatMessage;

    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        /*#__PURE__*/ _react.default.createElement(
            _ui.Tooltip,
            {
                title: formatMessage(translation)
            },
            /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                    className: classes.button,
                    type: 'button'
                },
                /*#__PURE__*/ _react.default.createElement(Icon, {
                    className: classes.icon
                })
            )
        ),
        /*#__PURE__*/ _react.default.createElement(
            _ui.Typography,
            {
                customClasses: {
                    container: classes.typography
                },
                color: 'light'
            },
            value
        )
    );
};

exports.ContactInfoRow = ContactInfoRow;
