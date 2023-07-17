import React, { useRef } from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormInput from './formInput';

const onChange = vi.fn();
const onBlur = vi.fn();

function Component({ hasError }: Record<string, boolean>) {
  const ref = useRef(null);
  return (
    <FormInput
      type="text"
      hasError={hasError}
      name="test"
      label="test"
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

describe('FormInput', () => {
  it('should have error state if it has validation error', () => {
    render(<Component hasError />);
    expect(screen.getByLabelText('test')).toHaveClass('form__input--error');
  });

  it('should not rerror state if it has validation error', () => {
    render(<Component hasError={false} />);
    expect(screen.getByLabelText('test')).not.toHaveClass('form__input--error');
  });
});
