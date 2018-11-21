let { high, low, close } = this.data;
let color = inputColor('Color', '#5C6BC0');
let short_period = inputNumber('Short Period', 7);
let medium_period = inputNumber('Medium Period', 14);
let long_period = inputNumber('Long Period', 28);
let results = ultosc({ high, low, close, short_period, long_period, medium_period })
plot('utlosc',  results, { strokeColor : color });

var meta = {
    overlay: false,
    name: 'Ultimate Oscillator',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };