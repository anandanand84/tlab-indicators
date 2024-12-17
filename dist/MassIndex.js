var { high, low } = this.data;
var period = inputNumber('Period', 10);
plot('Mass', mass({ high, low, period }), { strokeColor: inputColor('Color', '#f5f5f5'), lineWidth: inputLineWidth('LineWidth', 2) });
var meta = {
    overlay: false,
    name: 'Mass Index (MASS)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
