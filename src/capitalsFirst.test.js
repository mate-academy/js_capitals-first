'use strict';

const capitalsFirst = require('./capitalsFirst');

test('should work with common sentence', () => {
  expect(capitalsFirst('hey You, Sort me Already!'))
    .toBe('You, Sort Already! hey me');
});

test('should work with common sentence 2', () => {
  expect(capitalsFirst('You baby Me and'))
    .toBe('You Me baby and');
});

test('should work with common sentence 3', () => {
  expect(capitalsFirst('Life gets pretty Sometimes'))
    .toBe('Life Sometimes gets pretty');
});

test('should skip number', () => {
  expect(capitalsFirst('Av3p P=qup fjn act 8+g yjznb eb wy'))
    .toBe('Av3p P=qup fjn act yjznb eb wy');
});

test('should skip special characters', () => {
  expect(capitalsFirst('=xupi1 Vmoba Pq &fa asf ?fak(wq .fas'))
    .toBe('Vmoba Pq asf');
});

test('should skip special characters 2', () => {
  expect(capitalsFirst('3g0rh Jl 608 $ynp2 lfcxp7 %ah#5k hgknu 6z H2+8k'))
    .toBe('Jl H2+8k lfcxp7 hgknu');
});

test('should work when all words lowercase', () => {
  expect(capitalsFirst('cdk z3v 6aw zlh 6gur3'))
    .toBe('cdk z3v zlh');
});

test('should work when all words uppercase', () => {
  expect(capitalsFirst('Ahljf W0z9f F@p W3scd 9axp@o $jiad8'))
    .toBe('Ahljf W0z9f F@p W3scd');
});
