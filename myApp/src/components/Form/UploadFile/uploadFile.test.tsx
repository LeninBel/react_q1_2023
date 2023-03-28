import React, { useRef } from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import UploadFile from './uploadFile';

const onChange = vi.fn();
const onBlur = vi.fn();

function Component({ hasError }: Record<string, boolean>) {
  const ref = useRef(null);
  return (
    <UploadFile
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
    expect(screen.getByLabelText('test').previousSibling).toHaveClass('form__upload--error');
  });

  it('should not rerror state if it has validation error', () => {
    render(<Component hasError={false} />);
    expect(screen.getByLabelText('test').previousSibling).not.toHaveClass('form__upload--error');
  });
});
