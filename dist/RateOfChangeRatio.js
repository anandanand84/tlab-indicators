var values = inputSource('Source', 'close');
var period = inputNumber('Period', 14);
var rocrValues = rocr({ values, period });
plot(`rocr`, rocrValues, {
    lineWidth: { value: 1 },
    strokeColor: inputColor('Color'),
    plotType: AvailablePlotType.Line,
    opacity: 1
});
var meta = {
    overlay: false,
    name: 'Rate of Change Ratio(ROCR)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
