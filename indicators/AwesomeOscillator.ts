var { high, low } = this.data;

var gainingAbove = inputColor('Gainging Above Color', "#4A9D4A");
var losingAbove = inputColor('Losing Above Color', "#4AF94A");
var gainingBelow = inputColor('Gainging Below Color', "#F94A4A");
var losingBelow = inputColor('Losing Below Color', "#9D4A4A");

var aoResults = ao({high, low});

var aoColor = aoResults.map((val, index) => { 
    return val > 0 ? 
           (val > aoResults[index + 1] ? gainingAbove : losingAbove) : 
           (val > aoResults[index + 1] ? gainingBelow : losingBelow)
});

plot('Histogram', aoResults, {
    strokeColor : aoColor,
    plotType    : AvailablePlotType.Histogram,
    opacity     : inputOpacity('Histogram Opacity', 1),
})

var meta = {
    overlay: false,
    name: 'Awesome Oscillator (AO)',
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};

export { meta };
