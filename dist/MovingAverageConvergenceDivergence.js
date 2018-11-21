var plotSignalAndMacd = inputBoolean('Plot Signal and MACD', true);
var result = macd({
    values: inputSource('Source', 'close'),
    short_period: inputNumber('Fast Period', 10),
    long_period: inputNumber('Slow Period', 26),
    signal_period: inputNumber('Signal Period', 9),
});
var { macd_histogram, macd_signal } = result;
var MACD = result.macd;
var histogramColor = macd_histogram.map((val, index) => {
    return val > 0 ?
        (val > macd_histogram[index + 1] ? '#4A9D4A' : '#4AF94A') :
        (val > macd_histogram[index + 1] ? '#F94A4A' : '#9D4A4A');
});
plot('Histogram', macd_histogram, {
    strokeColor: histogramColor,
    plotType: AvailablePlotType.Histogram,
    opacity: inputOpacity('Histogram Opacity', 1),
});
if (plotSignalAndMacd) {
    plot('MACD', MACD, {
        lineWidth: inputLineWidth('Macd Size', 2),
        strokeColor: inputColor('MACD Color', '#FA6B49'),
        plotType: AvailablePlotType.Line,
        opacity: 1
    });
    plot('Signal', macd_signal, {
        lineWidth: inputLineWidth('Signal Size', 1),
        strokeColor: inputColor('Signal Color', '#569553'),
        plotType: AvailablePlotType.Line,
        opacity: 1
    });
}
var meta = {
    overlay: false,
    name: 'Moving Average Convergence Divergence (MACD)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
