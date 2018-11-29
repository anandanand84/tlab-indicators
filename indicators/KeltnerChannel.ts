var { high, low, close } = this.data;
var useSMA  = inputBoolean('Use SMA', false);
var maPeriod = inputNumber('MA Period', 20);
var atrPeriod = inputNumber('ATR Period' , 10);
var multiplier = inputNumber('ATR Multiplier', 1);
var color = inputColor('Color ', '#42a5f5')
var opacity = inputOpacity ('Opacity', 0.2)

var kcOutput = keltnerchannels({ high, low, close, useSMA, maPeriod, atrPeriod, multiplier});

var middle = [];
var upper = [];
var lower = [];
kcOutput.forEach((data)=> {
    middle.push(data.middle);
    upper.push(data.upper);
    lower.push(data.lower);
})

plot('Base', middle, { strokeColor : color })
plot('Upper', upper, { strokeColor : color })
plot('Lower', lower, { strokeColor : color })

fill('Channel', upper, lower, { fillColor : color, opacity : opacity})

var meta = {
    overlay: true,
    name: 'Keltner Channels (KC)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };