var values = inputSource('Source', 'close');
var period = inputNumber('Period', 18);

var results = trix({ values, period });

plot(`trix`, results, {
    lineWidth   : { value : 1},
    strokeColor : inputColor('Trix Color', '#5C6BC0'),
    plotType    : AvailablePlotType.Line,
    opacity     : 1
});

var meta = {
    overlay: false,
    name: 'TRIX (TRIX)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [-20, 120],
    useFixedRange: false,
};
export { meta };