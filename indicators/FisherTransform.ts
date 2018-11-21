var { high, low } = this.data;
var period = inputNumber('Period', 9);
var result = fisher({period, high, low});

plot('fisher', result.fisher,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Fisher Color', '#ef9a9a') });
plot('fisher_signal', result.fisher_signal,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Signal Line Width', 2),  strokeColor : inputColor('Signal Color', 'green') });

var meta = {
    overlay: false,
    useOwnScale: false,
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Fisher Transform'
};

export { meta };