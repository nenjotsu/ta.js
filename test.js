const ta = require('./index.js'), assert = require('assert');
ta.sma([1, 2, 3, 4, 5, 6, 10], 6).then((sma) => { try { assert.deepEqual(sma, [3.5, 5]); } catch(e) { console.error('Test failed @ sma \n'); }});
ta.smma([1, 2, 3, 4, 5, 6, 10], 5).then((smma) => { try { assert.deepEqual(smma, [3.4, 4.92]); } catch(e) { console.error('Test failed @ smma \n'); }});
ta.wma([69, 68, 66, 70, 68], 4).then((wma) => { try { assert.deepEqual(wma, [68.3, 68.2]); } catch(e) { console.error('Test failed @ wma \n'); }});
ta.pwma([17, 26, 23, 29, 20], 4).then((pwma) => { try { assert.deepEqual(pwma, [24.090909090909093, 25.18181818181818]); } catch(e) { console.error('Test failed @ pwma \n'); }});
ta.hwma([54, 51, 86, 42, 47], 4).then((hwma) => { try { assert.deepEqual(hwma, [56.2, 55]); } catch(e) { console.error('Test failed @ hwma \n'); }});
ta.hull([6, 7, 5, 6, 7, 4, 5, 7], 6).then((hull) => { try { assert.deepEqual(hull, [4.761904761904762, 5.476190476190476]); } catch(e) { console.error('Test failed @ hull \n'); }});
ta.kama([8, 7, 8, 9, 7, 9], 2, 4, 8).then((kama) => { try { assert.deepEqual(kama, [8, 8.64, 8.377600000000001, 8.377600000000001]); } catch(e) { console.error('Test failed @ kama \n'); }});
ta.vwma([[1, 59], [1.1, 82], [1.21, 27], [1.42, 73], [1.32, 42]], 4).then((vwma) => { try { assert.deepEqual(vwma, [1.184771784232365, 1.258794642857143]); } catch(e) { console.error('Test failed @ vwma \n'); }});
ta.ema([1, 2, 3, 4, 5, 6, 10], 6).then((ema) => { try { assert.deepEqual(ema, [3.5, 5.357142857142857]); } catch(e) { console.error('Test failed @ ema \n'); }});
ta.wsma([1, 2, 3, 4, 5, 6, 10], 6).then((wsma) => { try { assert.deepEqual(wsma, [3.5, 4.583333333333333]); } catch(e) { console.error('Test failed @ wsma \n'); } });
ta.lsma([5, 6, 6, 3, 4, 6, 7], 6).then((lsma) => { try { assert.deepEqual(lsma, [4.714285714285714, 5.761904761904762]); } catch(e) { console.error('Test failed @ lsma \n'); }});
ta.macd([1, 2, 3, 4, 5, 6, 14], 3, 6).then((macd) => { try { assert.deepEqual(macd, [1.5, 3]); } catch(e) { console.error('Test failed @ macd \n'); }});
ta.rsi([1, 2, 3, 4, 5, 6, 7, 5], 6).then((rsi) => { try { assert.deepEqual(rsi, [100, 71.42857142857143]); } catch(e) { console.error('Test failed @ rsi \n'); }});
ta.wrsi([1, 2, 3, 4, 5, 6, 7, 5, 6], 6).then((wrsi) => { try { assert.deepEqual(wrsi, [100, 71.42857142857143, 75.60975609756098]) } catch(e) { console.error('Test failed @ wrsi \n') }});
ta.tsi([1.32, 1.27, 1.42, 1.47, 1.42, 1.45, 1.59], 3, 2, 2).then((tsi) => { try { assert.deepEqual(tsi, [[0.3268608414239478, 0.32038834951456274], [0.5795418491021003, 0.7058823529411765]]); } catch(e) { console.error('Test failed @ tsi \n'); }});
ta.bop([[4, 5, 4, 5], [5, 6, 5, 6], [6, 8, 5, 6]], 2).then((bop) => { try { assert.deepEqual(bop, [1, 0.5]); } catch(e) { console.error('Test failed @ bop \n'); }});
ta.fi([[1.4, 200], [1.5, 240], [1.1, 300], [1.2, 240], [1.5, 400]], 4).then((fi) => { try { assert.deepEqual(fi, [12.00000000000001]); } catch(e) { console.error('Test failed @ fi \n'); }});
ta.asi([[7, 6, 4], [9, 7, 5], [9, 8, 6]]).then((asi) => { try { assert.deepEqual(asi, [0, -12.5]); } catch(e) { console.error('Test failed @ asi \n'); }});
ta.ao([[6, 5], [8, 6], [7, 4], [6, 5], [7, 6], [9, 8]], 2, 5).then((ao) => { try { assert.deepEqual(ao, [0.0, 0.9000000000000004]); } catch(e) { console.error('Test failed @ ao \n'); }});
ta.pr([2, 1, 3, 1, 2], 4).then((pr) => { try { assert.deepEqual(pr, [-100, -50]); } catch(e) { console.error('Test failed @ pr \n'); }});
ta.stoch([[3,2,1], [2,2,1], [4,3,1], [2,2,1]], 2, 1, 1).then((stoch) => { try { assert.deepEqual(stoch, [[66.66666666666667, 66.66666666666667], [33.333333333333336, 33.333333333333336]]); } catch(e) { console.error('Test failed @ stoch \n'); }});
ta.variance([6, 7, 2, 3, 5, 8, 6, 2], 7).then((variance) => { try { assert.deepEqual(variance, [3.918367346938776, 5.061224489795919]); } catch(e) { console.error('Test failed @ variance \n'); }});
ta.std([1, 2, 3], 3).then((std) => { try { assert.deepEqual(std, 0.816496580927726); } catch(e) { console.error('Test failed @ std \n'); }});
ta.normsinv(0.4732).then((norm) => { try { assert.deepEqual(norm, -0.06722824471054376); } catch(e) { console.error('Test failed @ normsinv \n'); }});
ta.cor([1, 2, 3, 4, 5, 2], [1, 3, 2, 4, 6, 3]).then((cor) => { try { assert.deepEqual(cor, 0.8808929232684737); } catch(e) { console.error('Test failed @ cor \n'); }});
ta.dif(0.75, 0.5).then((dif) => { try {assert.deepEqual(dif, 0.5); } catch(e) { console.error('Test failed @ dif \n'); }});
ta.drawdown([1,2,3,4,2,3]).then((draw) => { try { assert.deepEqual(draw, -0.5); } catch(e) { console.error('Test failed @ drawdown \n'); }});
ta.median([4, 6, 3, 1, 2, 5], 4).then((median) => { try { assert.deepEqual(median, [3, 2, 2]); } catch(e) { console.error('Test failed @ median \n'); }});
ta.percentile([[6,4,7], [5,3,6], [7,5,8]], 0.5).then((perc) => { try { assert.deepEqual(perc, [6,4,7]); } catch(e) { console.error('Test failed @ percentile')}});
ta.kmeans([2, 3, 4, 5, 3, 5, 7, 8, 6, 8, 6, 4, 2, 6], 4).then((kmeans) => { try { assert.deepEqual(kmeans, [[ 4, 5, 5, 4 ], [ 7, 6, 6, 6 ], [ 8, 8 ], [ 2, 3, 3, 2 ]]); } catch(e) { console.error('Test failed @ kmeans \n'); }});
ta.normalize([5,4,9,4], 0.1).then((norm) => { try { assert.deepEqual(norm, [0.2222222222222222, 0.06349206349206349, 0.8571428571428571, 0.06349206349206349]); } catch(e) { console.error('Test failed @ normalize \n'); } });
ta.denormalize([5,4,9,4], [0.2222222222222222, 0.06349206349206349, 0.8571428571428571, 0.06349206349206349, 0.4444444444444444], 0.1).then((dnorm) => { try { assert.deepEqual(dnorm, [5,4,9,4,6.4]); } catch(e) { console.error('Test failed @ denormalize \n'); } });
ta.mad([3, 7, 5, 4, 3, 8, 9], 6).then((mad) => { try { assert.deepEqual(mad, [1, 2]); } catch(e) { console.error('Test failed @ mad \n'); }});
ta.aad([4, 6, 8, 6, 8, 9, 10, 11], 7).then((aad) => { try { assert.deepEqual(aad, [1.6734693877551021, 1.469387755102041]); } catch(e) { console.error('Test failed @aad \n'); }});
ta.ssd([7, 6, 5, 7, 9, 8, 3, 5, 4], 7).then((ssd) => { try { assert.deepEqual(ssd, [4.869731585445518, 4.9856938190329, 5.3718844791323335]); } catch(e) { console.error('Test failed @ ssd \n'); }});
ta.bands([1, 2, 3, 4, 5, 6], 5, 2).then((bands) => { try { assert.deepEqual(bands, [[5.82842712474619, 3.0, 0.1715728752538097], [6.82842712474619, 4.0, 1.1715728752538097]]); } catch(e) { console.error('Test failed @ bands \n'); }});
ta.bandwidth([1, 2, 3, 4, 5, 6], 5, 2).then((bandwidth) => { try { assert.deepEqual(bandwidth, [1.8856180831641265, 1.414213562373095]); } catch(e) { console.error('Test failed @ bandwidth \n'); }});
ta.keltner([[3,2,1], [2,2,1], [4,3,1], [2,2,1], [3,3,1]], 5, 1).then((keltner) => { try { assert.deepEqual(keltner, [[3.932266666666667, 2.066666666666667, 0.20106666666666695]]); } catch(e) { console.error('Test failed @ keltner \n'); }});
ta.don([[6, 2], [5, 2], [5, 3], [6, 3], [7, 4], [6, 3]], 5).then((donchian) => { try { assert.deepEqual(donchian, [[7, 4.5, 2], [7, 4.5, 2]]); } catch(e) { console.error('Test failed @ donchian \n'); }});
ta.ichimoku([[6,3,2], [5,4,2], [5,4,3], [6,4,3], [7,6,4], [6,5,3], [7,6,5], [7,5,3], [8,6,5], [9,7,6], [8,7,6], [7,5,5],[6,5,4],[6,5,3],[6,3,2], [5,4,2]], 2, 4, 6, 4).then((ichimoku) => { try { assert.deepEqual(ichimoku, [[7, 6, 10.5, 6, 5], [7.5, 6, 7.5, 5.5, 6], [6.5, 7, 8, 5, 5]]); } catch(e) { console.error('Test failed @ ichimoku \n'); }});
ta.atr([[3,2,1], [2,2,1], [4,3,1], [2,2,1]], 3).then((atr) => { try { assert.deepEqual(atr, [2.0, 1.6666666666666667, 2.111111111111111, 1.7407407407407407]); } catch(e) { console.error('Test failed @ atr \n'); }});
ta.aroon.up([5, 4, 5, 2], 3).then((aroon_up) => { try { assert.deepEqual(aroon_up, [100, 50]); } catch(e) { console.error('Test failed @ aroon up \n'); }});
ta.aroon.down([2, 5, 4, 5], 3).then((aroon_down) => { try { assert.deepEqual(aroon_down, [0, 50]); } catch(e) { console.error('Test failed @ aroon down \n'); }});
ta.aroon.osc([2, 5, 4, 5], 3).then((aroon_osc) => { try { assert.deepEqual(aroon_osc, [50,50]); } catch(e) { console.error('Test failed @ aroon osc \n'); }});
ta.mfi([[19, 13], [14, 38], [21, 25], [32, 17]], 3).then((mfi) => { try { assert.deepEqual(mfi, [41.53846153846154, 45.578231292517]); } catch(e) { console.error('Test failed @ mfi \n'); }});
ta.roc([1, 2, 3, 4], 3).then((roc) => { try { assert.deepEqual(roc, [2, 1]); } catch(e) { console.error('Test failed @ roc \n'); }});
ta.cop([3, 4, 5, 3, 4, 5, 6, 4, 7, 5, 4, 7, 5], 4, 6, 5).then((cop) => { try { assert.deepEqual(cop, [0.3755555555555556, 0.23666666666666666]); } catch(e) { console.error('Test failed @ cop \n'); }});
ta.kst([8, 6, 7, 6, 8, 9, 7, 5, 6, 7, 6, 8, 6, 7, 6, 8, 9, 9, 8, 6, 4, 6, 5, 6, 7, 8, 9], 5, 7, 10, 15, 5, 5, 5, 7, 4).then((kst) => { try { assert.deepEqual(kst, [[-0.6828231292517006, -0.5174886621315192], [-0.2939342403628118, -0.5786281179138322], [0.3517800453514739, -0.35968820861678]]); } catch(e) { console.error('Test failed @ kst \n'); }});
ta.obv([[25200, 10], [30000, 10.15], [25600, 10.17], [32000, 10.13]]).then((obv) => { try { assert.deepEqual(obv, [0, 30000, 55600, 23600]); } catch(e) { console.error('Test failed @ obv \n'); }});
ta.vwap([[127.21, 89329], [127.17, 16137], [127.16, 23945]], 2).then((vwap) => { try { assert.deepEqual(vwap, [127.20387973375304, 127.16402599670675]); } catch(e) { console.error('Test failed @ vwap \n'); }});
ta.mom_osc([1, 1.2, 1.3, 1.3, 1.2, 1.4], 4).then((cmom) => { try { assert.deepEqual(cmom, [0, 3.8461538461538494]); } catch(e) { console.error('Test failed @ mom_osc \n'); }});
ta.mom([1, 1.1, 1.2, 1.24, 1.34], 4).then((mom) => { try { assert.deepEqual(mom, [0.24, 0.24]); } catch(e) { console.error('Test failed @ mom \n'); }});
ta.ha([[3, 4, 2, 3], [3, 6, 3, 5], [5, 5, 2, 3]]).then((ha) => { try { assert.deepEqual(ha, [[3, 4, 2, 3], [3, 6, 3, 4.25], [3.625, 5, 2, 3.75]]); } catch(e) { console.error('Test failed @ ha \n'); }});
ta.ren([[8, 6], [9, 7], [9, 8], [13, 10]], 2).then((ren) => { try { assert.deepEqual(ren, [[8, 10, 8, 10], [10, 12, 10, 12]]); } catch(e) { console.error('Test failed @ renko \n'); }});
ta.chaikin_osc([[2,3,4,6],[5,5,5,4],[5,4,3,7],[4,3,3,4],[6,5,4,6],[7,4,3,6]],2,4).then((osc) => { try { assert.deepEqual(osc, [-1.6666666666666665, -0.28888888888888886, -0.7362962962962962]); } catch(e) { console.error('Test failed @ chaikin_osc \n'); } });
ta.envelope([6,7,8,7,6,7,8,7,8,7,8,7,8], 11, 0.05).then((enve) => { try { assert.deepEqual(enve, [[7.540909090909091, 7.181818181818182, 6.822727272727272], [7.636363636363637, 7.2727272727272725, 6.909090909090908]]); } catch(e) { console.error('Test failed @envelope \n'); } });
ta.fractals([[7,6],[8,6],[9,6],[8,5],[7,4],[6,3],[7,4],[8,5]]).then((frac) => { try { assert.deepEqual(frac, [[false, false],[false,false],[true,false],[false,false],[false,false],[false,true],[false,false],[false,false]]); } catch(e) { console.error('Test failed @fractals \n'); } });
ta.recent_high([4,5,6,7,8,9,8,7,8,9,10,3,2,1], 3).then((hi) => { try { assert.deepEqual(hi, {index: 10, value: 10}); } catch(e) { console.error('Test failed @ recent_high \n'); } });
ta.recent_low([1,4,5,6,4,3,2,3,4,3,5,7,8,8,5], 4).then((lo) => { try { assert.deepEqual(lo, {index: 6, value: 2}); } catch(e) { console.error('Test failed @ recent_low \n'); } });
ta.support([4,3,2,5,7,6,5,4,7,8,5,4,6,7,5]).then((sup) => { try { sup.calculate(9).then((calc) => { assert.deepEqual(calc, 4) }); } catch(e) { console.error('Test failed @ support \n'); } });
ta.resistance([5,7,5,5,4,6,5,4,6,5,4,3,2,4,3,2,1]).then((res) => { try { res.calculate(4).then((res) => { assert.deepEqual(res, 6.428571428571429); }); } catch(e) { console.error('Test failed @ resistance \n'); } });
ta.ac([[6, 5], [8, 6], [7, 4], [6, 5], [7, 6], [9, 8]], 2, 4).then((ac) => { try { assert.deepEqual(ac, [0.125, 0.5625]) } catch(e) { console.error('Test failed @ ac \n'); } });
ta.fib(1, 2).then((fib) => { try { assert.deepEqual(fib, [1,1.236,1.3820000000000001,1.5,1.6179999999999999,1.786,2,2.6180000000000003,3.618,4.618,5.236]); } catch(e) { console.error('Test failed @ fib \n'); } });
ta.alligator([8,7,8,9,7,8,9,6,7,8,6,8,10,8,7,9,8,7,9,6,7,9]).then((alli) => { try { assert.deepEqual(alli, [[7.217569412835686, 6.985078985569999, 6.456171046541722], [7.171597633136094, 7.119368115440011, 6.719144767291392]]); } catch(e) { console.error('Test failed @ alligator \n'); } });
ta.gator([8,7,8,9,7,8,9,6,7,8,6,8,10,8,7,9,8,7,9,6,7,9]).then((gato) => { try { assert.deepEqual(gato, [[0.23249042726568714, -0.5289079390282767], [0.05222951769608297, -0.4002233481486188]]); } catch(e) { console.error('Test failed @ gator \n'); } });
ta.standardize([6,4,6,8,6]).then((standard) => { try { assert.deepEqual(standard, [0, -1.5811388300841895, 0, 1.5811388300841895, 0]); } catch(e) { console.error('Test failed @ standardize \n'); } });
ta.er([0.02, -0.01, 0.03, 0.05, -0.03]).then((er) => { try { assert.deepEqual(er, 0.011934565489708282); } catch(e) { console.error('Test failed @ er \n'); } });
ta.ar([0.02, -0.01, 0.03, 0.05, -0.03], 3).then((ar) => { try { assert.deepEqual(ar, [0.03667479679633267, -0.053301281310417566]); } catch(e) { console.error('Test failed @ ar \n'); } });
ta.winratio([0.01,0.02,-0.01,-0.03,-0.015,0.005]).then((wr) => { try { assert.deepEqual(wr, 0.5); } catch(e) { console.error('Test failed @ winratio \n') } });
ta.avgwin([0.01,0.02,-0.01,-0.03,-0.015,0.005]).then((wn) => { try { assert.deepEqual(wn, 0.011666666666666665); } catch(e) { console.error('Test failed @ avgwin \n'); } });
ta.avgloss([0.01,0.02,-0.01,-0.03,-0.015,0.005]).then((ln) => { try { assert.deepEqual(ln, -0.018333333333333333); } catch(e) { console.error('Test failed @ avgloss \n'); } });
ta.fisher([8,6,8,9,7,8,9,8,7,8,6,7], 9).then((fish) => { try { assert.deepEqual(fish, [[-0.20692076425551026, 0.11044691579009712], [-0.3930108381942109, -0.20692076425551026]]); } catch(e) { console.error('Test failed @ fisher \n'); } });
ta.cross([3,4,5,4,3], [4,3,2,3,4]).then((cross) => { try { assert.deepEqual(cross, [{index: 1, cross: true}, {index: 4, cross: false}]); } catch(e) { console.error("Test failed @ cross \n"); } });
