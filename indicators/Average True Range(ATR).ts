let { high, low, close } = this.data;
let period = inputNumber('Period', 14);
let strokeColor = inputColor('Color', '#64B5F6')
let atrValues = atr({ high, low, close, period})
plot('ATR', atrValues, { strokeColor });
var meta = {
    overlay : false,
    useOwnScale : false,
    scaleRange : [0 , 0], 
    fixedRange : [0 , 0], 
    useFixedRange : false,
    name: 'Average True Range (ATR)'
}
export { meta }