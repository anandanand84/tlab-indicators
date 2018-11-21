var  values = inputSource('Source', "close");
var short_period = inputNumber('Short Period', 10);
var long_period = inputNumber('Long Period', 20);
var apoResults = apo({short_period, long_period, values});
plot('apo', apoResults,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#ffcdd2') });

var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Absolute Price Oscillator (APO)'
};
export { meta };