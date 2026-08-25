const math = require('../math');

describe('add', () => {
  test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('soma números negativos', () => {
    expect(math.add(-2, -3)).toBe(-5);
  });

  test('soma número positivo e negativo', () => {
    expect(math.add(5, -3)).toBe(2);
  });

  test('soma com zero', () => {
    expect(math.add(7, 0)).toBe(7);
  });
});

describe('subtract', () => {
  test('subtrai 5 - 3 igual a 2', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });

  test('subtrai números negativos', () => {
    expect(math.subtract(-5, -3)).toBe(-2);
  });

  test('subtrai um número negativo', () => {
    expect(math.subtract(5, -3)).toBe(8);
  });

  test('subtrai zero', () => {
    expect(math.subtract(7, 0)).toBe(7);
  });
});

describe('multiply', () => {
  test('multiplica 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });

  test('multiplica números negativos', () => {
    expect(math.multiply(-2, -3)).toBe(6);
  });

  test('multiplica positivo por negativo', () => {
    expect(math.multiply(2, -3)).toBe(-6);
  });

  test('multiplica por zero', () => {
    expect(math.multiply(10, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divide 6 / 2 igual a 3', () => {
    expect(math.divide(6, 2)).toBe(3);
  });

  test('divide números negativos', () => {
    expect(math.divide(-6, -2)).toBe(3);
  });

  test('divide positivo por negativo', () => {
    expect(math.divide(6, -2)).toBe(-3);
  });

  test('divide zero por um número', () => {
    expect(math.divide(0, 5)).toBe(0);
  });

  test('não permite divisão por zero', () => {
    expect(() => math.divide(10, 0)).toThrow();
  });
});