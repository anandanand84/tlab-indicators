var input = {
    period: inputNumber('Period', 14),
    values: inputSource('Source', 'close'),
    stddev: inputNumber('Standard Deviation', 2)
};
let { bbands_lower, bbands_middle, bbands_upper } = bbands(input);
plot('ma', bbands_middle);
let fillStyle = {
    opacity: inputOpacity('Band Opacity', 0.1),
    lineWidth: inputLineWidth('Line Width', 1),
    fillColor: inputColor('Fill Color', '#fff9c4'),
    strokeBorder: inputBoolean('Stroke Border', true),
    strokeColor: inputColor('Stroke Color', 'red')
};
fill('bands', bbands_upper, bbands_lower, fillStyle);
var meta = {
    overlay: true,
    name: 'Bollinger Bands (BB)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
