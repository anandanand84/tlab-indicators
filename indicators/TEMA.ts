var emaList = [8, 21, 200]
var mainput = inputSource('Source', 'close');
var defaultColors = ['rgb(76, 175, 80)','rgb(41, 98, 255)', 'rgb(255, 235, 59)'];
var defaultWidth = [1, 1.5, 2]
emaList.forEach((period, index) => {
    let emaperiod = inputNumber('EMA Period '+index, period);
    let emacolor = inputColor('EMA Color '+period, defaultColors[index]);
    let lineWidth = inputLineWidth('Line Width '+period, defaultWidth[index]);
    let smavalues = ema({ period: emaperiod, values: mainput });
    plot('EMA '+period, smavalues, { strokeColor : emacolor, lineWidth : lineWidth });    
})

var meta = {
    overlay: true,
    name: 'Triple EMA (TEMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };