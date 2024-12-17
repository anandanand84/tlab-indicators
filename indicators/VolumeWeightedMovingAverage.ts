var mainput = inputSource('Source', 'close');
var vwmaperiod = inputNumber('Period', 50);
var vwmacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var vwmavalues = vwma({ period: vwmaperiod, volume : this.data.volume, close : mainput });
plot('vwma', vwmavalues, { strokeColor : vwmacolor, lineWidth : lineWidth });
var meta = {
    overlay: true,
    name: 'Volume Weighted Moving Average (VWMA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
