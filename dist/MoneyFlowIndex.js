var period = inputNumber('MFI Period', 14);
var overBought = inputNumber('Over Bought', 80);
var overSold = inputNumber('Over Sold', 20);
var bandOpacity = inputOpacity('Band Opacity', 0.1);
var bandColor = inputColor('Band Color');
hfill('Range', overSold, overBought, {
    opacity: bandOpacity,
    lineWidth: { value: 2 },
    fillColor: bandColor,
    strokeBorder: inputBoolean('Stroke Band', true),
    strokeColor: bandColor
});
var { high, low, close, volume } = this.data;
var mfiValues = mfi({ high, low, close, volume, period });
plot(`MFI`, mfiValues, {
    lineWidth: { value: 1 },
    strokeColor: inputColor('MFI Color'),
    plotType: AvailablePlotType.Line,
    opacity: 1
});
var meta = {
    overlay: false,
    name: 'Money Flow Index (MFI)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
