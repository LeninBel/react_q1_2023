import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from './form';

const onSubmit = vi.fn();

const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

describe('Form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should not render errors if form is correct', async () => {
    render(<Form onSubmitForm={onSubmit} />);
    const submitButton = screen.getByTestId('submit');

    act(() => {
      fireEvent.input(screen.getByRole('textbox', { name: /Title/i }), {
        target: {
          value: 'test',
        },
      });

      fireEvent.input(screen.getByRole('textbox', { name: /Author/i }), {
        target: {
          value: 'Test Author',
        },
      });
      fireEvent.change(screen.getByRole('combobox', { name: /Category/i }), {
        target: { value: 'Java' },
      });

      fireEvent.change(screen.getByLabelText('Release date'), {
        target: { value: '2020-02-12' },
      });

      fireEvent.click(screen.getByRole('radio', { name: /Yes/i }));

      fireEvent.click(screen.getByRole('checkbox', { name: /I consent to my personal data/i }));

      fireEvent.click(submitButton);
    });

    await waitFor(() =>
      fireEvent.change(screen.getByTestId('uploadFile'), {
        target: { files: [file] },
      })
    );

    await waitFor(() => expect(screen.queryAllByTestId('error').length).toBe(0));
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it('should render errors', async () => {
    render(<Form onSubmitForm={onSubmit} />);
    const submitButton = screen.getByTestId('submit');
    fireEvent.submit(submitButton);

    await waitFor(() => expect(screen.getAllByTestId('error').length).toBe(7));
  });

  it('should not call onSubmit method if errors exist', async () => {
    render(<Form onSubmitForm={onSubmit} />);
    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });
});
