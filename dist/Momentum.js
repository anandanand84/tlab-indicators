var values = inputSource("Source", "close");
;
var period = inputNumber('Period', 10);
plot('mom', mom({ values, period }), { strokeColor: inputColor('Color', '#f5f5f5'), lineWidth: inputLineWidth('LineWidth', 2) });
var meta = {
    overlay: false,
    name: 'Momentum',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
