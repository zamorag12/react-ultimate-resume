'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.UserInformations = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _lodash = require('lodash');

var _ui = require('@welovedevs/ui');

var _avatar = require('../../../commons/avatar/avatar');

var _column = require('../../../commons/column/column');

var _contexts = require('../../../../utils/context/contexts');

var _contact_infos_data = require('./contact_infos/contact_infos_data');

var _user_informations_styles = require('./user_informations_styles');

var _use_additional_nodes = require('../../../hooks/use_additional_nodes');

var _contact_infos = require('./contact_infos/contact_infos');

var _use_options = require('../../../hooks/use_options');

var _use_is_editing = require('../../../hooks/use_is_editing');

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                (0, _defineProperty2.default)(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

var useStyles = (0, _reactJss.createUseStyles)(_user_informations_styles.styles);

var UserInformations = function UserInformations() {
    var _data$basics, _data$basics2, _data$basics3;

    var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
        data = _useContext.data;

    var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('banner.userInformations', null),
        _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
        additionalNodes = _useAdditionalNodes2[0];

    var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
        _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
        isEditing = _useIsEditing2[0];

    var _useOptions = (0, _use_options.useOptions)('showContactInfos', false),
        _useOptions2 = (0, _slicedToArray2.default)(_useOptions, 1),
        showContactInformations = _useOptions2[0];

    var contactInformations = (0, _react.useMemo)(
        function () {
            return Object.entries(_contact_infos_data.CONTACT_INFOS_DATA).reduce(function (acc, _ref) {
                var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                    key = _ref2[0],
                    path = _ref2[1].path;

                return _objectSpread(
                    _objectSpread({}, acc),
                    {},
                    (0, _defineProperty2.default)({}, key, (0, _lodash.get)(data, path))
                );
            }, {});
        },
        [data]
    );
    var hasContactInformations = (0, _react.useMemo)(
        function () {
            return Object.values(contactInformations).some(function (value) {
                return Boolean(value);
            });
        },
        [contactInformations]
    );
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        /*#__PURE__*/ _react.default.createElement(_avatar.Avatar, {
            src: (_data$basics = data.basics) === null || _data$basics === void 0 ? void 0 : _data$basics.picture
        }),
        /*#__PURE__*/ _react.default.createElement(
            _column.Column,
            {
                customClasses: {
                    container: classes.textColumn
                }
            },
            /*#__PURE__*/ _react.default.createElement(
                _ui.Typography,
                {
                    customClasses: {
                        container: classes.name
                    },
                    variant: 'h3',
                    component: 'h3'
                },
                (_data$basics2 = data.basics) === null || _data$basics2 === void 0 ? void 0 : _data$basics2.name
            ),
            /*#__PURE__*/ _react.default.createElement(
                _ui.Typography,
                {
                    customClasses: {
                        container: classes.description
                    },
                    component: 'h4'
                },
                (_data$basics3 = data.basics) === null || _data$basics3 === void 0 ? void 0 : _data$basics3.summary
            ),
            showContactInformations &&
                (isEditing || hasContactInformations) &&
                /*#__PURE__*/ _react.default.createElement(_contact_infos.ContactInfos, {
                    contactInformations: contactInformations
                }),
            additionalNodes
        )
    );
};

exports.UserInformations = UserInformations;
