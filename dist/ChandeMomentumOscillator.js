var values = inputSource('Source', "close");
var period = inputNumber('Period', 14);
var color = inputColor('Color', '#f44336');
var results = cmo({ values, period });
plot('cmo', results, { strokeColor: color, lineWidth: inputLineWidth('LineWidth', 2) });
var meta = {
    overlay: false,
    name: 'Chande Momentum Oscillator',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
