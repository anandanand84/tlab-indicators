var values = inputSource('Source', 'close');
var period = inputNumber('Period', 10);
var results = volatility({ values, period });
plot(`volatility`, results, {
    lineWidth: { value: 1 },
    strokeColor: inputColor('Color', '#448AFF'),
    plotType: AvailablePlotType.Line,
    opacity: 1
});
var meta = {
    overlay: false,
    name: 'Annual Volatility (AVOL)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
