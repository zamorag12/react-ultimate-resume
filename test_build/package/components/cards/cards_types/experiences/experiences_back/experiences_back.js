'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.ExperiencesBack = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _reactIntl = require('react-intl');

var _reactJss = require('react-jss');

var _profile_card_section = require('../../../../commons/profile_card/profile_card_section/profile_card_section');

var _profile_card_section_title = require('../../../../commons/profile_card/profile_card_section_title/profile_card_section_title');

var _profile_card_section_text = require('../../../../commons/profile_card/profile_card_section_text/profile_card_section_text');

var _profile_card_animated_back = require('../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back');

var _profile_card_section_subtitle = require('../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle');

var _experiences_back_styles = require('./experiences_back_styles');

var _experiences_translations = require('./experiences_translations');

var _use_additional_nodes = require('../../../../hooks/use_additional_nodes');

var _exists_and_not_empty = require('../../../utils/exists_and_not_empty');

var _no_work = require('./no_work/no_work');

var _use_customization = require('../../../../hooks/use_customization');

var useStyles = (0, _reactJss.createUseStyles)(_experiences_back_styles.styles);

var ExperienceContent = function ExperienceContent(_ref) {
    var _customization$fields3, _customization$fields4;

    var experience = _ref.experience,
        variant = _ref.variant,
        classes = _ref.classes;

    var _useIntl = (0, _reactIntl.useIntl)(),
        formatMessage = _useIntl.formatMessage;

    var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)(
            'cards.experiences.back.experience.content.buildTitle',
            null
        ),
        _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
        buildTitle = _useAdditionalNodes2[0];

    var _useCustomization = (0, _use_customization.useCustomization)(),
        _useCustomization2 = (0, _slicedToArray2.default)(_useCustomization, 1),
        customization = _useCustomization2[0];

    var id = experience.id,
        name = experience.name,
        summary = experience.summary,
        place = experience.place,
        position = experience.position;
    var dateString = (0, _react.useMemo)(
        function () {
            var _customization$fields, _customization$fields2;

            var displayFormat =
                (customization === null || customization === void 0
                    ? void 0
                    : (_customization$fields = customization.fields) === null || _customization$fields === void 0
                    ? void 0
                    : (_customization$fields2 = _customization$fields.work) === null ||
                      _customization$fields2 === void 0
                    ? void 0
                    : _customization$fields2.customDateFormat) || 'MMM YYYY';

            if (!experience.endDate) {
                if (!experience.startDate) {
                    return '';
                }

                return formatMessage(_experiences_translations.translations.since, {
                    year: experience.startDate.format(displayFormat)
                });
            }

            var startDate = experience.startDate.isValid() ? experience.startDate.format(displayFormat) : '';
            var endDate = experience.endDate.isValid() ? experience.endDate.format(displayFormat) : '';
            return ''.concat(startDate, ' - ').concat(endDate);
        },
        [
            experience,
            customization === null || customization === void 0
                ? void 0
                : (_customization$fields3 = customization.fields) === null || _customization$fields3 === void 0
                ? void 0
                : (_customization$fields4 = _customization$fields3.work) === null || _customization$fields4 === void 0
                ? void 0
                : _customization$fields4.customDateFormat
        ]
    );
    var title = (0, _react.useMemo)(
        function () {
            if (typeof buildTitle === 'function') {
                return buildTitle({
                    experience: experience
                });
            }

            var builder = [];

            if (name) {
                builder.push(name);
            }

            if (place === null || place === void 0 ? void 0 : place.name) {
                if (builder.length) {
                    builder.push(' - ');
                }

                builder.push(place.name);
            }

            if (builder.length) {
                builder.push(/*#__PURE__*/ _react.default.createElement('br', null));
            }

            builder.push(dateString);
            return builder.map(function (value, index) {
                return /*#__PURE__*/ _react.default.createElement(
                    _react.Fragment,
                    {
                        key: 'builder_part_'.concat(index)
                    },
                    value
                );
            });
        },
        [buildTitle, experience]
    );
    return /*#__PURE__*/ _react.default.createElement(
        _profile_card_section.ProfileCardSection,
        {
            key: id,
            cardVariant: variant
        },
        /*#__PURE__*/ _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, position),
        /*#__PURE__*/ _react.default.createElement(
            _profile_card_section_subtitle.ProfileCardSectionSubtitle,
            {
                customClasses: {
                    container: classes.subtitle
                }
            },
            title
        ),
        /*#__PURE__*/ _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, summary)
    );
};

var Content = function Content(_ref2) {
    var _data$work;

    var data = _ref2.data,
        handleAddButtonClick = _ref2.handleAddButtonClick,
        classes = _ref2.classes;
    var hasWork = (0, _react.useMemo)(
        function () {
            return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.work);
        },
        [data]
    );
    var experiences =
        (_data$work = data.work) === null || _data$work === void 0
            ? void 0
            : _data$work.filter(function (_ref3) {
                  var position = _ref3.position,
                      summary = _ref3.summary;
                  return Boolean(position && summary);
              });

    if (!hasWork) {
        return /*#__PURE__*/ _react.default.createElement(_no_work.NoWork, {
            handleAddButtonClick: handleAddButtonClick
        });
    }

    return experiences.map(function (experience) {
        return /*#__PURE__*/ _react.default.createElement(ExperienceContent, {
            key: 'work_experience_'.concat(experience.id),
            experience: experience,
            classes: classes
        });
    });
};

var ExperiencesBackComponent = function ExperiencesBackComponent(_ref4) {
    var data = _ref4.data,
        handleAddButtonClick = _ref4.handleAddButtonClick;
    var classes = useStyles();
    return /*#__PURE__*/ _react.default.createElement(
        _profile_card_animated_back.ProfileCardAnimatedBack,
        {
            title: 'Experiences'
        },
        /*#__PURE__*/ _react.default.createElement(Content, {
            data: data,
            handleAddButtonClick: handleAddButtonClick,
            classes: classes
        })
    );
};

var ExperiencesBack = (0, _react.memo)(ExperiencesBackComponent);
exports.ExperiencesBack = ExperiencesBack;
