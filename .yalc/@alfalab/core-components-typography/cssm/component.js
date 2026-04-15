'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var component = require('./text/component.js');
var index = require('./title/index.js');
var component$2 = require('./title-mobile/component.js');
var component$1 = require('./title-responsive/component.js');

var Typography = {
    Title: index.Title,
    Text: component.Text,
    TitleResponsive: component$1.TitleResponsive,
    TitleMobile: component$2.TitleMobile,
};

exports.Text = component.Text;
exports.TypographyText = component.Text;
exports.TitleDesktop = index.Title;
exports.TypographyTitle = index.Title;
exports.TitleMobile = component$2.TitleMobile;
exports.TypographyTitleMobile = component$2.TitleMobile;
exports.TitleResponsive = component$1.TitleResponsive;
exports.TypographyTitleResponsive = component$1.TitleResponsive;
exports.Typography = Typography;
//# sourceMappingURL=component.js.map
