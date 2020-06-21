'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.ContactInfos = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

var _reactSpring = require('react-spring');

var _edit_contact_infos_button = require('./edit_contact_infos_button/edit_contact_infos_button');

var _contact_info_row = require('./contact_info_row/contact_info_row');

var _contact_infos_spring_props = require('./contact_infos_spring_props');

var _contact_infos_data = require('./contact_infos_data');

var _use_is_editing = require('../../../../hooks/use_is_editing');

var _contact_infos_styles = require('./contact_infos_styles');

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

var useStyles = (0, _reactJss.createUseStyles)(_contact_infos_styles.styles);

var ContactInfos = function ContactInfos(_ref) {
    var contactInformations = _ref.contactInformations;
    // eslint-disable-next-line no-unused-vars
    var classes = useStyles();

    var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
        _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
        isEditing = _useIsEditing2[0];

    return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(Divider, {
            classes: classes
        }),
        !isEditing &&
            /*#__PURE__*/ _react.default.createElement(ContactInfosRows, {
                contactInformations: contactInformations,
                classes: classes
            }),
        isEditing &&
            /*#__PURE__*/ _react.default.createElement(_edit_contact_infos_button.EditContactInfosButton, {
                contactInformations: contactInformations
            })
    );
};

exports.ContactInfos = ContactInfos;

var Divider = function Divider(_ref2) {
    var classes = _ref2.classes;
    var springProps = (0, _reactSpring.useSpring)(_contact_infos_spring_props.DIVIDER_SPRING_PROPS);
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.dividerContainer
        },
        /*#__PURE__*/ _react.default.createElement(_reactSpring.animated.div, {
            className: classes.divider,
            style: {
                opacity: springProps.opacity,
                transform: springProps.translation.interpolate(function (value) {
                    return 'translate3d('.concat(value, '%, 0, 0)');
                })
            }
        })
    );
};

var ContactInfosRows = function ContactInfosRows(_ref3) {
    var contactInformations = _ref3.contactInformations,
        classes = _ref3.classes;

    if (!contactInformations) {
        return null;
    }

    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.contactInfosRows
        },
        Object.entries(contactInformations)
            .filter(function (_ref4) {
                var _CONTACT_INFOS_DATA$c;

                var _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
                    contactInformationId = _ref5[0];

                return !((_CONTACT_INFOS_DATA$c = _contact_infos_data.CONTACT_INFOS_DATA[contactInformationId]) ===
                    null || _CONTACT_INFOS_DATA$c === void 0
                    ? void 0
                    : _CONTACT_INFOS_DATA$c.onlyDialog);
            })
            .map(function (_ref6) {
                var _ref7 = (0, _slicedToArray2.default)(_ref6, 2),
                    contactInformationId = _ref7[0],
                    value = _ref7[1];

                return /*#__PURE__*/ _react.default.createElement(
                    _contact_info_row.ContactInfoRow,
                    (0, _extends2.default)(
                        {
                            key: 'contact_information_row_'.concat(contactInformationId),
                            value: value
                        },
                        ['icon', 'translation'].reduce(function (acc, key) {
                            var _CONTACT_INFOS_DATA$c2;

                            return _objectSpread(
                                _objectSpread({}, acc),
                                {},
                                (0, _defineProperty2.default)(
                                    {},
                                    key,
                                    _contact_infos_data.CONTACT_INFOS_DATA === null ||
                                        _contact_infos_data.CONTACT_INFOS_DATA === void 0
                                        ? void 0
                                        : (_CONTACT_INFOS_DATA$c2 =
                                              _contact_infos_data.CONTACT_INFOS_DATA[contactInformationId]) === null ||
                                          _CONTACT_INFOS_DATA$c2 === void 0
                                        ? void 0
                                        : _CONTACT_INFOS_DATA$c2[key]
                                )
                            );
                        }, {})
                    )
                );
            })
    );
};
