var { high, low, close } = this.data;
var period = inputNumber('Period', 5);
var adx_results = adx({ period, high, low, close });
plot('adx', adx_results, { plotType: AvailablePlotType.Line, lineWidth: inputLineWidth('LineWidth', 2), strokeColor: inputColor('Color', '#ef9a9a') });
// if(inputBoolean('Plot DM', false)) {
//     var { plus_dm, minus_dm } = dm({ high, low, period});
//     var fillColor = plus_dm.map((pdm, index)=> {
//         return pdm > minus_dm[index] ? inputColor('Plus DM Color ', '#4A9D4A') : inputColor('Minus DM Color ', '#9D4A4A');
//     })
//     fill('dm', plus_dm, minus_dm, { fillColor , opacity : inputOpacity('Band Opacity', 0.3), strokeBorder : false })
// }
var meta = {
    overlay: false,
    useOwnScale: false,
    fixedRange: [0, 0],
    useFixedRange: false,
    name: 'Average Directional Index (ADX)'
};
export { meta };
