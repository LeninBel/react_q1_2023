import React, { useRef } from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormSelect from './formSelect';

const onChange = vi.fn();
const onBlur = vi.fn();
const options = [
  {
    value: 'option1',
    option: 'option1',
  },
  {
    value: 'option2',
    option: 'option2',
  },
];

function Component({ hasError }: Record<string, boolean>) {
  const ref = useRef(null);
  return (
    <FormSelect
      options={options}
      hasError={hasError}
      name="test"
      label="test"
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

describe('FormSelect', () => {
  it('should have error state if it has validation error', () => {
    render(<Component hasError />);
    expect(screen.getByLabelText('test')).toHaveClass('form__input--error');
  });

  it('should not rerror state if it has validation error', () => {
    render(<Component hasError={false} />);
    expect(screen.getByLabelText('test')).not.toHaveClass('form__input--error');
  });
});
