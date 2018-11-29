var mainput = inputSource('Source', 'close');
var timeseriesperiod = inputNumber('Period', 50);
var timeseriescolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var timeseriesvalues = tsf({ period: timeseriesperiod, values: mainput });
plot('timeseries', timeseriesvalues, { strokeColor: timeseriescolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Time Series Forecast (TSF)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
