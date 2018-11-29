var values = inputSource('Value 1', 'high') 
var values1 = inputSource('Value 2', 'low') 

var med = medprice({ high : values, low : values1});

plot('med', med,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#f44336') });

var meta = {
    overlay: true,
    name: 'Median Price (MEDPRICE)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };