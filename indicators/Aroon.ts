var { high, low } = this.data;
var period = inputNumber('Period', 14);
var { aroon_up, aroon_down } = aroon({ period, high, low });
plot('Arron Down', aroon_down,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),   strokeColor : inputColor('Down Color', '#9D4A4A') });
plot('Arron Up', aroon_up,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),   strokeColor : inputColor('Up Color', '#4A9D4A') });
var meta = {
    overlay: false,
    name: 'Aroon (AROON)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [-10, 110],
    useFixedRange: true,
};
export { meta };