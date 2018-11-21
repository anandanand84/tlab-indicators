let { high, low, close } = this.data;
let kstrokeColor = inputColor('%k color', '#64B5F6');
let dstrokeColor = inputColor('%d color', '#9575CD');
let kslow = inputNumber('%K slow Period', 3);
let k = inputNumber('%K Period', 14);
let d = inputNumber('%d Period', 3);
let stochasticValues = stoch({ high, low, close, "%k_slowing_period" : kslow, "%k_period" : k, "%d_period" : d })
plot('stoch %k',  stochasticValues.stoch_k , { strokeColor : kstrokeColor });
plot('stoch %d',  stochasticValues.stoch_d , { strokeColor : dstrokeColor });

var overBought = inputNumber('Upper Band', 80);
var overSold = inputNumber('Lower Band', 20); 

var bandColor = inputColor('Band Color', 'pink');

hfill('Range', overSold, overBought,  {
    opacity     : 0.2,
    lineWidth   : { value : 2},
    fillColor   : bandColor,
    strokeBorder: inputBoolean('Stroke Band', true),
    strokeColor : bandColor
})

var meta = {
    overlay: false,
    name: 'Stochastic Oscillator',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };