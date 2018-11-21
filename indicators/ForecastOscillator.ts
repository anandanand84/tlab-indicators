var  values = inputSource('Source', "close");
var period = inputNumber('Period', 14);
var foscResults = fosc({ period, values});

var strokeColor = foscResults.map((fosc, index)=> {
    return fosc > 0 ? inputColor('Up Color ', '#4A9D4A') : inputColor('Down Color ', '#9D4A4A');
})

plot('fosc', foscResults,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : strokeColor });

var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Forecast Oscillator (FOSC)'
};
export { meta };