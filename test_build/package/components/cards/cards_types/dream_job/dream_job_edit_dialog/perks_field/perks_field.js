'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.PerksField = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

var _reactJss = require('react-jss');

var _reactSpring = require('react-spring');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _checkbox_group = require('../../../../../commons/checkbox_group/checkbox_group');

var _checkbox_group2 = require('../../../../../commons/checkbox_field/checkbox_group');

var _job_perks_utils = require('../../../../../../utils/enums/job_perks/job_perks_utils');

var _edit_dialog_field = require('../../../../../commons/edit_dialog_field/edit_dialog_field');

var _job_perks_translations = require('../../../../../../utils/enums/job_perks/job_perks_translations');

var _perks_field_transitions_spring_props = require('./perks_field_transitions_spring_props');

var _perks_field_styles = require('./perks_field_styles');

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

var useStyles = (0, _reactJss.createUseStyles)(_perks_field_styles.styles);
var checkboxGroupPerks = Object.values(_job_perks_utils.JobPerks).filter(function (perk) {
    return perk !== _job_perks_utils.JobPerks.OTHER;
});

var PerksFieldComponent = function PerksFieldComponent(_ref) {
    var error = _ref.error,
        perks = _ref.perks,
        onChange = _ref.onChange,
        setFieldValue = _ref.setFieldValue;
    var timerRef = (0, _react.useRef)();
    var classes = useStyles();

    var _useIntl = (0, _reactIntl.useIntl)(),
        formatMessage = _useIntl.formatMessage;

    var otherPerk = (0, _react.useMemo)(
        function () {
            var _perks$JobPerks$OTHER;

            return (_perks$JobPerks$OTHER = perks[_job_perks_utils.JobPerks.OTHER]) !== null &&
                _perks$JobPerks$OTHER !== void 0
                ? _perks$JobPerks$OTHER
                : null;
        },
        [perks]
    );

    var _useState = (0, _react.useState)(otherPerk),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        otherPerkValue = _useState2[0],
        setOtherPerkValue = _useState2[1];

    var checkedPerks = (0, _react.useMemo)(
        function () {
            return Object.entries(perks || {})
                .filter(function (_ref2) {
                    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                        value = _ref3[1];

                    return value === true;
                })
                .map(function (_ref4) {
                    var _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
                        perk = _ref5[0];

                    return perk;
                });
        },
        [perks]
    );
    var transitions = (0, _reactSpring.useTransition)(
        otherPerk !== null,
        function (item) {
            return 'other_field_'.concat(item ? 'visible' : 'invisible');
        },
        _objectSpread(
            _objectSpread(
                {},
                _perks_field_transitions_spring_props.PERKS_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS
            ),
            {},
            {
                unique: true
            }
        )
    );
    var handleCheckboxGroupChange = (0, _react.useCallback)(
        function (newPerks) {
            return onChange(
                _objectSpread(
                    _objectSpread(
                        {},
                        newPerks.reduce(function (acc, perk) {
                            acc[perk] = true;
                            return acc;
                        }, {})
                    ),
                    {},
                    (0, _defineProperty2.default)(
                        {},
                        _job_perks_utils.JobPerks.OTHER,
                        perks[_job_perks_utils.JobPerks.OTHER]
                    )
                )
            );
        },
        [perks]
    );
    var toggleOtherPerk = (0, _react.useCallback)(
        function () {
            return setFieldValue(
                'perks.'.concat(_job_perks_utils.JobPerks.OTHER),
                typeof perks[_job_perks_utils.JobPerks.OTHER] === 'string' ? null : ''
            );
        },
        [perks]
    );
    (0, _react.useEffect)(
        function () {
            return setOtherPerkValue(otherPerk);
        },
        [otherPerk]
    );
    var handleOtherPerkValueChange = (0, _react.useCallback)(function (e) {
        return setOtherPerkValue(e.target.value);
    }, []);
    (0, _react.useEffect)(
        function () {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            if (typeof otherPerkValue !== 'string' || !otherPerkValue.length) {
                return;
            }

            timerRef.current = setTimeout(function () {
                setFieldValue('perks.'.concat(_job_perks_utils.JobPerks.OTHER), otherPerkValue);
            }, 500);
        },
        [otherPerkValue]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _edit_dialog_field.EditDialogField,
        {
            error: error,
            title: /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'DreamJob.editDialog.perks.title',
                defaultMessage: 'What perks are important to you ?'
            })
        },
        /*#__PURE__*/ _react.default.createElement(_checkbox_group.CheckboxGroup, {
            rows: 2,
            values: checkboxGroupPerks,
            translations: _job_perks_translations.jobPerksTranslations,
            value: checkedPerks,
            name: 'perks',
            variant: 'outlined',
            onChange: handleCheckboxGroupChange
        }),
        /*#__PURE__*/ _react.default.createElement(
            'div',
            {
                className: classes.othersCheckbox
            },
            /*#__PURE__*/ _react.default.createElement(_checkbox_group2.CheckboxField, {
                title: /*#__PURE__*/ _react.default.createElement(
                    _ui.Typography,
                    null,
                    formatMessage(_job_perks_translations.jobPerksTranslations.others)
                ),
                onClick: toggleOtherPerk,
                checked: otherPerk !== null,
                variant: 'outlined',
                color: 'secondary'
            })
        ),
        transitions.map(function (_ref6) {
            var item = _ref6.item,
                key = _ref6.key,
                props = _ref6.props;
            return (
                item &&
                /*#__PURE__*/ _react.default.createElement(_ui.TextField, {
                    fullWidth: true,
                    key: key,
                    containerElement: _reactSpring.animated.div,
                    customClasses: {
                        container: (0, _classnames.default)(classes.textField, classes.otherTextField)
                    },
                    onChange: handleOtherPerkValueChange,
                    name: 'perks['.concat(_job_perks_utils.JobPerks.OTHER, ']'),
                    value: otherPerkValue,
                    variant: 'flat',
                    containerProps: {
                        style: props
                    }
                })
            );
        })
    );
};

var PerksField = PerksFieldComponent;
exports.PerksField = PerksField;
