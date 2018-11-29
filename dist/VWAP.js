let lineWidth = inputLineWidth('Line Width', 2);
let strokeColor = inputColor('Color', '#e57373');
let { open, high, low, close, volume } = this.data;
let plotvalues = vwap({ high, low, close, volume });
plot('vwap', plotvalues, { lineWidth, strokeColor });
var meta = {
    overlay: true,
    name: 'Volume Weighted Average Price (VWAP)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
