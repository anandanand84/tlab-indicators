var { high, low, close } = this.data;
plot('wad', wad({ high, low, close }), { strokeColor: inputColor('Color', '#42A5F5'), plotType: inputPlotType('Plot Type', AvailablePlotType.Line) });
var meta = {
    overlay: false,
    name: 'William Accumulation Distribution (WAD)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
