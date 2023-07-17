import React, { useRef } from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCheckbox from './formCheckbox';

const onChange = vi.fn();
const onBlur = vi.fn();

function Component({ hasError }: Record<string, boolean>) {
  const ref = useRef(null);
  return (
    <FormCheckbox
      hasError={hasError}
      name="test"
      label="test"
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

describe('FormCheckbox', () => {
  it('should have error state if it has validation error', () => {
    render(<Component hasError />);
    expect(screen.getByLabelText('test').parentNode).toHaveClass('form__checkbox-label--error');
  });

  it('should not have error state if it has validation error', () => {
    render(<Component hasError={false} />);
    expect(screen.getByLabelText('test').parentNode).not.toHaveClass('form__checkbox-label--error');
  });
});
