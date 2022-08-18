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
  