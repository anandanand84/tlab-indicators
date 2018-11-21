var { high, low } = this.data;
var period = inputNumber('Period', 14);
var color = inputColor('Color', '#f44336');
var results = cvi({ high, low, period });
plot('cvi', results, { strokeColor: color, lineWidth: inputLineWidth('LineWidth', 2) });
var meta = {
    overlay: false,
    name: 'Chaikins Volatility Index (CVI)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
