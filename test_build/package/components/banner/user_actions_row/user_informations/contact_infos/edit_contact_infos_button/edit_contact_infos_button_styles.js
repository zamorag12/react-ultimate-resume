'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.styles = void 0;

var _styles_utils = require('../../../../../../utils/styles/styles_utils');

var styles = function styles(theme) {
    return {
        container: {
            color: [(0, _styles_utils.getHexFromPaletteColor)(theme, 'light'), '!important']
        }
    };
};

exports.styles = styles;
