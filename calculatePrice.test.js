const { applyAgeRestrictions, applyProductPriceRules, generateProductPrice, calculateProductPrice } = require('./calculatePrice');

describe('applyAgeRestrictions tests', () => {
  test('should return false for age 25 and product type C', () => {
    expect(applyAgeRestrictions(25, 'C')).toBe(false);
  });

  test('should return true for age 26 and product type D', () => {
    expect(applyAgeRestrictions(26, 'D')).toBe(true);
  });

  test('should return true for age 26 and product type C', () => {
    expect(applyAgeRestrictions(26, 'C')).toBe(true);
  });

  test('should return false for age under 21', () => {
    expect(applyAgeRestrictions(20, 'A')).toBe(false);
  });
});

describe('applyProductPriceRules tests', () => {
  test('should return correct price for product type D, hasReturns true, isLoyaltyMember true', () => {
    expect(applyProductPriceRules(100, 'D', true, true)).toBe(243);
  });

  test('should return correct price for product type A, hasReturns false, isLoyaltyMember false', () => {
    expect(applyProductPriceRules(100, 'A', false, false)).toBe(100);
  });

  test('should return correct price for product type B, hasReturns true, isLoyaltyMember false', () => {
    expect(applyProductPriceRules(100, 'B', true, false)).toBe(250);
  });

  test('should return correct price for product type C, hasReturns false, isLoyaltyMember true', () => {
    expect(applyProductPriceRules(100, 'C', false, true)).toBe(90);
  });
});

describe('generateProductPrice tests', () => {
  test('should return correct price for age 20', () => {
    expect(generateProductPrice(20)).toBe(35);
  });

  test('should return correct price for age 30', () => {
    expect(generateProductPrice(30)).toBe(45);
  });

  test('should return correct price for age 50', () => {
    expect(generateProductPrice(50)).toBe(65);
  });
});

describe('calculateProductPrice tests', () => {
  test('testing the exceeded price function : should return "Maximum price exceeded: $2000" for age 10000, product type D, hasReturns true, isLoyaltyMember false', () => {
    expect(calculateProductPrice(10000, 'D', true, false)).toBe("Maximum price exceeded: $2000");
  });
});