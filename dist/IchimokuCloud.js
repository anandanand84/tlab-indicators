var { high, low, close } = this.data;
var conversionPeriod = inputNumber('Conversion Period', 9);
var basePeriod = inputNumber('Base Period', 26);
var spanPeriod = inputNumber('Span Period', 52);
var displacement = inputNumber('Displacement', 26);
var chickuSpanColor = inputColor('Chiku Span', 'grey');
var conversionLineColor = inputColor('Conversion Line', 'blue');
var baseLineColor = inputColor('Base Line', 'red');
var spanAColor = inputColor('SPAN A', this.styles.upColor);
var spanBColor = inputColor('SPAN B', this.styles.downColor);
var ichimokuResults = ichimokucloud({ conversionPeriod, basePeriod, spanPeriod, displacement, high, low });
var conversions = [];
var bases = [];
var spanAs = [];
var spanBs = [];
ichimokuResults.forEach((result, index) => {
    conversions.push(result.conversion);
    bases.push(result.base);
    spanAs.push(result.spanA);
    spanBs.push(result.spanB);
});
plot('ChikuSpan', close, { strokeColor: chickuSpanColor }, { offset: -displacement });
plot('ConversionLine', conversions, { strokeColor: conversionLineColor });
plot('BaseLine', bases, { strokeColor: baseLineColor });
plot('Leading Span A', spanAs, { strokeColor: spanAColor }, { offset: displacement });
plot('Leading Span B', spanBs, { strokeColor: spanBColor }, { offset: displacement });
var cloudFillColor = spanAs.map((mac, index) => {
    return spanAs[index] > spanBs[index] ? this.styles.upColor : this.styles.downColor;
});
fill('Cloud', spanAs, spanBs, { fillColor: cloudFillColor, opacity: 0.2 }, { offset: displacement });
var meta = {
    overlay: true,
    name: 'Ichimoku Cloud (IC)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };
