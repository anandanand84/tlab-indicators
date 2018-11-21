var values = inputSource('VHF Source', 'close');
var period = inputNumber('VHF Period', 28);

var vhfValues = vhf({ values, period });

plot(`vhf`, vhfValues, {
    lineWidth   : { value : 1},
    strokeColor : inputColor('VHF Color', '#448AFF'),
    plotType    : AvailablePlotType.Line,
    opacity     : 1
});

var meta = {
    overlay: false,
    name: 'Vertical Horizontal Filter (VHF)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
