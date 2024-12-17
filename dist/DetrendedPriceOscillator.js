var values = inputSource('Source', "close");
var period = inputNumber('Period', 21);
var dpoResults = dpo({ period, values });
plot('dpo', dpoResults, { plotType: AvailablePlotType.Line, lineWidth: inputLineWidth('Line Width', 2), strokeColor: inputColor('Color', '#e1bee7') });
var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Detrended Price Oscillator (DPO)'
};
export { meta };
