var { close, volume } = this.data;
plot('obv', obv({close, volume}), { strokeColor : inputColor('Color', 'green'), plotType: inputPlotType('Plot Type', AvailablePlotType.Line)} )

var meta = {
    overlay: false,
    name: 'Onbalance Volume (OBV)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};

export { meta };