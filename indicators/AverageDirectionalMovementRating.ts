var { high, low, close } = this.data;
var period = inputNumber('Period', 5);
var adxr_results = adxr({period, high, low, close});
plot('adx', adxr_results,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('LineWidth', 2),  strokeColor : inputColor('Color', '#ef9a9a') });
var meta = {
    overlay: false,
    useOwnScale: false,
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Average Directional Movement Rating (ADXR)'
};
export { meta };