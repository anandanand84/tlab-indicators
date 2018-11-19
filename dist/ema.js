let { close } = this.data;
let period = inputNumber('Period', 14);
let strokeColor = inputColor('Color', '#64B5F6');
let atrValues = ema({ values: close, period });
plot('EMA', atrValues, { strokeColor });
var meta = {
    overlay: true,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Exponential Moving Average (EMA)'
};
export { meta };
