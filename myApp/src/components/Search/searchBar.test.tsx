import React, { useRef } from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './searchBar';

vi.mock('../../services/localStorage/localStorageService', () => {
  return {
    addItem: vi.fn(),
  };
});

const onKeyDownMocked = vi.fn();

interface IProps {
  hasError: boolean;
  defaultValue: string;
}

function Component({ hasError, defaultValue }: IProps) {
  const ref = useRef(null);
  return (
    <SearchBar
      hasError={hasError}
      defaultValue={defaultValue}
      onKeyDown={onKeyDownMocked}
      ref={ref}
    />
  );
}

describe('SearchBar', () => {
  it('should invoke onKeyDown handler', () => {
    render(<Component defaultValue="test" hasError />);
    const searchBar = screen.getByTestId('searchBar');
    fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onKeyDownMocked).toHaveBeenCalledTimes(1);
  });
});
