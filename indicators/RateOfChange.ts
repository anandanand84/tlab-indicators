var values = inputSource('ROC Source', 'close');
var period = inputNumber('ROC Period', 14);

var rocValues = roc({ values, period });

plot(`roc`, rocValues, {
    lineWidth   : { value : 1},
    strokeColor : inputColor('ROC Color'),
    plotType    : AvailablePlotType.Line,
    opacity     : 1
});

var meta = {
    overlay: false,
    name: 'Rate of Change (ROC)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };