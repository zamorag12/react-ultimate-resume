'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.CONTACT_INFOS_DATA = void 0;

var _react = _interopRequireDefault(require('react'));

var _contact_infos_translations = require('./edit_contact_infos_button/contact_infos_translations');

var PhoneIcon = function PhoneIcon(props) {
    return /*#__PURE__*/ _react.default.createElement(
        'svg',
        props,
        /*#__PURE__*/ _react.default.createElement('path', {
            d:
                'M100.624 0h-61.25a14.583 14.583 0 0 0-14.582 14.583v110.833a14.583 14.583 0 0 0 14.583 14.583h61.25a14.583 14.583 0 0 0 14.583-14.583V14.583A14.583 14.583 0 0 0 100.624 0zm2.917 102.083a8.75 8.75 0 0 1-8.75 8.75H45.208a8.75 8.75 0 0 1-8.75-8.75V20.417a8.75 8.75 0 0 1 8.75-8.75h49.583a8.75 8.75 0 0 1 8.75 8.75z'
        })
    );
};

PhoneIcon.defaultProps = {
    viewBox: '0 0 140 140',
    xmlns: 'http://www.w3.org/2000/svg'
};

var EmailIcon = function EmailIcon(props) {
    return /*#__PURE__*/ _react.default.createElement(
        'svg',
        props,
        /*#__PURE__*/ _react.default.createElement(
            'g',
            {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '0'
            },
            /*#__PURE__*/ _react.default.createElement('path', {
                d:
                    'M64.831 84.91a7.303 7.303 0 0 0 10.314 0l56.5-56.502a2.917 2.917 0 0 0-1.638-4.952 11.468 11.468 0 0 0-1.674-.123H11.667a11.468 11.468 0 0 0-1.686.123 2.917 2.917 0 0 0-1.64 4.952z'
            }),
            /*#__PURE__*/ _react.default.createElement('path', {
                d:
                    'M139.346 34.02a1.062 1.062 0 0 0-1.167.227l-36.166 36.167a1.464 1.464 0 0 0 0 2.065l29.417 29.417a4.375 4.375 0 1 1-6.183 6.19L95.829 78.667a1.458 1.458 0 0 0-2.065 0L81.345 91.087a16.042 16.042 0 0 1-22.68 0L46.235 78.68a1.464 1.464 0 0 0-2.065 0l-29.418 29.417a4.375 4.375 0 0 1-6.183-6.19L37.986 72.49a1.464 1.464 0 0 0 0-2.065L1.82 34.26a1.05 1.05 0 0 0-1.167-.228A1.062 1.062 0 0 0 0 35v70a11.667 11.667 0 0 0 11.667 11.666h116.666a11.667 11.667 0 0 0 11.666-11.667V35a1.056 1.056 0 0 0-.653-.98z'
            })
        )
    );
};

EmailIcon.defaultProps = {
    viewBox: '0 0 140 140',
    xmlns: 'http://www.w3.org/2000/svg'
};

var PersonIcon = function PersonIcon(props) {
    return /*#__PURE__*/ _react.default.createElement(
        'svg',
        props,
        /*#__PURE__*/ _react.default.createElement(
            'g',
            {
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '1.5'
            },
            /*#__PURE__*/ _react.default.createElement('path', {
                d:
                    'M4.375 100.625a39.392 39.392 0 0 1 54.833-36.213M19.688 28.438a24.063 24.063 0 1 0 48.124 0 24.063 24.063 0 1 0-48.124 0zM65.625 100.625a35 35 0 1 0 70 0 35 35 0 1 0-70 0zM100.625 118.125v-17.5',
                strokeWidth: '8.749995'
            }),
            /*#__PURE__*/ _react.default.createElement('path', {
                d: 'M100.625 83.125a2.188 2.188 0 1 0 2.188 2.188 2.182 2.182 0 0 0-2.188-2.188',
                strokeWidth: '8.749995'
            })
        )
    );
};

PersonIcon.defaultProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 140 140',
    width: '140',
    height: '140'
};
var CONTACT_INFOS_DATA = Object.freeze({
    name: {
        path: 'basics.name',
        translation: _contact_infos_translations.translations.name,
        icon: PersonIcon,
        onlyDialog: true
    },
    phone: {
        path: 'basics.phone',
        translation: _contact_infos_translations.translations.phone,
        icon: PhoneIcon
    },
    email: {
        path: 'basics.email',
        translation: _contact_infos_translations.translations.email,
        icon: EmailIcon
    }
});
exports.CONTACT_INFOS_DATA = CONTACT_INFOS_DATA;
