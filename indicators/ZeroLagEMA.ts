var mainput = inputSource('Source', 'close');
var zlemaperiod = inputNumber('Period', 50);
var zlemacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var zlemavalues = zlema({ period: zlemaperiod, values: mainput });
plot('zlema', zlemavalues, { strokeColor : zlemacolor, lineWidth : lineWidth });
var meta = {
    overlay: true,
    name: 'Zero Lag EMA (zlema)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
