var mainput = inputSource('Source', 'close');
var wildersperiod = inputNumber('Period', 50);
var wilderscolor = inputColor('Color', 'purple');
var lineWidth = inputLineWidth('Line Width', 2);
var wildersvalues = wilders({ period: wildersperiod, values: mainput });
plot('wilders', wildersvalues, { strokeColor : wilderscolor, lineWidth : lineWidth });
var meta = {
    overlay: true,
    name: 'Wilders Smoothing (WILDERS)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
