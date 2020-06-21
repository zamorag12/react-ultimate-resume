'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.ContactInfosDialogTextFields = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _contact_infos_data = require('../../contact_infos_data');

var _contact_infos_dialog_textfields_styles = require('./contact_infos_dialog_textfields_styles');

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

var useStyles = (0, _reactJss.createUseStyles)(_contact_infos_dialog_textfields_styles.styles);
var ContactInfosDialogTextFields = (0, _react.memo)(function (_ref) {
    var inputs = _ref.inputs,
        setInputs = _ref.setInputs;
    var classes = useStyles();

    var _useIntl = (0, _reactIntl.useIntl)(),
        formatMessage = _useIntl.formatMessage;

    var handleChange = (0, _react.useCallback)(
        function (type) {
            return function (event) {
                setInputs(
                    _objectSpread(
                        _objectSpread({}, inputs),
                        {},
                        (0, _defineProperty2.default)({}, type, event.target.value)
                    )
                );
            };
        },
        [inputs]
    );
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.container
        },
        Object.entries(_contact_infos_data.CONTACT_INFOS_DATA).map(function (_ref2) {
            var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                contactInformationId = _ref3[0],
                _ref3$ = _ref3[1],
                translation = _ref3$.translation,
                Icon = _ref3$.icon;

            var value = inputs === null || inputs === void 0 ? void 0 : inputs[contactInformationId];
            var translated = formatMessage(translation);
            return /*#__PURE__*/ _react.default.createElement(_ui.TextField, {
                key: 'contact_info_field_'.concat(contactInformationId),
                fullWidth: true,
                customClasses: {
                    container: classes.textField
                },
                variant: 'flat',
                beforeChildren: /*#__PURE__*/ _react.default.createElement(
                    _ui.Tooltip,
                    {
                        title: translated
                    },
                    /*#__PURE__*/ _react.default.createElement(
                        _ui.TextFieldIcon,
                        null,
                        /*#__PURE__*/ _react.default.createElement(Icon, {
                            className: classes.icon
                        })
                    )
                ),
                onChange: handleChange(contactInformationId),
                value: value,
                placeholder: translated
            });
        })
    );
});
exports.ContactInfosDialogTextFields = ContactInfosDialogTextFields;
