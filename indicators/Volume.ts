var showAverageVolume = inputBoolean('Show Average Volume', true);
var volumeAveragePeriod = inputNumber('Average Period', 20);
var upColor = inputColor('Up Color', HelperUtil.readCssVar((document).body, '--theme-up-color'));
var downColor = inputColor('Down Color', HelperUtil.readCssVar(document.body, '--theme-down-color'));
let { open, close, volume } = this.data;
var strokeColor = Array.from(volume).map((_, index) => { return open[index] > close[index] ? downColor : upColor})
plot('Volume ', volume, { plotType : AvailablePlotType.Histogram, strokeColor, opacity: 0.3 })
if(showAverageVolume) {
    plot('Volume SMA', sma({values : volume, period: volumeAveragePeriod}), { plotType: AvailablePlotType.Area, opacity: .1})
}
var meta = {
    overlay: true,
    name: 'Volume (VOLUME)',
    useOwnScale: true,
    scaleRange: [0, 30],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };