var { high, low, close, volume } = this.data;
var adResults = ad({ high, low, close, volume});
plot('ad', adResults,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#ffebee') });

var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Accumulation Distribution Line (AD)'
};
export { meta };