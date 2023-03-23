import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './form';

const onSubmit = vi.fn();

const noErrors = {
  title: false,
  author: false,
  releaseDate: false,
  category: false,
  uploadFile: false,
  agree: false,
  forSale: false,
};

const errors = {
  title: true,
  author: true,
  releaseDate: true,
  category: true,
  uploadFile: true,
  agree: true,
  forSale: true,
};

describe('Form', () => {
  it('should not render errors', () => {
    render(<Form errors={noErrors} onSubmit={onSubmit} />);

    expect(screen.queryByTestId('error')).toBeFalsy();
  });

  it('should render errors', () => {
    render(<Form errors={errors} onSubmit={onSubmit} />);

    expect(screen.getAllByTestId('error').length).toBe(6);
  });

  it('should call onSubmit method', () => {
    render(<Form errors={errors} onSubmit={onSubmit} />);
    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
