'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.LocationPlacesField = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactJss = require('react-jss');

var _reactIntl = require('react-intl');

var _reactSpring = require('react-spring');

var _reactSortableHoc = require('react-sortable-hoc');

var _ui = require('@welovedevs/ui');

var _location_field = require('../../../../../commons/location_field/location_field');

var _edit_dialog_field = require('../../../../../commons/edit_dialog_field/edit_dialog_field');

var _location_places_field_transitions_spring_props = require('./location_places_field_transitions_spring_props');

var _location_places_field_styles = require('./location_places_field_styles');

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

var TrashIcon = function TrashIcon(props) {
    return /*#__PURE__*/ _react.default.createElement(
        'svg',
        props,
        /*#__PURE__*/ _react.default.createElement('path', {
            d:
                'M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z'
        })
    );
};

TrashIcon.defaultProps = {
    width: '33',
    height: '32',
    viewBox: '0 0 33 32',
    fill: '#fff',
    xmlns: 'http://www.w3.org/2000/svg'
};

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
var useStyles = (0, _reactJss.createUseStyles)(_location_places_field_styles.styles);
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
    var classes = _ref.classes;
    return /*#__PURE__*/ _react.default.createElement(
        'button',
        {
            className: classes.dragHandleButton,
            type: 'button'
        },
        /*#__PURE__*/ _react.default.createElement(MoveIcon, {
            className: classes.dragHandle
        })
    );
});
var SortableTag = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
    var onRemove = _ref2.onRemove,
        item = _ref2.item,
        style = _ref2.style;
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(
        _ui.Tag,
        {
            className: classes.place,
            color: 'secondary',
            style: {
                opacity: style.opacity,
                transform: style.scale.to(function (value) {
                    return 'scale3d('.concat(value, ', ').concat(value, ', ').concat(value, ')');
                })
            }
        },
        /*#__PURE__*/ _react.default.createElement(DragHandle, {
            classes: classes
        }),
        /*#__PURE__*/ _react.default.createElement(
            _ui.Tooltip,
            {
                title: 'Delete this place'
            },
            /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                    type: 'button',
                    onClick: onRemove
                },
                /*#__PURE__*/ _react.default.createElement(TrashIcon, {
                    className: classes.deleteIcon
                })
            )
        ),
        /*#__PURE__*/ _react.default.createElement(
            _ui.Typography,
            {
                variant: 'body2',
                color: 'light'
            },
            item.name
        )
    );
});
var SortableTags = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
    var onRemove = _ref3.onRemove,
        items = _ref3.items;
    var classes = useStyles();
    var transitions = (0, _reactSpring.useTransition)(
        items,
        function (_ref4) {
            var id = _ref4.id;
            return 'place_'.concat(id);
        },
        _objectSpread(
            _objectSpread(
                {},
                _location_places_field_transitions_spring_props.LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS
            ),
            (items === null || items === void 0 ? void 0 : items.length) && {
                trail: 500 / items.length
            }
        )
    );
    return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
            className: classes.places
        },
        transitions.map(function (_ref5, index) {
            var item = _ref5.item,
                key = _ref5.key,
                props = _ref5.props;
            return (
                item &&
                /*#__PURE__*/ _react.default.createElement(SortableTag, {
                    index: index,
                    key: key,
                    item: item,
                    style: props,
                    onRemove: onRemove(item.id)
                })
            );
        })
    );
});

var LocationPlacesFieldComponent = function LocationPlacesFieldComponent(_ref6) {
    var error = _ref6.error,
        places = _ref6.places,
        addPlace = _ref6.addPlace,
        removePlace = _ref6.removePlace,
        onChange = _ref6.onChange;
    var classes = useStyles();
    var placesValues = (0, _react.useMemo)(
        function () {
            return Object.values(places || {});
        },
        [places]
    );
    var onMove = (0, _react.useCallback)(
        function (_ref7) {
            var oldIndex = _ref7.oldIndex,
                newIndex = _ref7.newIndex;
            onChange((0, _reactSortableHoc.arrayMove)(placesValues, oldIndex, newIndex));
        },
        [placesValues, onChange]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _edit_dialog_field.EditDialogField,
        {
            error: error,
            title: /*#__PURE__*/ _react.default.createElement(_reactIntl.FormattedMessage, {
                id: 'DreamJob.editDialog.location.title',
                defaultMessage: "What's your dream job location?"
            })
        },
        /*#__PURE__*/ _react.default.createElement(_location_field.LocationField, {
            fullWidth: true,
            classes: {
                container: classes.locationField
            },
            clearOnSelect: true,
            variant: 'flat',
            onLocationSelected: addPlace
        }),
        /*#__PURE__*/ _react.default.createElement(SortableTags, {
            lockToContainerEdges: true,
            axis: 'xy',
            helperClass: classes.sortableHelper,
            items: placesValues,
            onRemove: removePlace,
            distance: 15, // onSortStart={handleSortStart}
            onSortEnd: onMove,
            classes: classes
        })
    );
};

var LocationPlacesField = LocationPlacesFieldComponent;
exports.LocationPlacesField = LocationPlacesField;
