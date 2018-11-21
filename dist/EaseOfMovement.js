var { high, low, volume } = this.data;
var emvResults = emv({ high, low, volume });
plot('emv', emvResults, { plotType: AvailablePlotType.Line, lineWidth: inputLineWidth('Line Width', 2), strokeColor: inputColor('Color', '#ffebee') });
var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Ease of movement (EOM)'
};
export { meta };
