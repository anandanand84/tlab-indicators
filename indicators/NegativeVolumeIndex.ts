var { close, volume } = this.data;
plot('nvi', nvi({close, volume}), { strokeColor : inputColor('Color', 'green'), plotType: inputPlotType('Plot Type', AvailablePlotType.Histogram)} )

var meta = {
    overlay: false,
    name: 'Negative Volume Index (NVI)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};

export { meta };