'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.GifsSortableCards = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _reactSortableHoc = require('react-sortable-hoc');

var _gif_card = require('../gif_card/gif_card');

var _bouncing_round_button = require('../../../../../../commons/bouncing_round_button/bouncing_round_button');

var _gifs_sortable_cards_styles = require('./gifs_sortable_cards_styles');

var MoveIcon = function MoveIcon(props) {
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
                    'M15 6.247l5-5 5 5M25 33.747l-5 5-5-5M20 1.247v37.5M6.25 24.997l-5-5 5-5M33.75 14.997l5 5-5 5M1.25 19.997h37.5',
                strokeWidth: '2.50005'
            })
        )
    );
};

MoveIcon.defaultProps = {
    viewBox: '0 0 40 40',
    xmlns: 'http://www.w3.org/2000/svg'
};
var useStyles = (0, _reactJss.createUseStyles)(_gifs_sortable_cards_styles.styles);

var GifsSortableCardsComponent = function GifsSortableCardsComponent(_ref) {
    var _ref$items = _ref.items,
        items = _ref$items === void 0 ? [] : _ref$items,
        interestDeleted = _ref.interestDeleted,
        interestChanged = _ref.interestChanged,
        errors = _ref.errors,
        setSelectedIndex = _ref.setSelectedIndex,
        onSortEnd = _ref.onSortEnd;
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(SortableGifsCards, {
        useDragHandle: true,
        axis: 'xy',
        items: items,
        interestDeleted: interestDeleted,
        interestChanged: interestChanged,
        errors: errors,
        setSelectedIndex: setSelectedIndex,
        onSortEnd: onSortEnd,
        classes: classes
    });
};

var SortableGifsCards = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
    var _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? [] : _ref2$items,
        interestDeleted = _ref2.interestDeleted,
        interestChanged = _ref2.interestChanged,
        errors = _ref2.errors,
        setSelectedIndex = _ref2.setSelectedIndex,
        classes = _ref2.classes;
    return /*#__PURE__*/ _react.default.createElement(
        'ul',
        {
            className: classes.list
        },
        items
            .filter(Boolean)
            .sort(function (_ref3, _ref4) {
                var a = _ref3.index;
                var b = _ref4.index;
                return a - b;
            })
            .map(function (interest, index) {
                return /*#__PURE__*/ _react.default.createElement(SortableGifItem, {
                    index: index,
                    key: 'interest_'.concat(interest.id, '_').concat(index),
                    onChange: interestChanged,
                    onRemove: interestDeleted,
                    setSelectedIndex: setSelectedIndex,
                    id: interest.id,
                    interest: interest,
                    error: errors === null || errors === void 0 ? void 0 : errors[index],
                    interestIndex: index,
                    classes: classes
                });
            })
    );
});
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
    return /*#__PURE__*/ _react.default.createElement(_bouncing_round_button.BouncingRoundButton, {
        title: 'Hold me to drag this card!',
        icon: MoveIcon,
        tooltipPlacement: 'bottom'
    });
});
var SortableGifItem = (0, _reactSortableHoc.SortableElement)(function (_ref5) {
    var id = _ref5.id,
        interest = _ref5.interest,
        onChange = _ref5.onChange,
        onRemove = _ref5.onRemove,
        fieldErrors = _ref5.error,
        index = _ref5.interestIndex,
        setSelectedIndex = _ref5.setSelectedIndex,
        classes = _ref5.classes;
    var handleRemove = (0, _react.useCallback)(
        function () {
            return onRemove(id);
        },
        [id, onRemove]
    );
    var handleChange = (0, _react.useCallback)(
        function (field) {
            return function (value) {
                return onChange(index, field, value);
            };
        },
        [onChange]
    );
    var handleImageEditClick = (0, _react.useCallback)(function () {
        return setSelectedIndex(index);
    }, []);
    return /*#__PURE__*/ _react.default.createElement(
        'li',
        {
            className: classes.listItem
        },
        /*#__PURE__*/ _react.default.createElement(_gif_card.GifCard, {
            imageEditable: true,
            gifUrl: interest === null || interest === void 0 ? void 0 : interest.gifUrl,
            name: interest === null || interest === void 0 ? void 0 : interest.name,
            onChange: handleChange,
            onRemove: handleRemove,
            onImageEditClick: handleImageEditClick,
            error: fieldErrors,
            additionalActions: /*#__PURE__*/ _react.default.createElement(DragHandle, null)
        })
    );
});
var GifsSortableCards = GifsSortableCardsComponent;
exports.GifsSortableCards = GifsSortableCards;
