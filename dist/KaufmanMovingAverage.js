var mainput = inputSource('Source', 'close');
var kamaperiod = inputNumber('Period', 21);
var kamacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var kamavalues = kama({ period: kamaperiod, values: mainput });
plot('kama', kamavalues, { strokeColor: kamacolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Kaufman Adaptive Moving Avg (KAMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
