import { describe, it } from 'vitest';
import { isEmpty, isStartWithUpperCase, isDateInPast } from './validationRules';

describe('validationRules', () => {
  describe('isEmpty', () => {
    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).toBeTruthy();
    });

    it('should return true for empty string', () => {
      expect(isEmpty('')).toBeTruthy();
    });

    it('should return false for not empty string', () => {
      expect(isEmpty('test')).toBeFalsy();
    });
  });

  describe('isStartWithUpperCase', () => {
    it('should return true if string starts with uppercase letter', () => {
      expect(isStartWithUpperCase('Test')).toBeTruthy();
    });

    it('should return false if string starts with lowercase letter', () => {
      expect(isStartWithUpperCase('test')).toBeFalsy();
    });
  });

  describe('isDateInPast', () => {
    it('should return true if date in the past', () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      currentDate.setFullYear(currentYear - 1);
      expect(isDateInPast(Date.now(), currentDate.toLocaleString())).toBeTruthy();
    });

    it('should return false if date in the future', () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      currentDate.setFullYear(currentYear + 1);
      expect(isDateInPast(Date.now(), currentDate.toUTCString())).toBeFalsy();
    });

    it('should return false if date in undefined', () => {
      expect(isDateInPast(Date.now(), undefined)).toBeFalsy();
    });
  });
});
