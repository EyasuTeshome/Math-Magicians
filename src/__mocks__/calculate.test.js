// eslint-disable-next-line import/named
import calculate, { isNumber } from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate', () => {
  it('should set object properties to null if button is AC', () => {
    expect(calculate({}, 'AC')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  it('should return true if number range is valid', () => {
    expect(isNumber('0')).toBe(true);
    expect(isNumber('1')).toBe(true);
    expect(isNumber('2')).toBe(true);
    expect(isNumber('3')).toBe(true);
    expect(isNumber('4')).toBe(true);
    expect(isNumber('5')).toBe(true);
    expect(isNumber('6')).toBe(true);
    expect(isNumber('7')).toBe(true);
    expect(isNumber('8')).toBe(true);
    expect(isNumber('9')).toBe(true);
  });

  it('should return false if not a valid number', () => {
    expect(isNumber('a')).toBe(false);
  });

  it('should set next to null if button is AC', () => {
    expect(calculate({ next: '1' }, 'AC')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  it('should return an empty object if button and next are 0', () => {
    expect(calculate({ next: '0' }, '0')).toEqual({});
  });

  it('should return an empty object if button equals . and total includes .', () => {
    expect(calculate({ total: '1.' }, '.')).toEqual({});
  });

  it('should add if button equals + and total and next exist', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  it('should subtract if button equals - and total and next exist', () => {
    expect(calculate({ total: '1', next: '2', operation: '-' }, '=')).toEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });

  it('should multiply if button equals x and total and next exist', () => {
    expect(calculate({ total: '10', next: '7', operation: 'x' }, '=')).toEqual({
      total: '70',
      next: null,
      operation: null,
    });
  });

  it('should divide if button equals ÷ and total and next exist', () => {
    expect(calculate({ total: '100', next: '3', operation: '÷' }, '=')).toEqual({
      total: '33.33333333333333333333',
      next: null,
      operation: null,
    });
  });

  it('should return a negative number if number is positive and button equals +/-', () => {
    expect(calculate({ total: '1' }, '+/-')).toEqual({
      total: '-1',
    });
  });
});

describe('operate', () => {
  it('should return the sum of the two input numbers ', () => {
    expect(parseInt(operate(2, 3, '+'), 10)).toEqual(5);
  });
  it('should return the difference of the two input numbers ', () => {
    expect(parseInt(operate(5, 3, '-'), 10)).toEqual(2);
  });
  it('should return the multiple of the two input numbers ', () => {
    expect(parseInt(operate(2, 3, 'x'), 10)).toEqual(6);
  });
  it('should return the division of the two input numbers ', () => {
    expect(parseInt(operate(6, 3, '÷'), 10)).toEqual(2);
  });
  it('should return Can\'t divide by 0.', () => {
    expect(parseInt(operate(6, 0, '÷'), 10)).toBe(NaN);
  });
  it('should return the modulo of the two numbers ', () => {
    expect(parseInt(operate(6, 4, '%'), 10)).toEqual(2);
  });
  it('should return find modulo as Can\'t by 0.', () => {
    expect(parseInt(operate(6, 0, '%'), 10)).toBe(NaN);
  });
});
