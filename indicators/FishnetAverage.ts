
let { close } = this.data;
let fishNetPeriod = inputString('Fishnet', '5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200');

var periods = fishNetPeriod.split(',');

periods.forEach((period)=> {
    plot('period', sma({ values : close, period : parseInt(period)}), {strokeColor : inputColor('Color', '#C58EFF')})
});

var meta = {
    overlay: true,
    name: 'Fishnet Average (FA)',
    useOwnScale: false,
    scaleRange: [0, 0],
    fixedRange: [0, 0],
    useFixedRange: false,
};
export { meta };