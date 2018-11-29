var mainput = inputSource('Source', 'close');
var linregperiod = inputNumber('Period', 50);
var linregcolor = inputColor('Color', '#e57373');
var lineWidth = inputLineWidth('Line Width', 2);
var linregvalues = linreg({ period: linregperiod, values: mainput });
plot('linreg', linregvalues, { strokeColor: linregcolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Linear Regression (linreg)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
