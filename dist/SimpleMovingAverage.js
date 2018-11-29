var mainput = inputSource('Source', 'close');
var smaperiod = inputNumber('Period', 50);
var smacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var smavalues = sma({ period: smaperiod, values: mainput });
plot('SMA', smavalues, { strokeColor: smacolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Simple Moving Average (SMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
