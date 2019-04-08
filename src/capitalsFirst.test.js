'use strict';

const capitalsFirst = require('./capitalsFirst');

test('should work for "hey You, Sort me Already!"', () => {
  expect(capitalsFirst('hey You, Sort me Already!'))
    .toBe('You, Sort Already! hey me');
});

test('should work for "You baby and Me"', () => {
  expect(capitalsFirst('You baby and Me'))
    .toBe('You Me baby and');
});

test('should work for "Life gets pretty Sometimes"', () => {
  expect(capitalsFirst('Life gets pretty Sometimes'))
    .toBe('Life Sometimes gets pretty');
});

test('should work for "Cdk Z3v 6aw zlh 6gur3"', () => {
  expect(capitalsFirst('Cdk Z3v 6aw zlh 6gur3'))
    .toBe('Cdk Z3v zlh');
});

test('should work for "Vww jw P9 jyq"', () => {
  expect(capitalsFirst('Vww jw P9 jyq'))
    .toBe('Vww P9 jw jyq');
});

test('should work for "A8vnz Mbkh kg Uxy Ezps= Ve@1ni"', () => {
  expect(capitalsFirst('A8vnz Mbkh kg Uxy Ezps= Ve@1ni'))
    .toBe('A8vnz Mbkh Uxy Ezps= Ve@1ni kg');
});

test('should work for "Fu =9 Vzf Zqt D3"', () => {
  expect(capitalsFirst('Fu =9 Vzf Zqt D3'))
    .toBe('Fu Vzf Zqt D3');
});

test('should work for "=xupi1 Vmoba Pq"', () => {
  expect(capitalsFirst('=xupi1 Vmoba Pq'))
    .toBe('Vmoba Pq');
});

test('should work for "Av3p P=qup fjn act 8+g yjznb eb wy"', () => {
  expect(capitalsFirst('Av3p P=qup fjn act 8+g yjznb eb wy'))
    .toBe('Av3p P=qup fjn act yjznb eb wy');
});

test('should work for "3g0rh Jl 608 ynp2 lfcxp7 hgknu 6z H2+8k"', () => {
  expect(capitalsFirst('3g0rh Jl 608 ynp2 lfcxp7 hgknu 6z H2+8k'))
    .toBe('Jl H2+8k ynp2 lfcxp7 hgknu');
});

test('should work for "d2ffa =8du yh Ug7"', () => {
  expect(capitalsFirst('d2ffa =8du yh Ug7'))
    .toBe('Ug7 d2ffa yh');
});

test('should work for "Ahljf W0z9f F@p W3scd 9axp@o"', () => {
  expect(capitalsFirst('Ahljf W0z9f F@p W3scd 9axp@o'))
    .toBe('Ahljf W0z9f F@p W3scd');
});
