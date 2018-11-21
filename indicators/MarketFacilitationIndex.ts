var { high, low, volume } = this.data;
plot('MarketFacilitationIndex', marketfi({high, low, volume}), { strokeColor : inputColor('Color', 'green'), plotType: inputPlotType('Plot Type', AvailablePlotType.Histogram)} )

var meta = {
    overlay: false,
    name: 'Market Facilitation Index',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };