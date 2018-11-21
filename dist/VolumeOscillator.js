var { volume } = this.data;
var short_period = inputNumber('Short Period', 5);
var long_period = inputNumber('Long Period', 10);
var voscResults = vosc({ short_period, long_period, volume });
plot('vosc', voscResults, { plotType: AvailablePlotType.Line, lineWidth: inputLineWidth('Line Width', 2), strokeColor: inputColor('Color', '#ffcdd2') });
var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Volume Oscillator (VO)'
};
export { meta };
