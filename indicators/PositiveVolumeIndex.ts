var { close, volume } = this.data;
plot('pvi', pvi({close, volume}), { strokeColor : inputColor('Color', 'green'), plotType: inputPlotType('Plot Type', AvailablePlotType.Histogram)} )

var meta = {
    overlay: false,
    name: 'Positive Volume Index (PVI)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};

export { meta };