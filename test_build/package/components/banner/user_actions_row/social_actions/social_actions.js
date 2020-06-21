'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.SocialActions = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

var _social_actions_styles = require('./social_actions_styles');

var useStyles = (0, _reactJss.createUseStyles)(_social_actions_styles.styles);

var SocialActionsComponent = function SocialActionsComponent(_ref) {
    var children = _ref.children;
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        children
    );
};

var SocialActions = SocialActionsComponent;
exports.SocialActions = SocialActions;
