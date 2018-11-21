var { high, low, close } = this.data;
plot('tr', tr({high, low, close}), { strokeColor : inputColor('Color', '#42A5F5'), plotType: inputPlotType('Plot Type', AvailablePlotType.Line)} )

var meta = {
    overlay: false,
    name: 'True Range (TR)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};

export { meta };