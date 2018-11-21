var  values = inputSource('Source', "close");
var short_period = inputNumber('Short Period', 10);
var long_period = inputNumber('Long Period', 20);
var ppoResults = ppo({short_period, long_period, values});
plot('ppo', ppoResults,  {  plotType : AvailablePlotType.Line, lineWidth : inputLineWidth('Line Width', 2),  strokeColor : inputColor('Color', '#ffcdd2') });

var meta = {
    overlay: false,
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Percentage Price Oscillator (PPO)'
};
export { meta };