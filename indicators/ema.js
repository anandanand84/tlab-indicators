let { high, low, close } = this.data;
let strokeColor = inputColor('Color', '#64B5F6');
let atrValues = atr({ high, low, close, period });
plot('ATR', atrValues, { strokeColor });
