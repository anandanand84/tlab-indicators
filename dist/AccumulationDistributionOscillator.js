var { high, low, close, volume } = this.data;
var short_period = inputNumber('Short Period', 2);
var long_period = inputNumber('Long Period', 5);
var adResults = adosc({ short_period, long_period, high, low, close, volume });
plot('adosc', adResults, { plotType: AvailablePlotType.Line, lineWidth: inputLineWidth('Line Width', 2), strokeColor: inputColor('Color', '#ffcdd2') });
var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Chaikin Oscillator CO(ADOSC)'
};
export { meta };
