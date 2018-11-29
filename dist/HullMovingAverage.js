var mainput = inputSource('Source', 'close');
var hmaperiod = inputNumber('Period', 9);
var hmacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var hmavalues = hma({ period: hmaperiod, values: mainput });
plot('hma', hmavalues, { strokeColor: hmacolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Hull Moving Average (HMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
