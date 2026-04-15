'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getDefaultWeight(font, platform) {
    if (font === 'styrene' || font === 'alfasans') {
        return 'medium';
    }
    if (platform === 'desktop') {
        return 'bold';
    }
    return 'semibold';
}

exports.getDefaultWeight = getDefaultWeight;
//# sourceMappingURL=utils.js.map
