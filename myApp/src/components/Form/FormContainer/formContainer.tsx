import React from 'react';
import Form from '../form';
import { Book } from '../../../data/mockedData';

interface IProps {
  addBook: (book: Book) => void;
}

type FormData = {
  title: string;
  author: string;
  releaseDate: string;
  category: string;
  forSale: boolean;
  uploadFile: FileList | null | undefined;
  agree: boolean;
};

function FormContainer({ addBook }: IProps) {
  const onSubmitForm = (formData: FormData) => {
    const book: Book = {
      title: formData.title,
      author: formData.author,
      category: formData.category,
      image: formData.uploadFile != null ? URL.createObjectURL(formData.uploadFile[0]) : '',
      releaseDate: formData.releaseDate,
      onSale: formData.forSale,
    };
    addBook(book);
  };

  return <Form onSubmitForm={onSubmitForm} />;
}

export default FormContainer;
