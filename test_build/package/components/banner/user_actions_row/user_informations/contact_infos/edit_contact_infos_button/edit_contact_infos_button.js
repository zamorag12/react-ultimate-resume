'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.EditContactInfosButton = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _ui = require('@welovedevs/ui');

var _use_callback_open = require('../../../../../hooks/use_callback_open');

var _contact_infos_dialog = require('../contact_infos_dialog/contact_infos_dialog');

var _edit_contact_infos_button_styles = require('./edit_contact_infos_button_styles');

var useStyles = (0, _reactJss.createUseStyles)(_edit_contact_infos_button_styles.styles);

var EditContactInfosButton = function EditContactInfosButton(_ref) {
    var contactInformations = _ref.contactInformations;
    var classes = useStyles();

    var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
        _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
        openDialog = _useCallbackOpen2[0],
        setDialogOpened = _useCallbackOpen2[1],
        setDialogClosed = _useCallbackOpen2[2];

    return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(_contact_infos_dialog.ContactInfosDialog, {
            open: openDialog,
            onClose: setDialogClosed,
            contactInformations: contactInformations
        }),
        /*#__PURE__*/ _react.default.createElement(
            _ui.Button,
            {
                variant: 'outlined',
                customClasses: {
                    container: classes.container
                },
                onClick: setDialogOpened
            },
            /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'Banner.UserInformations.ContactInfosButton',
                defaultMessage: 'Edit contact informations'
            })
        )
    );
};

exports.EditContactInfosButton = EditContactInfosButton;
