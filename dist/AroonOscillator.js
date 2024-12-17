var { high, low } = this.data;
var period = inputNumber('Period', 14);
var results = aroonosc({ period, high, low });
var fillColor = results.map((val) => {
    return val > 0 ? inputColor('Up Color', '#4A9D4A') : inputColor('Down Color', '#9D4A4A');
});
fill('aroonosc', results, results.map(r => 0), { fillColor, lineWidth: inputLineWidth('LineWidth', 2), strokeBorder: true });
var meta = {
    overlay: false,
    name: 'Aroon Oscillator (AROONOSC)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [-110, 110],
    useFixedRange: true,
};
export { meta };
