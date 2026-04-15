function getDefaultWeight(font, platform) {
    if (font === 'styrene' || font === 'alfasans') {
        return 'medium';
    }
    if (platform === 'desktop') {
        return 'bold';
    }
    return 'semibold';
}

export { getDefaultWeight };
//# sourceMappingURL=utils.js.map
