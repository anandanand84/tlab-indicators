var high = this.data.high;
var low = this.data.high;
var acceleration_factor_step = inputNumber('AF Step', 0.02);
var acceleration_factor_maximum = inputNumber('AF Max', 0.2);

var psar_values = psar({ high, low, acceleration_factor_maximum, acceleration_factor_step});

plot('psar_values', psar_values,  {  plotType : AvailablePlotType.Circle, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#f44336') });

var meta = {
    overlay: true,
    name: 'Parabolic SAR (PSAR)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };