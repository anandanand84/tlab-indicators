var { high, low, close, volume } = this.data;
var short_period = inputNumber('Short Period', 34);
var long_period = inputNumber('Long Period', 55);
var signalPeriod = inputNumber('Signal Period', 13);
var kvoResults = kvo({ short_period, long_period, high, low, close, volume});
var signal = ema( {values : kvoResults, period: signalPeriod} )
plot('kvo', kvoResults,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#ffebee') });
plot('signal', signal, {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Signal Color', 'green') })
var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Klinger Volume Oscillator (KVO)'
};
export { meta };