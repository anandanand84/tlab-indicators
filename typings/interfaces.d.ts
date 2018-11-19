declare interface MetaInfo {
  internal? : boolean
  type? : string,
  overlay : boolean,
  useOwnScale? : boolean,
  scaleRange? : [number , number], 
  fixedRange? : [number , number], 
  useFixedRange? : boolean,
  name: string
}

declare interface PlotValues {
  timestamp: number,
  price: number,
  up?: boolean,
  path?: string
}

declare interface InputNumberOptions {
  min: number,
  max: number,
  step: number
}

declare interface LineWidth {
  value: number
}

declare enum AvailablePlotType {
  "Line",
  "LineWithBreak",
  "Histogram",
  "Cross",
  "Area",
  "Column",
  "Circle",
  "Marker",
  "Hline"
}

declare enum AvailableFillType {
  "Fill",
  "Hfill",
  "FillBetween"
}

declare interface PlotStyle {
  lineWidth?: LineWidth
  strokeColor?: string | string[]
  plotType?: AvailablePlotType
  opacity?: number
}

declare interface FillStyle {
  opacity?: number
  lineWidth?: LineWidth
  fillColor?: string | string[]
  strokeBorder?: boolean
  strokeColor?: string | string[]
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

declare interface DrawingOptions {
  track: Boolean;
  useOwnScale: boolean;
  scaleRange: [number, number];
  useFixedRange: Boolean;
  fixedRange: [number, number];
  offset: number;
}

declare function plot(name: string, series: number[], styles?: PlotStyle, options?: DrawingOptions);

declare function fill(name: string, series1: number[], series2: number[], style?: FillStyle, options?: DrawingOptions);

declare function hline(name: string, location: number, styles?: PlotStyle, options?: DrawingOptions);

declare function hfill(name: string, number1: number, number2: number, style?: FillStyle, options?: DrawingOptions);

declare function fillBetween(name: string, series1: number[], series2: number[], style1?: FillStyle, style2?: FillStyle, options?: DrawingOptions);

declare class ForceIndexInput extends IndicatorInput {
  close: number[];
  volume: number[];
  period: number;
}
declare class ForceIndex extends Indicator {
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: ForceIndexInput);
  static calculate: typeof forceindex;
  nextValue(price: CandleData): number | undefined;
}
declare function forceindex(input: ForceIndexInput): number[];
declare class EMA extends Indicator {
  period: number;
  price: number[];
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: MAInput);
  static calculate: typeof ema;
  nextValue(price: number): number;
}
declare function ema(input: MAInput): number[];
declare class IndicatorInput {
  reversedInput?: boolean;
  format?: (data: number) => number;
}
declare class AllInputs {
  values?: number[];
  open?: number[];
  high?: number[];
  low?: number[];
  close?: number[];
  volume?: number[];
  timestamp?: number[];
}
declare class Indicator {
  result: any;
  format: (data: number) => number;
  constructor(input: IndicatorInput);
  static reverseInputs(input: any): void;
  getResult(): any;
}
declare function format(v: number): number;
declare function setConfig(key: any, value: any): void;
declare function getConfig(key: any): any;
declare class MAInput extends IndicatorInput {
  period: number;
  values: number[];
  constructor(period: number, values: number[]);
}
declare class SMA extends Indicator {
  period: number;
  price: number[];
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: MAInput);
  static calculate: typeof sma;
  nextValue(price: number): number | undefined;
}
declare function sma(input: MAInput): number[];
declare class LinkedList {
  private _head;
  private _tail;
  private _next;
  private _length;
  private _current;
  constructor();
  readonly head: any;
  readonly tail: any;
  readonly current: any;
  readonly length: any;
  push(data: any): void;
  pop(): any;
  shift(): any;
  unshift(data: any): void;
  unshiftCurrent(): any;
  removeCurrent(): any;
  resetCursor(): this;
  next(): any;
}
declare class VWAPInput extends IndicatorInput {
  high: number[];
  low: number[];
  close: number[];
  volume: number[];
}
declare class VWAP extends Indicator {
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: VWAPInput);
  static calculate: typeof vwap;
  nextValue(price: CandleData): number | undefined;
}
declare function vwap(input: VWAPInput): number[];
declare class VolumeProfileInput extends IndicatorInput {
  high: number[];
  open: number[];
  low: number[];
  close: number[];
  volume: number[];
  noOfBars: number;
}
declare class VolumeProfileOutput {
  rangeStart: number;
  rangeEnd: number;
  bullishVolume: number;
  bearishVolume: number;
}
declare function priceFallsBetweenBarRange(low: any, high: any, low1: any, high1: any): boolean;
declare class VolumeProfile extends Indicator {
  generator: IterableIterator<number | undefined>;
  constructor(input: VolumeProfileInput);
  static calculate: typeof volumeprofile;
  nextValue(price: CandleData): number | undefined;
}
declare function volumeprofile(input: VolumeProfileInput): number[];
declare class AvgGainInput extends IndicatorInput {
  period: number;
  values: number[];
}
declare class AverageGain extends Indicator {
  generator: IterableIterator<number | undefined>;
  constructor(input: AvgGainInput);
  static calculate: typeof averagegain;
  nextValue(price: number): number | undefined;
}
declare function averagegain(input: AvgGainInput): number[];
declare class AvgLossInput extends IndicatorInput {
  values: number[];
  period: number;
}
declare class AverageLoss extends Indicator {
  generator: IterableIterator<number | undefined>;
  constructor(input: AvgLossInput);
  static calculate: typeof averageloss;
  nextValue(price: number): number | undefined;
}
declare function averageloss(input: AvgLossInput): number[];
/**
 * Created by AAravindan on 5/4/16.
 */
declare class RenkoInput extends IndicatorInput {
  period?: number;
  brickSize?: number;
  useATR?: boolean;
  low?: number[];
  open?: number[];
  volume?: number[];
  high?: number[];
  close?: number[];
  timestamp?: number[];
}
declare function renko(input: RenkoInput): CandleList;

declare class StockData {
  open: number[];
  high: number[];
  low: number[];
  close: number[];
  reversedInput?: boolean;
  constructor(open: number[], high: number[], low: number[], close: number[], reversedInput: boolean);
}

declare class CandleData {
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  timestamp?: number;
  volume?: number;
}
declare class CandleList {
  open?: number[];
  high?: number[];
  low?: number[];
  close?: number[];
  volume?: number[];
  timestamp?: number[];
}
declare class ATRInput extends IndicatorInput {
  low: number[];
  high: number[];
  close: number[];
  period: number;
}
declare class ATR extends Indicator {
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: ATRInput);
  static calculate: typeof atr;
  nextValue(price: number): number | undefined;
}
declare function atr(input: ATRInput): number[];
declare class WEMA extends Indicator {
  period: number;
  price: number[];
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: MAInput);
  static calculate: typeof wema;
  nextValue(price: number): number | undefined;
}
declare function wema(input: MAInput): number[];
declare class TrueRangeInput extends IndicatorInput {
  low: number[];
  high: number[];
  close: number[];
}
declare class TrueRange extends Indicator {
  result: number[];
  generator: IterableIterator<number | undefined>;
  constructor(input: TrueRangeInput);
  static calculate: typeof truerange;
  nextValue(price: CandleData): number | undefined;
}
declare function truerange(input: TrueRangeInput): number[];
/**
 * Created by AAravindan on 5/4/16.
 */
declare class HeikinAshiInput extends IndicatorInput {
  low?: number[];
  open?: number[];
  volume?: number[];
  high?: number[];
  close?: number[];
  timestamp?: number[];
}
declare class HeikinAshi extends Indicator {
  result: CandleList;
  generator: IterableIterator<CandleData | undefined>;
  constructor(input: HeikinAshiInput);
  static calculate: typeof heikinashi;
  nextValue(price: CandleData): CandleData | undefined;
}
declare function heikinashi(input: HeikinAshiInput): CandleList;
/**
 * Calcaultes the fibonacci retracements for given start and end points
 *
 * If calculating for up trend start should be low and end should be high and vice versa
 *
 * returns an array of retracements level containing [0 , 23.6, 38.2, 50, 61.8, 78.6, 100, 127.2, 161.8, 261.8, 423.6]
 *
 * @export
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
declare function fibonacciretracement(start: number, end: number): number[];
declare class IchimokuCloudInput extends IndicatorInput {
  high: number[];
  low: number[];
  conversionPeriod: number;
  basePeriod: number;
  spanPeriod: number;
  displacement: number;
}
declare class IchimokuCloudOutput {
  conversion: number;
  base: number;
  spanA: number;
  spanB: number;
}
declare class IchimokuCloud extends Indicator {
  result: IchimokuCloudOutput[];
  generator: IterableIterator<IchimokuCloudOutput | undefined>;
  constructor(input: IchimokuCloudInput);
  static calculate: typeof ichimokucloud;
  nextValue(price: CandleData): IchimokuCloudOutput;
}
declare function ichimokucloud(input: IchimokuCloudInput): IchimokuCloudOutput[];
/**
 * Created by AAravindan on 5/7/16.
 */
declare class FixedSizeLinkedList extends LinkedList {
  size: number;
  maintainHigh?: boolean;
  maintainLow?: boolean;
  maintainSum?: boolean;
  totalPushed: number;
  periodHigh: number;
  periodLow: number;
  periodSum: number;
  lastShift: number;
  _push: (data: number) => void;
  constructor(size: number, maintainHigh?: boolean, maintainLow?: boolean, maintainSum?: boolean);
  add(data: number): void;
  iterator(): IterableIterator<any>;
  calculatePeriodHigh(): void;
  calculatePeriodLow(): void;
}
declare class KeltnerChannelsInput extends IndicatorInput {
  maPeriod: number;
  atrPeriod: number;
  useSMA: boolean;
  multiplier: number;
  high: number[];
  low: number[];
  close: number[];
}
declare class KeltnerChannelsOutput extends IndicatorInput {
  middle: number;
  upper: number;
  lower: number;
}
declare class KeltnerChannels extends Indicator {
  result: KeltnerChannelsOutput[];
  generator: IterableIterator<KeltnerChannelsOutput | undefined>;
  constructor(input: KeltnerChannelsInput);
  static calculate: typeof keltnerchannels;
  nextValue(price: KeltnerChannelsInput): KeltnerChannelsOutput | undefined;
}
declare function keltnerchannels(input: KeltnerChannelsInput): KeltnerChannelsOutput[];
declare class ChandelierExitInput extends IndicatorInput {
  period: number;
  multiplier: number;
  high: number[];
  low: number[];
  close: number[];
}
declare class ChandelierExitOutput extends IndicatorInput {
  exitLong: number;
  exitShort: number;
}
declare class ChandelierExit extends Indicator {
  generator: IterableIterator<ChandelierExitOutput | undefined>;
  constructor(input: ChandelierExitInput);
  static calculate: typeof chandelierexit;
  nextValue(price: ChandelierExitInput): ChandelierExitOutput | undefined;
}
declare function chandelierexit(input: ChandelierExitInput): number[];



declare interface abs_input {
  "values": number[];
}

declare interface abs_output {
  abs: number[];
}

declare function abs(input: abs_input): number[];

declare interface acos_input {
  "values": number[];
}

declare interface acos_output {
  acos: number[];
}

declare function acos(input: acos_input): number[];

declare interface ad_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "volume": number[];
}

declare interface ad_output {
  ad: number[];
}

declare function ad(input: ad_input): number[];

declare interface add_input {
  "values": number[];
  "values2": number[];
}

declare interface add_output {
  add: number[];
}

declare function add(input: add_input): number[];

declare interface adosc_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "volume": number[];
  "short_period": number;
  "long_period": number;
}

declare interface adosc_output {
  adosc: number[];
}

declare function adosc(input: adosc_input): number[];

declare interface adx_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface adx_output {
  dx: number[];
}

declare function adx(input: adx_input): number[];

declare interface adxr_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface adxr_output {
  dx: number[];
}

declare function adxr(input: adxr_input): number[];

declare interface ao_input {
  "high": number[];
  "low": number[];
}

declare interface ao_output {
  ao: number[];
}

declare function ao(input: ao_input): number[];

declare interface apo_input {
  "values": number[];
  "short_period": number;
  "long_period": number;
}

declare interface apo_output {
  apo: number[];
}

declare function apo(input: apo_input): number[];

declare interface aroon_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface aroon_output {
  aroon_down: number[];
  aroon_up: number[];
}

declare function aroon(input: aroon_input): aroon_output;

declare interface aroonosc_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface aroonosc_output {
  aroonosc: number[];
}

declare function aroonosc(input: aroonosc_input): number[];

declare interface asin_input {
  "values": number[];
}

declare interface asin_output {
  asin: number[];
}

declare function asin(input: asin_input): number[];

declare interface atan_input {
  "values": number[];
}

declare interface atan_output {
  atan: number[];
}

declare function atan(input: atan_input): number[];

declare interface atr_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface atr_output {
  atr: number[];
}

declare function atr(input: atr_input): number[];

declare interface avgprice_input {
  "open": number[];
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface avgprice_output {
  avgprice: number[];
}

declare function avgprice(input: avgprice_input): number[];

declare interface bbands_input {
  "values": number[];
  "period": number;
  "stddev": number;
}

declare interface bbands_output {
  bbands_lower: number[];
  bbands_middle: number[];
  bbands_upper: number[];
}

declare function bbands(input: bbands_input): bbands_output;

declare interface bop_input {
  "open": number[];
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface bop_output {
  bop: number[];
}

declare function bop(input: bop_input): number[];

declare interface cci_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface cci_output {
  cci: number[];
}

declare function cci(input: cci_input): number[];

declare interface ceil_input {
  "values": number[];
}

declare interface ceil_output {
  ceil: number[];
}

declare function ceil(input: ceil_input): number[];

declare interface cmo_input {
  "values": number[];
  "period": number;
}

declare interface cmo_output {
  cmo: number[];
}

declare function cmo(input: cmo_input): number[];

declare interface cos_input {
  "values": number[];
}

declare interface cos_output {
  cos: number[];
}

declare function cos(input: cos_input): number[];

declare interface cosh_input {
  "values": number[];
}

declare interface cosh_output {
  cosh: number[];
}

declare function cosh(input: cosh_input): number[];

declare interface crossany_input {
  "values": number[];
  "values2": number[];
}

declare interface crossany_output {
  crossany: number[];
}

declare function crossany(input: crossany_input): number[];

declare interface crossover_input {
  "values": number[];
  "values2": number[];
}

declare interface crossover_output {
  crossover: number[];
}

declare function crossover(input: crossover_input): number[];

declare interface cvi_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface cvi_output {
  cvi: number[];
}

declare function cvi(input: cvi_input): number[];

declare interface decay_input {
  "values": number[];
  "period": number;
}

declare interface decay_output {
  decay: number[];
}

declare function decay(input: decay_input): number[];

declare interface dema_input {
  "values": number[];
  "period": number;
}

declare interface dema_output {
  dema: number[];
}

declare function dema(input: dema_input): number[];

declare interface di_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface di_output {
  plus_di: number[];
  minus_di: number[];
}

declare function di(input: di_input): di_output;

declare interface div_input {
  "values": number[];
  "values2": number[];
}

declare interface div_output {
  div: number[];
}

declare function div(input: div_input): number[];

declare interface dm_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface dm_output {
  plus_dm: number[];
  minus_dm: number[];
}

declare function dm(input: dm_input): dm_output;

declare interface dpo_input {
  "values": number[];
  "period": number;
}

declare interface dpo_output {
  dpo: number[];
}

declare function dpo(input: dpo_input): number[];

declare interface dx_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface dx_output {
  dx: number[];
}

declare function dx(input: dx_input): number[];

declare interface edecay_input {
  "values": number[];
  "period": number;
}

declare interface edecay_output {
  edecay: number[];
}

declare function edecay(input: edecay_input): number[];

declare interface ema_input {
  "values": number[];
  "period": number;
}

declare interface ema_output {
  ema: number[];
}

declare function ema(input: ema_input): number[];

declare interface emv_input {
  "high": number[];
  "low": number[];
  "volume": number[];
}

declare interface emv_output {
  emv: number[];
}

declare function emv(input: emv_input): number[];

declare interface exp_input {
  "values": number[];
}

declare interface exp_output {
  exp: number[];
}

declare function exp(input: exp_input): number[];

declare interface fisher_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface fisher_output {
  fisher: number[];
  fisher_signal: number[];
}

declare function fisher(input: fisher_input): fisher_output;

declare interface floor_input {
  "values": number[];
}

declare interface floor_output {
  floor: number[];
}

declare function floor(input: floor_input): number[];

declare interface fosc_input {
  "values": number[];
  "period": number;
}

declare interface fosc_output {
  fosc: number[];
}

declare function fosc(input: fosc_input): number[];

declare interface hma_input {
  "values": number[];
  "period": number;
}

declare interface hma_output {
  hma: number[];
}

declare function hma(input: hma_input): number[];

declare interface kama_input {
  "values": number[];
  "period": number;
}

declare interface kama_output {
  kama: number[];
}

declare function kama(input: kama_input): number[];

declare interface kvo_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "volume": number[];
  "short_period": number;
  "long_period": number;
}

declare interface kvo_output {
  kvo: number[];
}

declare function kvo(input: kvo_input): number[];

declare interface lag_input {
  "values": number[];
  "period": number;
}

declare interface lag_output {
  lag: number[];
}

declare function lag(input: lag_input): number[];

declare interface linreg_input {
  "values": number[];
  "period": number;
}

declare interface linreg_output {
  linreg: number[];
}

declare function linreg(input: linreg_input): number[];

declare interface linregintercept_input {
  "values": number[];
  "period": number;
}

declare interface linregintercept_output {
  linregintercept: number[];
}

declare function linregintercept(input: linregintercept_input): number[];

declare interface linregslope_input {
  "values": number[];
  "period": number;
}

declare interface linregslope_output {
  linregslope: number[];
}

declare function linregslope(input: linregslope_input): number[];

declare interface ln_input {
  "values": number[];
}

declare interface ln_output {
  ln: number[];
}

declare function ln(input: ln_input): number[];

declare interface log10_input {
  "values": number[];
}

declare interface log10_output {
  log10: number[];
}

declare function log10(input: log10_input): number[];

declare interface macd_input {
  "values": number[];
  "short_period": number;
  "long_period": number;
  "signal_period": number;
}

declare interface macd_output {
  macd: number[];
  macd_signal: number[];
  macd_histogram: number[];
}

declare function macd(input: macd_input): macd_output;

declare interface marketfi_input {
  "high": number[];
  "low": number[];
  "volume": number[];
}

declare interface marketfi_output {
  marketfi: number[];
}

declare function marketfi(input: marketfi_input): number[];

declare interface mass_input {
  "high": number[];
  "low": number[];
  "period": number;
}

declare interface mass_output {
  mass: number[];
}

declare function mass(input: mass_input): number[];

declare interface max_input {
  "values": number[];
  "period": number;
}

declare interface max_output {
  max: number[];
}

declare function max(input: max_input): number[];

declare interface md_input {
  "values": number[];
  "period": number;
}

declare interface md_output {
  md: number[];
}

declare function md(input: md_input): number[];

declare interface medprice_input {
  "high": number[];
  "low": number[];
}

declare interface medprice_output {
  medprice: number[];
}

declare function medprice(input: medprice_input): number[];

declare interface mfi_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "volume": number[];
  "period": number;
}

declare interface mfi_output {
  mfi: number[];
}

declare function mfi(input: mfi_input): number[];

declare interface min_input {
  "values": number[];
  "period": number;
}

declare interface min_output {
  min: number[];
}

declare function min(input: min_input): number[];

declare interface mom_input {
  "values": number[];
  "period": number;
}

declare interface mom_output {
  mom: number[];
}

declare function mom(input: mom_input): number[];

declare interface msw_input {
  "values": number[];
  "period": number;
}

declare interface msw_output {
  msw_sine: number[];
  msw_lead: number[];
}

declare function msw(input: msw_input): msw_output;

declare interface mul_input {
  "values": number[];
  "values2": number[];
}

declare interface mul_output {
  mul: number[];
}

declare function mul(input: mul_input): number[];

declare interface natr_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface natr_output {
  natr: number[];
}

declare function natr(input: natr_input): number[];

declare interface nvi_input {
  "close": number[];
  "volume": number[];
}

declare interface nvi_output {
  nvi: number[];
}

declare function nvi(input: nvi_input): number[];

declare interface obv_input {
  "close": number[];
  "volume": number[];
}

declare interface obv_output {
  obv: number[];
}

declare function obv(input: obv_input): number[];

declare interface ppo_input {
  "values": number[];
  "short_period": number;
  "long_period": number;
}

declare interface ppo_output {
  ppo: number[];
}

declare function ppo(input: ppo_input): number[];

declare interface psar_input {
  "high": number[];
  "low": number[];
  "acceleration_factor_step": number;
  "acceleration_factor_maximum": number;
}

declare interface psar_output {
  psar: number[];
}

declare function psar(input: psar_input): number[];

declare interface pvi_input {
  "close": number[];
  "volume": number[];
}

declare interface pvi_output {
  pvi: number[];
}

declare function pvi(input: pvi_input): number[];

declare interface qstick_input {
  "open": number[];
  "close": number[];
  "period": number;
}

declare interface qstick_output {
  qstick: number[];
}

declare function qstick(input: qstick_input): number[];

declare interface roc_input {
  "values": number[];
  "period": number;
}

declare interface roc_output {
  roc: number[];
}

declare function roc(input: roc_input): number[];

declare interface rocr_input {
  "values": number[];
  "period": number;
}

declare interface rocr_output {
  rocr: number[];
}

declare function rocr(input: rocr_input): number[];

declare interface round_input {
  "values": number[];
}

declare interface round_output {
  round: number[];
}

declare function round(input: round_input): number[];

declare interface rsi_input {
  "values": number[];
  "period": number;
}

declare interface rsi_output {
  rsi: number[];
}

declare function rsi(input: rsi_input): number[];

declare interface sin_input {
  "values": number[];
}

declare interface sin_output {
  sin: number[];
}

declare function sin(input: sin_input): number[];

declare interface sinh_input {
  "values": number[];
}

declare interface sinh_output {
  sinh: number[];
}

declare function sinh(input: sinh_input): number[];

declare interface sma_input {
  "values": number[];
  "period": number;
}

declare interface sma_output {
  sma: number[];
}

declare function sma(input: sma_input): number[];

declare interface sqrt_input {
  "values": number[];
}

declare interface sqrt_output {
  sqrt: number[];
}

declare function sqrt(input: sqrt_input): number[];

declare interface stddev_input {
  "values": number[];
  "period": number;
}

declare interface stddev_output {
  stddev: number[];
}

declare function stddev(input: stddev_input): number[];

declare interface stderr_input {
  "values": number[];
  "period": number;
}

declare interface stderr_output {
  stderr: number[];
}

declare function stderr(input: stderr_input): number[];

declare interface stoch_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "%k_period": number;
  "%k_slowing_period": number;
  "%d_period": number;
}

declare interface stoch_output {
  stoch_k: number[];
  stoch_d: number[];
}

declare function stoch(input: stoch_input): stoch_output;

declare interface stochrsi_input {
  "values": number[];
  "period": number;
}

declare interface stochrsi_output {
  stochrsi: number[];
}

declare function stochrsi(input: stochrsi_input): number[];

declare interface sub_input {
  "values": number[];
  "values2": number[];
}

declare interface sub_output {
  sub: number[];
}

declare function sub(input: sub_input): number[];

declare interface sum_input {
  "values": number[];
  "period": number;
}

declare interface sum_output {
  sum: number[];
}

declare function sum(input: sum_input): number[];

declare interface tan_input {
  "values": number[];
}

declare interface tan_output {
  tan: number[];
}

declare function tan(input: tan_input): number[];

declare interface tanh_input {
  "values": number[];
}

declare interface tanh_output {
  tanh: number[];
}

declare function tanh(input: tanh_input): number[];

declare interface tema_input {
  "values": number[];
  "period": number;
}

declare interface tema_output {
  tema: number[];
}

declare function tema(input: tema_input): number[];

declare interface todeg_input {
  "values": number[];
}

declare interface todeg_output {
  degrees: number[];
}

declare function todeg(input: todeg_input): number[];

declare interface torad_input {
  "values": number[];
}

declare interface torad_output {
  radians: number[];
}

declare function torad(input: torad_input): number[];

declare interface tr_input {
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface tr_output {
  tr: number[];
}

declare function tr(input: tr_input): number[];

declare interface trima_input {
  "values": number[];
  "period": number;
}

declare interface trima_output {
  trima: number[];
}

declare function trima(input: trima_input): number[];

declare interface trix_input {
  "values": number[];
  "period": number;
}

declare interface trix_output {
  trix: number[];
}

declare function trix(input: trix_input): number[];

declare interface trunc_input {
  "values": number[];
}

declare interface trunc_output {
  trunc: number[];
}

declare function trunc(input: trunc_input): number[];

declare interface tsf_input {
  "values": number[];
  "period": number;
}

declare interface tsf_output {
  tsf: number[];
}

declare function tsf(input: tsf_input): number[];

declare interface typprice_input {
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface typprice_output {
  typprice: number[];
}

declare function typprice(input: typprice_input): number[];

declare interface ultosc_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "short_period": number;
  "medium_period": number;
  "long_period": number;
}

declare interface ultosc_output {
  ultosc: number[];
}

declare function ultosc(input: ultosc_input): number[];

declare interface var_input {
  "values": number[];
  "period": number;
}

declare interface var_output {
  var: number[];
}

declare function variance(input: var_input): number[];

declare interface vhf_input {
  "values": number[];
  "period": number;
}

declare interface vhf_output {
  vhf: number[];
}

declare function vhf(input: vhf_input): number[];

declare interface vidya_input {
  "values": number[];
  "short_period": number;
  "long_period": number;
  "alpha": number;
}

declare interface vidya_output {
  vidya: number[];
}

declare function vidya(input: vidya_input): number[];

declare interface volatility_input {
  "values": number[];
  "period": number;
}

declare interface volatility_output {
  volatility: number[];
}

declare function volatility(input: volatility_input): number[];

declare interface vosc_input {
  "volume": number[];
  "short_period": number;
  "long_period": number;
}

declare interface vosc_output {
  vosc: number[];
}

declare function vosc(input: vosc_input): number[];

declare interface vwma_input {
  "close": number[];
  "volume": number[];
  "period": number;
}

declare interface vwma_output {
  vwma: number[];
}

declare function vwma(input: vwma_input): number[];

declare interface wad_input {
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface wad_output {
  wad: number[];
}

declare function wad(input: wad_input): number[];

declare interface wcprice_input {
  "high": number[];
  "low": number[];
  "close": number[];
}

declare interface wcprice_output {
  wcprice: number[];
}

declare function wcprice(input: wcprice_input): number[];

declare interface wilders_input {
  "values": number[];
  "period": number;
}

declare interface wilders_output {
  wilders: number[];
}

declare function wilders(input: wilders_input): number[];

declare interface willr_input {
  "high": number[];
  "low": number[];
  "close": number[];
  "period": number;
}

declare interface willr_output {
  willr: number[];
}

declare function willr(input: willr_input): number[];

declare interface wma_input {
  "values": number[];
  "period": number;
}

declare interface wma_output {
  wma: number[];
}

declare function wma(input: wma_input): number[];

declare interface zlema_input {
  "values": number[];
  "period": number;
}

declare interface zlema_output {
  zlema: number[];
}

declare function zlema(input: zlema_input): number[];
