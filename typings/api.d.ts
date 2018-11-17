export interface PlotValues {
    timestamp : number,
    price : number,
    up? : boolean,
    path? : string
}

export interface InputNumberOptions {
  min : number,
  max : number,
  step : number
}

export interface LineWidth {
  value : number
}

export enum AvailablePlotType { 
 "Line" ,
 "LineWithBreak" ,
 "Histogram" ,
 "Cross" ,
 "Area" ,
 "Column" ,
 "Circle" ,
 "Marker",
 "Hline"
}

export enum AvailableFillType {
 "Fill",
 "Hfill",
 "FillBetween"
}

export class PlotStyle {
    lineWidth   : LineWidth
    strokeColor : string | string[]
    plotType    : AvailablePlotType
    opacity     : number
}

interface FillStyle {
    opacity     : number
    lineWidth   : LineWidth 
    fillColor   : string | string[]
    strokeBorder: boolean
    strokeColor : string | string[]
}

declare function inputBoolean(name: string, defaultValue: boolean): boolean;

declare function inputString(name: string, defaultValue: string): string;

declare function inputLineWidth(name: string, defaultValue: number): LineWidth;

declare function inputNumber(name: string, defaultValue: number, options?: InputNumberOptions): number;

declare function inputColor(name: string, defaultValue?: string): string;

declare function inputPlotType(name: string, defaultValue: AvailablePlotType);

declare function inputOpacity(name: string, defaultValue: number): number;

declare function inputList(name: string, defaultValue: string, choices?: string[]): string;

declare function inputSource(name: string, defaultValue: string): number[];

interface DrawingOptions {
    track: Boolean;
    useOwnScale: boolean;
    scaleRange: [number, number];
    useFixedRange: Boolean;
    fixedRange: [number, number];
    offset : number;
}

declare function plot(name: string, series: number[], styles?: PlotStyle, options?: DrawingOptions);

declare function fill(name: string, series1: number[], series2: number[], style?: FillStyle, options?: DrawingOptions);

declare function hline(name: string, location: number, styles?: PlotStyle, options?: DrawingOptions);

declare function hfill(name: string, number1: number, number2: number, style?: FillStyle, options?: DrawingOptions);

declare function fillBetween(name: string, series1: number[], series2: number[], style1?: FillStyle, style2?:FillStyle, options?: DrawingOptions);
