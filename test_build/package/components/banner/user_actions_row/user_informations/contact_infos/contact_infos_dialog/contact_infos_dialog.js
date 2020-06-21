'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.ContactInfosDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _set = _interopRequireDefault(require('lodash/set'));

var _core = require('@material-ui/core');

var _ui = require('@welovedevs/ui');

var _dialog_title = require('../../../../../commons/dialog/dialog_title/dialog_title');

var _contexts = require('../../../../../../utils/context/contexts');

var _contact_infos_dialog_textfields = require('./contact_infos_dialog_textfields/contact_infos_dialog_textfields');

var _contact_infos_dialog_styles = require('./contact_infos_dialog_styles');

var _contact_infos_data = require('../contact_infos_data');

/* eslint no-unused-vars: 0 */
var useStyles = (0, _reactJss.createUseStyles)(_contact_infos_dialog_styles.styles);

var ContactInfosDialog = function ContactInfosDialog(_ref) {
    var open = _ref.open,
        onClose = _ref.onClose,
        contactInformations = _ref.contactInformations;

    var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
        onEdit = _useContext.onEdit;

    var _useState = (0, _react.useState)(contactInformations),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        inputs = _useState2[0],
        setInputs = _useState2[1];

    var theme = (0, _reactJss.useTheme)();
    var fullScreen = (0, _core.useMediaQuery)(
        '(max-width: '.concat(theme === null || theme === void 0 ? void 0 : theme.screenSizes.small, 'px)'),
        {
            defaultMatches: true
        }
    );
    (0, _react.useEffect)(
        function () {
            return setInputs(contactInformations);
        },
        [contactInformations]
    );
    var handleSave = (0, _react.useCallback)(
        function () {
            if (!inputs) {
                return;
            }

            var edits = Object.entries(inputs).reduce(function (acc, _ref2) {
                var _CONTACT_INFOS_DATA$c;

                var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                    contactInformationId = _ref3[0],
                    value = _ref3[1];

                if (value === contactInformations[contactInformationId]) {
                    return acc;
                }

                (0,
                _set.default)(acc, _contact_infos_data.CONTACT_INFOS_DATA === null || _contact_infos_data.CONTACT_INFOS_DATA === void 0 ? void 0 : (_CONTACT_INFOS_DATA$c = _contact_infos_data.CONTACT_INFOS_DATA[contactInformationId]) === null || _CONTACT_INFOS_DATA$c === void 0 ? void 0 : _CONTACT_INFOS_DATA$c.path, value);
                return acc;
            }, {});
            onEdit(edits);
            onClose();
        },
        [contactInformations, inputs]
    );
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(
        _core.Dialog,
        {
            open: open,
            onClose: onClose,
            fullScreen: fullScreen
        },
        /*#__PURE__*/ _react.default.createElement(
            _dialog_title.DialogTitle,
            null,
            /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'Banner.UserInformations.ContactInfos.Dialog.Title',
                defaultMessage: 'Edit your contact informations?'
            })
        ),
        /*#__PURE__*/ _react.default.createElement(
            _core.DialogContent,
            null,
            /*#__PURE__*/ _react.default.createElement(
                _ui.Typography,
                {
                    color: 'dark',
                    customClasses: {
                        container: classes.typography
                    }
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Banner.UserInformations.ContactInfos.Dialog.Content',
                    defaultMessage:
                        'You can add contact informations to your profile. Please be aware that those informations might be scrapped and used for unknown purposes. <bolder>Add them at your own risks!</bolder>',
                    values: {
                        bolder: function bolder(chunks) {
                            return /*#__PURE__*/ _react.default.createElement(
                                'span',
                                {
                                    className: classes.bolder
                                },
                                chunks
                            );
                        }
                    }
                })
            ),
            /*#__PURE__*/ _react.default.createElement(_contact_infos_dialog_textfields.ContactInfosDialogTextFields, {
                inputs: inputs,
                setInputs: setInputs
            })
        ),
        /*#__PURE__*/ _react.default.createElement(
            _core.DialogActions,
            null,
            /*#__PURE__*/ _react.default.createElement(
                _ui.Button,
                {
                    size: 'small',
                    onClick: onClose
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Main.lang.close',
                    defaultMessage: 'Fermer'
                })
            ),
            /*#__PURE__*/ _react.default.createElement(
                _ui.Button,
                {
                    color: 'primary',
                    size: 'small',
                    onClick: handleSave
                },
                /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                    id: 'Main.lang.save',
                    defaultMessage: 'Sauvegarder'
                })
            )
        )
    );
};

exports.ContactInfosDialog = ContactInfosDialog;
