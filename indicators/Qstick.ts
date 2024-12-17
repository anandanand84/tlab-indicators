var { open, close } = this.data;
var period = inputNumber('Period', 8);
var emaPeriod = inputNumber('EMA Period', 5);
var color = inputColor('Color', '#f44336')
var results = qstick({open, close, period});
plot('qstick', results, { strokeColor : color , plotType: AvailablePlotType.Histogram, lineWidth : inputLineWidth('LineWidth', 2)});
plot('ema', ema({ values : results, period: emaPeriod }), { strokeColor : inputColor('EMA Color') , lineWidth : inputLineWidth('EMA Line Width', 1) });
var meta = {
    overlay: false,
    name: 'Qstick (QSTICK)', 
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };