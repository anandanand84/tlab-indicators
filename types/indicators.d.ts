interface abs_input {
  "values":number[];
}

interface abs_output {
  abs:number[];
}

declare function abs (input: abs_input) : number[]; 

interface acos_input {
  "values":number[];
}

interface acos_output {
  acos:number[];
}

declare function acos (input: acos_input) : number[]; 

interface ad_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "volume":number[];
}

interface ad_output {
  ad:number[];
}

declare function ad (input: ad_input) : number[]; 

interface add_input {
  "values":number[];
  "values2":number[];
}

interface add_output {
  add:number[];
}

declare function add (input: add_input) : number[]; 

interface adosc_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "volume":number[];
  "short_period":number;
  "long_period":number;
}

interface adosc_output {
  adosc:number[];
}

declare function adosc (input: adosc_input) : number[]; 

interface adx_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface adx_output {
  dx:number[];
}

declare function adx (input: adx_input) : number[]; 

interface adxr_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface adxr_output {
  dx:number[];
}

declare function adxr (input: adxr_input) : number[]; 

interface ao_input {
  "high":number[];
  "low":number[];
}

interface ao_output {
  ao:number[];
}

declare function ao (input: ao_input) : number[]; 

interface apo_input {
  "values":number[];
  "short_period":number;
  "long_period":number;
}

interface apo_output {
  apo:number[];
}

declare function apo (input: apo_input) : number[]; 

interface aroon_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface aroon_output {
  aroon_down:number[];
  aroon_up:number[];
}

declare function aroon (input: aroon_input) : aroon_output; 

interface aroonosc_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface aroonosc_output {
  aroonosc:number[];
}

declare function aroonosc (input: aroonosc_input) : number[]; 

interface asin_input {
  "values":number[];
}

interface asin_output {
  asin:number[];
}

declare function asin (input: asin_input) : number[]; 

interface atan_input {
  "values":number[];
}

interface atan_output {
  atan:number[];
}

declare function atan (input: atan_input) : number[]; 

interface atr_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface atr_output {
  atr:number[];
}

declare function atr (input: atr_input) : number[]; 

interface avgprice_input {
  "open":number[];
  "high":number[];
  "low":number[];
  "close":number[];
}

interface avgprice_output {
  avgprice:number[];
}

declare function avgprice (input: avgprice_input) : number[]; 

interface bbands_input {
  "values":number[];
  "period":number;
  "stddev":number;
}

interface bbands_output {
  bbands_lower:number[];
  bbands_middle:number[];
  bbands_upper:number[];
}

declare function bbands (input: bbands_input) : bbands_output; 

interface bop_input {
  "open":number[];
  "high":number[];
  "low":number[];
  "close":number[];
}

interface bop_output {
  bop:number[];
}

declare function bop (input: bop_input) : number[]; 

interface cci_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface cci_output {
  cci:number[];
}

declare function cci (input: cci_input) : number[]; 

interface ceil_input {
  "values":number[];
}

interface ceil_output {
  ceil:number[];
}

declare function ceil (input: ceil_input) : number[]; 

interface cmo_input {
  "values":number[];
  "period":number;
}

interface cmo_output {
  cmo:number[];
}

declare function cmo (input: cmo_input) : number[]; 

interface cos_input {
  "values":number[];
}

interface cos_output {
  cos:number[];
}

declare function cos (input: cos_input) : number[]; 

interface cosh_input {
  "values":number[];
}

interface cosh_output {
  cosh:number[];
}

declare function cosh (input: cosh_input) : number[]; 

interface crossany_input {
  "values":number[];
  "values2":number[];
}

interface crossany_output {
  crossany:number[];
}

declare function crossany (input: crossany_input) : number[]; 

interface crossover_input {
  "values":number[];
  "values2":number[];
}

interface crossover_output {
  crossover:number[];
}

declare function crossover (input: crossover_input) : number[]; 

interface cvi_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface cvi_output {
  cvi:number[];
}

declare function cvi (input: cvi_input) : number[]; 

interface decay_input {
  "values":number[];
  "period":number;
}

interface decay_output {
  decay:number[];
}

declare function decay (input: decay_input) : number[]; 

interface dema_input {
  "values":number[];
  "period":number;
}

interface dema_output {
  dema:number[];
}

declare function dema (input: dema_input) : number[]; 

interface di_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface di_output {
  plus_di:number[];
  minus_di:number[];
}

declare function di (input: di_input) : di_output; 

interface div_input {
  "values":number[];
  "values2":number[];
}

interface div_output {
  div:number[];
}

declare function div (input: div_input) : number[]; 

interface dm_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface dm_output {
  plus_dm:number[];
  minus_dm:number[];
}

declare function dm (input: dm_input) : dm_output; 

interface dpo_input {
  "values":number[];
  "period":number;
}

interface dpo_output {
  dpo:number[];
}

declare function dpo (input: dpo_input) : number[]; 

interface dx_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface dx_output {
  dx:number[];
}

declare function dx (input: dx_input) : number[]; 

interface edecay_input {
  "values":number[];
  "period":number;
}

interface edecay_output {
  edecay:number[];
}

declare function edecay (input: edecay_input) : number[]; 

interface ema_input {
  "values":number[];
  "period":number;
}

interface ema_output {
  ema:number[];
}

declare function ema (input: ema_input) : number[]; 

interface emv_input {
  "high":number[];
  "low":number[];
  "volume":number[];
}

interface emv_output {
  emv:number[];
}

declare function emv (input: emv_input) : number[]; 

interface exp_input {
  "values":number[];
}

interface exp_output {
  exp:number[];
}

declare function exp (input: exp_input) : number[]; 

interface fisher_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface fisher_output {
  fisher:number[];
  fisher_signal:number[];
}

declare function fisher (input: fisher_input) : fisher_output; 

interface floor_input {
  "values":number[];
}

interface floor_output {
  floor:number[];
}

declare function floor (input: floor_input) : number[]; 

interface fosc_input {
  "values":number[];
  "period":number;
}

interface fosc_output {
  fosc:number[];
}

declare function fosc (input: fosc_input) : number[]; 

interface hma_input {
  "values":number[];
  "period":number;
}

interface hma_output {
  hma:number[];
}

declare function hma (input: hma_input) : number[]; 

interface kama_input {
  "values":number[];
  "period":number;
}

interface kama_output {
  kama:number[];
}

declare function kama (input: kama_input) : number[]; 

interface kvo_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "volume":number[];
  "short_period":number;
  "long_period":number;
}

interface kvo_output {
  kvo:number[];
}

declare function kvo (input: kvo_input) : number[]; 

interface lag_input {
  "values":number[];
  "period":number;
}

interface lag_output {
  lag:number[];
}

declare function lag (input: lag_input) : number[]; 

interface linreg_input {
  "values":number[];
  "period":number;
}

interface linreg_output {
  linreg:number[];
}

declare function linreg (input: linreg_input) : number[]; 

interface linregintercept_input {
  "values":number[];
  "period":number;
}

interface linregintercept_output {
  linregintercept:number[];
}

declare function linregintercept (input: linregintercept_input) : number[]; 

interface linregslope_input {
  "values":number[];
  "period":number;
}

interface linregslope_output {
  linregslope:number[];
}

declare function linregslope (input: linregslope_input) : number[]; 

interface ln_input {
  "values":number[];
}

interface ln_output {
  ln:number[];
}

declare function ln (input: ln_input) : number[]; 

interface log10_input {
  "values":number[];
}

interface log10_output {
  log10:number[];
}

declare function log10 (input: log10_input) : number[]; 

interface macd_input {
  "values":number[];
  "short_period":number;
  "long_period":number;
  "signal_period":number;
}

interface macd_output {
  macd:number[];
  macd_signal:number[];
  macd_histogram:number[];
}

declare function macd (input: macd_input) : macd_output; 

interface marketfi_input {
  "high":number[];
  "low":number[];
  "volume":number[];
}

interface marketfi_output {
  marketfi:number[];
}

declare function marketfi (input: marketfi_input) : number[]; 

interface mass_input {
  "high":number[];
  "low":number[];
  "period":number;
}

interface mass_output {
  mass:number[];
}

declare function mass (input: mass_input) : number[]; 

interface max_input {
  "values":number[];
  "period":number;
}

interface max_output {
  max:number[];
}

declare function max (input: max_input) : number[]; 

interface md_input {
  "values":number[];
  "period":number;
}

interface md_output {
  md:number[];
}

declare function md (input: md_input) : number[]; 

interface medprice_input {
  "high":number[];
  "low":number[];
}

interface medprice_output {
  medprice:number[];
}

declare function medprice (input: medprice_input) : number[]; 

interface mfi_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "volume":number[];
  "period":number;
}

interface mfi_output {
  mfi:number[];
}

declare function mfi (input: mfi_input) : number[]; 

interface min_input {
  "values":number[];
  "period":number;
}

interface min_output {
  min:number[];
}

declare function min (input: min_input) : number[]; 

interface mom_input {
  "values":number[];
  "period":number;
}

interface mom_output {
  mom:number[];
}

declare function mom (input: mom_input) : number[]; 

interface msw_input {
  "values":number[];
  "period":number;
}

interface msw_output {
  msw_sine:number[];
  msw_lead:number[];
}

declare function msw (input: msw_input) : msw_output; 

interface mul_input {
  "values":number[];
  "values2":number[];
}

interface mul_output {
  mul:number[];
}

declare function mul (input: mul_input) : number[]; 

interface natr_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface natr_output {
  natr:number[];
}

declare function natr (input: natr_input) : number[]; 

interface nvi_input {
  "close":number[];
  "volume":number[];
}

interface nvi_output {
  nvi:number[];
}

declare function nvi (input: nvi_input) : number[]; 

interface obv_input {
  "close":number[];
  "volume":number[];
}

interface obv_output {
  obv:number[];
}

declare function obv (input: obv_input) : number[]; 

interface ppo_input {
  "values":number[];
  "short_period":number;
  "long_period":number;
}

interface ppo_output {
  ppo:number[];
}

declare function ppo (input: ppo_input) : number[]; 

interface psar_input {
  "high":number[];
  "low":number[];
  "acceleration_factor_step":number;
  "acceleration_factor_maximum":number;
}

interface psar_output {
  psar:number[];
}

declare function psar (input: psar_input) : number[]; 

interface pvi_input {
  "close":number[];
  "volume":number[];
}

interface pvi_output {
  pvi:number[];
}

declare function pvi (input: pvi_input) : number[]; 

interface qstick_input {
  "open":number[];
  "close":number[];
  "period":number;
}

interface qstick_output {
  qstick:number[];
}

declare function qstick (input: qstick_input) : number[]; 

interface roc_input {
  "values":number[];
  "period":number;
}

interface roc_output {
  roc:number[];
}

declare function roc (input: roc_input) : number[]; 

interface rocr_input {
  "values":number[];
  "period":number;
}

interface rocr_output {
  rocr:number[];
}

declare function rocr (input: rocr_input) : number[]; 

interface round_input {
  "values":number[];
}

interface round_output {
  round:number[];
}

declare function round (input: round_input) : number[]; 

interface rsi_input {
  "values":number[];
  "period":number;
}

interface rsi_output {
  rsi:number[];
}

declare function rsi (input: rsi_input) : number[]; 

interface sin_input {
  "values":number[];
}

interface sin_output {
  sin:number[];
}

declare function sin (input: sin_input) : number[]; 

interface sinh_input {
  "values":number[];
}

interface sinh_output {
  sinh:number[];
}

declare function sinh (input: sinh_input) : number[]; 

interface sma_input {
  "values":number[];
  "period":number;
}

interface sma_output {
  sma:number[];
}

declare function sma (input: sma_input) : number[]; 

interface sqrt_input {
  "values":number[];
}

interface sqrt_output {
  sqrt:number[];
}

declare function sqrt (input: sqrt_input) : number[]; 

interface stddev_input {
  "values":number[];
  "period":number;
}

interface stddev_output {
  stddev:number[];
}

declare function stddev (input: stddev_input) : number[]; 

interface stderr_input {
  "values":number[];
  "period":number;
}

interface stderr_output {
  stderr:number[];
}

declare function stderr (input: stderr_input) : number[]; 

interface stoch_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "%k_period":number;
  "%k_slowing_period":number;
  "%d_period":number;
}

interface stoch_output {
  stoch_k:number[];
  stoch_d:number[];
}

declare function stoch (input: stoch_input) : stoch_output; 

interface stochrsi_input {
  "values":number[];
  "period":number;
}

interface stochrsi_output {
  stochrsi:number[];
}

declare function stochrsi (input: stochrsi_input) : number[]; 

interface sub_input {
  "values":number[];
  "values2":number[];
}

interface sub_output {
  sub:number[];
}

declare function sub (input: sub_input) : number[]; 

interface sum_input {
  "values":number[];
  "period":number;
}

interface sum_output {
  sum:number[];
}

declare function sum (input: sum_input) : number[]; 

interface tan_input {
  "values":number[];
}

interface tan_output {
  tan:number[];
}

declare function tan (input: tan_input) : number[]; 

interface tanh_input {
  "values":number[];
}

interface tanh_output {
  tanh:number[];
}

declare function tanh (input: tanh_input) : number[]; 

interface tema_input {
  "values":number[];
  "period":number;
}

interface tema_output {
  tema:number[];
}

declare function tema (input: tema_input) : number[]; 

interface todeg_input {
  "values":number[];
}

interface todeg_output {
  degrees:number[];
}

declare function todeg (input: todeg_input) : number[]; 

interface torad_input {
  "values":number[];
}

interface torad_output {
  radians:number[];
}

declare function torad (input: torad_input) : number[]; 

interface tr_input {
  "high":number[];
  "low":number[];
  "close":number[];
}

interface tr_output {
  tr:number[];
}

declare function tr (input: tr_input) : number[]; 

interface trima_input {
  "values":number[];
  "period":number;
}

interface trima_output {
  trima:number[];
}

declare function trima (input: trima_input) : number[]; 

interface trix_input {
  "values":number[];
  "period":number;
}

interface trix_output {
  trix:number[];
}

declare function trix (input: trix_input) : number[]; 

interface trunc_input {
  "values":number[];
}

interface trunc_output {
  trunc:number[];
}

declare function trunc (input: trunc_input) : number[]; 

interface tsf_input {
  "values":number[];
  "period":number;
}

interface tsf_output {
  tsf:number[];
}

declare function tsf (input: tsf_input) : number[]; 

interface typprice_input {
  "high":number[];
  "low":number[];
  "close":number[];
}

interface typprice_output {
  typprice:number[];
}

declare function typprice (input: typprice_input) : number[]; 

interface ultosc_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "short_period":number;
  "medium_period":number;
  "long_period":number;
}

interface ultosc_output {
  ultosc:number[];
}

declare function ultosc (input: ultosc_input) : number[]; 

interface var_input {
  "values":number[];
  "period":number;
}

interface var_output {
  var:number[];
}

declare function var (input: var_input) : number[]; 

interface vhf_input {
  "values":number[];
  "period":number;
}

interface vhf_output {
  vhf:number[];
}

declare function vhf (input: vhf_input) : number[]; 

interface vidya_input {
  "values":number[];
  "short_period":number;
  "long_period":number;
  "alpha":number;
}

interface vidya_output {
  vidya:number[];
}

declare function vidya (input: vidya_input) : number[]; 

interface volatility_input {
  "values":number[];
  "period":number;
}

interface volatility_output {
  volatility:number[];
}

declare function volatility (input: volatility_input) : number[]; 

interface vosc_input {
  "volume":number[];
  "short_period":number;
  "long_period":number;
}

interface vosc_output {
  vosc:number[];
}

declare function vosc (input: vosc_input) : number[]; 

interface vwma_input {
  "close":number[];
  "volume":number[];
  "period":number;
}

interface vwma_output {
  vwma:number[];
}

declare function vwma (input: vwma_input) : number[]; 

interface wad_input {
  "high":number[];
  "low":number[];
  "close":number[];
}

interface wad_output {
  wad:number[];
}

declare function wad (input: wad_input) : number[]; 

interface wcprice_input {
  "high":number[];
  "low":number[];
  "close":number[];
}

interface wcprice_output {
  wcprice:number[];
}

declare function wcprice (input: wcprice_input) : number[]; 

interface wilders_input {
  "values":number[];
  "period":number;
}

interface wilders_output {
  wilders:number[];
}

declare function wilders (input: wilders_input) : number[]; 

interface willr_input {
  "high":number[];
  "low":number[];
  "close":number[];
  "period":number;
}

interface willr_output {
  willr:number[];
}

declare function willr (input: willr_input) : number[]; 

interface wma_input {
  "values":number[];
  "period":number;
}

interface wma_output {
  wma:number[];
}

declare function wma (input: wma_input) : number[]; 

interface zlema_input {
  "values":number[];
  "period":number;
}

interface zlema_output {
  zlema:number[];
}

declare function zlema (input: zlema_input) : number[]; 

