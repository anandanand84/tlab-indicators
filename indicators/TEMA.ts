var emaList = [50, 100, 200]
var mainput = inputSource('Source', 'close');
var defaultColors = ['green','blue', 'red'];
emaList.forEach((period, index) => {
    let emaperiod = inputNumber('EMA Period '+index, period);
    let emacolor = inputColor('EMA Color '+period, defaultColors[index]);
    let lineWidth = inputLineWidth('Line Width '+period, 2);
    let smavalues = ema({ period: emaperiod, values: mainput });
    plot('EMA '+period, smavalues, { strokeColor : emacolor, lineWidth : lineWidth });    
})

var meta = {
    overlay: true,
    name: 'Triple EMA (50, 100, 200)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };