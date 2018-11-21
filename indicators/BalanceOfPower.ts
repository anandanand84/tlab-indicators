var { open, high, low, close } = this.data;
var results = bop({ open, high, low, close })
plot('bop', results, { strokeColor : inputColor('Color', '#e57373')});
var meta = {
    overlay: false,
    name: 'Balance of Power (BOP)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };