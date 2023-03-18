import { describe, it, vi } from 'vitest';
import { addItem, getItem } from './localStorageService';

const lsSetItem = vi.spyOn(Storage.prototype, 'setItem');
const lsGetItem = vi.spyOn(Storage.prototype, 'getItem');

describe('localStorageService', () => {
  it('should invoke localStorage.setItem in addItem ', () => {
    addItem('1', '2');
    expect(lsSetItem).toHaveBeenCalledWith('1', '2');
  });

  it('should invoke localStorage.getItem in getItem ', () => {
    getItem('1');
    expect(lsGetItem).toHaveBeenCalledWith('1');
  });
});
