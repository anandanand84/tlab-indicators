var mainput = inputSource('Source', 'close');
var emaperiod = inputNumber('Period', 9);
var emacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var emavalues = dema({ period: emaperiod, values: mainput });
plot('EMA', emavalues, { strokeColor: emacolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Double EMA (DEMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
