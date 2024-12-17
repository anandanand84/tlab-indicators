var mainput = inputSource('Source', 'close');
var wmaperiod = inputNumber('Period', 50);
var wmacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var wmavalues = wma({ period: wmaperiod, values: mainput });
plot('wma', wmavalues, { strokeColor : wmacolor, lineWidth : lineWidth });
var meta = {
    overlay: true,
    name: 'Weighted Moving Average (WMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
