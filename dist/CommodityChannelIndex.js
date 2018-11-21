var { high, low, close } = this.data;
var period = inputNumber('Period', 14);
var results = cci({ high, low, close, period });
plot('CCI', results, { lineWidth: inputLineWidth('Line Width', 2), strokeColor: inputColor('Color', '#ef5350') });
var meta = {
    overlay: false,
    name: 'Commodity Channel Index (CCI)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
