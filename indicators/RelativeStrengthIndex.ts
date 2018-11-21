var values = inputSource('RSI Source', 'close');
var period = inputNumber('RSI Period', 14);
var overBought = inputNumber('Over Bought', 70);
var overSold = inputNumber('Over Sold', 30); 
var bandOpacity = inputOpacity('Band Opacity', 0.1);
var bandColor = inputColor('Band Color', 'pink');

hfill('Range', overSold, overBought,  {
    opacity     : bandOpacity,
    lineWidth   : { value : 2},
    fillColor   : bandColor,
    strokeBorder: inputBoolean('Stroke Band', true),
    strokeColor : bandColor
})

var rsiValues = rsi({ values, period });

plot(`RSI`, rsiValues, {
    lineWidth   : { value : 1},
    strokeColor : inputColor('RSI Color'),
    plotType    : AvailablePlotType.Line,
    opacity     : 1
});

var meta = {
    overlay: false,
    name: 'Relative Strength Index',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [-20, 120],
    useFixedRange: false,
};
export { meta };