'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
    return {
        container: {
            display: 'flex',
            alignItems: 'center',
            margin: [8, 0]
        },
        icon: {
            height: 20,
            width: 'auto',
            fill: 'rgba('.concat(theme.palette.light.rgbShades[500].join(', '), ', .75)')
        },
        typography: {
            marginLeft: 8 * 2
        },
        button: {
            display: 'flex'
        }
    };
};

exports.styles = styles;
