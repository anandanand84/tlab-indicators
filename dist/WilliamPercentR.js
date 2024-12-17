var { high, low, close } = this.data;
var period = inputNumber('Period', 14);
;
plot('willr', willr({ high, low, close, period }), { strokeColor: inputColor('Color', '#42A5F5'), plotType: inputPlotType('Plot Type', AvailablePlotType.Line) });
var meta = {
    overlay: false,
    name: 'William PercentR (WILLR)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
