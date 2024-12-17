var mainput = inputSource('Source', 'close');
var short_period = inputNumber('Short Period', 2);
var long_period = inputNumber('Long Period', 5);
var alpha = inputNumber('Alpha', 0.2);
var vidyacolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var vidyavalues = vidya({ short_period, long_period, alpha: alpha, values: mainput });
plot('vidya', vidyavalues, { strokeColor: vidyacolor, lineWidth: lineWidth });
var meta = {
    overlay: true,
    name: 'Variable Index Dynamic Average (VIDYA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
