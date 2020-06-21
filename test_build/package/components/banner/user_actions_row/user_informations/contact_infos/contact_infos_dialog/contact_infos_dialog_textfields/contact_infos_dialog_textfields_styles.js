'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.styles = void 0;

var _styles_utils = require('../../../../../../../utils/styles/styles_utils');

var styles = function styles(theme) {
    return {
        container: {
            width: '100%',
            marginTop: 8 * 3,
            display: 'flex',
            flexDirection: 'column'
        },
        textField: {
            margin: [8, 0]
        },
        icon: {
            height: 22,
            width: 22,
            fill: (0, _styles_utils.getHexFromPaletteColor)(theme, 'dark')
        }
    };
};

exports.styles = styles;
