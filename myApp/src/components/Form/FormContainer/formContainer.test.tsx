import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormContainer from './formContainer';

const expectedBook = {
  author: 'Book author',
  category: 'Java',
  image: '',
  onSale: true,
  releaseDate: '12-02-2000',
  title: 'Book title',
};

const formData: FormData = {
  title: 'Book title',
  author: 'Book author',
  releaseDate: '12-02-2000',
  category: 'Java',
  forSale: true,
  uploadFile: null,
  agree: true,
};

type FormData = {
  title: string;
  author: string;
  releaseDate: string;
  category: string;
  forSale: boolean;
  uploadFile: FileList | null | undefined;
  agree: boolean;
};

const addBook = vi.fn();
interface IProps {
  onSubmitForm: (formData: FormData) => void;
}

vi.mock('../form', () => {
  return {
    default: ({ onSubmitForm }: IProps) => {
      const onClick = () => {
        onSubmitForm(formData);
      };

      return (
        <button type="button" onClick={onClick}>
          FakeButton
        </button>
      );
    },
  };
});

describe('FormContainer', () => {
  it('should call addBook method', () => {
    render(<FormContainer addBook={addBook} />);
    screen.getByRole('button').click();
    expect(addBook).toHaveBeenCalledTimes(1);
    expect(addBook).toHaveBeenCalledWith(expectedBook);
  });
});
