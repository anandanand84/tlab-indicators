var mainput = inputSource('Source', 'close');
var trimaperiod = inputNumber('Period', 50);
var trimacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var trimavalues = trima({ period: trimaperiod, values: mainput });
plot('trima', trimavalues, { strokeColor : trimacolor, lineWidth : lineWidth });
var meta = {
    overlay: true,
    name: 'Triangular Moving Average (trima)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
