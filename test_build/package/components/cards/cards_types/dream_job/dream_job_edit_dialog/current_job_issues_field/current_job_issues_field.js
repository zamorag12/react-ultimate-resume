'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.CurrentJobIssuesField = void 0;

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

var _job_issues_utils = require('../../../../../../utils/enums/job_issues/job_issues_utils');

var _edit_dialog_field = require('../../../../../commons/edit_dialog_field/edit_dialog_field');

var _current_job_issues_field_spring_props = require('./current_job_issues_field_spring_props');

var _job_issues_translations = require('../../../../../../utils/enums/job_issues/job_issues_translations');

var _current_job_issues_field_styles = require('./current_job_issues_field_styles');

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

var useStyles = (0, _reactJss.createUseStyles)(_current_job_issues_field_styles.styles);
var checkboxGroupCurrentJobIssues = Object.values(_job_issues_utils.JobIssues).filter(function (key) {
    return key !== _job_issues_utils.JobIssues.OTHER;
});

var CurrentJobIssuesFieldComponent = function CurrentJobIssuesFieldComponent(_ref) {
    var error = _ref.error,
        currentJobIssues = _ref.currentJobIssues,
        onChange = _ref.onChange,
        setFieldValue = _ref.setFieldValue;
    var timerRef = (0, _react.useRef)();
    var classes = useStyles();

    var _useIntl = (0, _reactIntl.useIntl)(),
        formatMessage = _useIntl.formatMessage;

    var otherCurrentJobIssue = (0, _react.useMemo)(
        function () {
            var _currentJobIssues$Job;

            return (_currentJobIssues$Job = currentJobIssues[_job_issues_utils.JobIssues.OTHER]) !== null &&
                _currentJobIssues$Job !== void 0
                ? _currentJobIssues$Job
                : null;
        },
        [currentJobIssues]
    );

    var _useState = (0, _react.useState)(otherCurrentJobIssue),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        otherCurrentJobIssueValue = _useState2[0],
        setOtherCurrentJobIssueValue = _useState2[1];

    var checkedCurrentJobIssues = (0, _react.useMemo)(
        function () {
            return Object.entries(currentJobIssues || {})
                .filter(function (_ref2) {
                    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                        value = _ref3[1];

                    return value === true;
                })
                .map(function (_ref4) {
                    var _ref5 = (0, _slicedToArray2.default)(_ref4, 1),
                        issue = _ref5[0];

                    return issue;
                });
        },
        [currentJobIssues]
    );
    var transitions = (0, _reactSpring.useTransition)(
        otherCurrentJobIssue !== null,
        function (item) {
            return 'other_field_'.concat(item ? 'visible' : 'invisible');
        },
        _objectSpread(
            _objectSpread(
                {},
                _current_job_issues_field_spring_props.CURRENT_JOB_ISSUES_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS
            ),
            {},
            {
                unique: true
            }
        )
    );
    var handleCheckboxGroupChange = (0, _react.useCallback)(
        function (newCurrentJobIssues) {
            return onChange(
                _objectSpread(
                    _objectSpread(
                        {},
                        newCurrentJobIssues.reduce(function (acc, issue) {
                            acc[issue] = true;
                            return acc;
                        }, {})
                    ),
                    {},
                    (0, _defineProperty2.default)(
                        {},
                        _job_issues_utils.JobIssues.OTHER,
                        currentJobIssues[_job_issues_utils.JobIssues.OTHER]
                    )
                )
            );
        },
        [currentJobIssues]
    );
    var toggleOtherCurrentJobIssue = (0, _react.useCallback)(
        function () {
            return setFieldValue(
                'currentJobIssues.'.concat(_job_issues_utils.JobIssues.OTHER),
                typeof currentJobIssues[_job_issues_utils.JobIssues.OTHER] === 'string' ? null : ''
            );
        },
        [currentJobIssues]
    );
    (0, _react.useEffect)(
        function () {
            return setOtherCurrentJobIssueValue(otherCurrentJobIssue);
        },
        [otherCurrentJobIssue]
    );
    var handleOtherJobIssueChange = (0, _react.useCallback)(function (e) {
        return setOtherCurrentJobIssueValue(e.target.value);
    }, []);
    (0, _react.useEffect)(
        function () {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            if (typeof otherCurrentJobIssueValue !== 'string' || !otherCurrentJobIssueValue.length) {
                return;
            }

            timerRef.current = setTimeout(function () {
                setFieldValue('currentJobIssues.'.concat(_job_issues_utils.JobIssues.OTHER), otherCurrentJobIssueValue);
            }, 500);
        },
        [otherCurrentJobIssueValue]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _edit_dialog_field.EditDialogField,
        {
            error: error,
            title: /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'DreamJob.editDialog.currentJobIssues.title',
                defaultMessage: 'Which issues do you encounter in your current job?'
            })
        },
        /*#__PURE__*/ _react.default.createElement(_checkbox_group.CheckboxGroup, {
            rows: 2,
            values: checkboxGroupCurrentJobIssues,
            translations: _job_issues_translations.translations,
            value: checkedCurrentJobIssues,
            name: 'currentJobIssues',
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
                    formatMessage(_job_issues_translations.translations.other)
                ),
                onClick: toggleOtherCurrentJobIssue,
                checked: otherCurrentJobIssue !== null,
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
                    onChange: handleOtherJobIssueChange,
                    name: 'currentJobIssues['.concat(_job_issues_utils.JobIssues.OTHER, ']'),
                    value: otherCurrentJobIssueValue,
                    variant: 'flat',
                    containerProps: {
                        style: props
                    }
                })
            );
        })
    );
};

var CurrentJobIssuesField = CurrentJobIssuesFieldComponent;
exports.CurrentJobIssuesField = CurrentJobIssuesField;
